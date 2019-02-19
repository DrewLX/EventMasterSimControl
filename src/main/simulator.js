const {
    spawn
} = require('child_process');
const chalk = require('chalk');
const builder = require('xmlbuilder');
const fs = require('fs');
const Store = require('electron-store');

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

var store = null;

module.exports = {
    process: {},
    log: new MyEmitter(),
    running: false,
    path: '',
    setStore: function(s) {
        store = s;
    },
    start: function() {
        if (!this.running) {
            if (this.path !== '') {

                process = spawn('./wvp_run', [], {
                    'cwd': this.path + '/wvp_sim/Frameworks/'
                });

                process.stdout.on('data', (data) => {
                    this.log.emit('new', Utf8ArrayToStr(data));
                });

                if (process.pid !== null) {
                    this.running = true
                    console.log(chalk.blue('Simulator Started: ') + process.pid)
                }
            } else {
                this.log.emit('new', "No path to simulator currently set!");
            }
        } else {
            console.log(chalk.magenta("Can't run two simulators at once!"))
            this.log.emit('new', "Can't run two simulators yet!");
        }
    },

    stop: function() {
        process.kill(); // does not terminate the node process in the shell

        if (process.killed) {
            console.log(chalk.red('Simulator Killed'));
            this.running = false
        }
    },

    setPath: function(path) {
        this.path = path;
        console.log(chalk.magenta('Path Set: ') + this.path)
        this.log.emit('new', "New Simulator Path Set: " + this.path);

        store.set('path', this.path);
    },

    saveCurrentAsXML: function(e) {
        var xml = builder.create('simhw', {}, {}, {
                'headless': true
            })
            .ele('frametype', {
                'type': e.frames[0].frameType
            }, '').root()

        for (var card in e.frames[0].cards) {
            if (e.frames[0].cards[card] !== 'x') {
                var item = xml.ele('card')
                item.att('id', "slot-" + card);
                item.att('type', e.frames[0].cards[card]);
                item.att('slot', card)
                item.txt(cards[e.frames[0].cards[card]])
            }
        }
        for (var l = 0; l < 4; l++) {
            var link = e.frames[0].links[l];
            if (typeof link == "object") {
                if (link.connection.frameType !== null) {
                    var item = xml.ele('linkinfo')
                    item.att('selfslot', link.cardId)
                    item.att('selfconn', link.connectorId)
                    item.att('detectframetype', link.connection.frameType)
                    item.att('detectslot', link.connection.frameSlot)
                    item.att('detectsconn', link.connection.frameConnector)
                    item.att('detectunitid', link.connection.unitId)
                    item.att('detectip', link.connection.ipAddress)
                    item.att('detectmac', link.connection.macAddress)
                }
            }
        }
        xml = xml.end({
            pretty: true,
            allowEmpty: true
        });
        console.log(xml)

        fs.writeFile(this.path + "/wvp_sim/wvp_9876/sim/simhw.xml", xml, function(err) {
            if (err) {
                return console.log(err);
            }
            console.log('File written')
        });

    }
}


const cards = {
    0: "CardType_Input_2_DVI",
    1: "CardType_Input_4_SDI",
    2: "CardType_Input_4_HDMI_DP",
    3: "CardType_Input_6_TRI_COMBO",
    4: "CardType_Input_4_HDMI20",
    5: "CardType_Input_4_DP",
    20: "CardType_Output_2_DVI",
    21: "CardType_Output_4_SDI",
    22: "CardType_Output_4_HDMI",
    23: "CardType_Output_DP",
    25: "CardType_Output_6_TRI_COMBO",
    26: "CardType_Output_4_HDMI20",
    40: "CardType_Output_Multiviewer",
    50: "CardType_VPU",
    52: "CardType_VPU",
    70: "CardType_Exp"
}

function Utf8ArrayToStr(array) {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12:
            case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }

    return out;
}
