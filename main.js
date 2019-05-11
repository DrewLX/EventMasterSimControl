// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, dialog, Menu} = require('electron')
const chalk = require('chalk');
const Store = require('electron-store');
var fs = require('fs'), xml2js = require('xml2js');
var _ = require('lodash');

const store = new Store();
var parser = new xml2js.Parser();

const simulator = require('./simulator.js');
simulator.setStore(store)

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
let aboutWindow

function createWindow () {

  Menu.setApplicationMenu(null)

  mainWindow = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('./renderer/index.html')

if (store.get('path')) {
  simulator.setPath(store.get('path'))
}

  // Open the DevTools.

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

function showAboutWindow () {
  console.log('Showing about window')
  // Create the browser window.
  aboutWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  aboutWindow.loadFile('./renderer/about.html')
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    app.quit()

})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})


ipcMain.on('command', (event, arg) => {
  switch(arg) {
    case 'sim-start':
      simulator.start()
    break;
    case 'sim-stop':
      simulator.stop()
    break;
    case 'choose-path':
      var result = dialog.showOpenDialog({ properties: ['openDirectory'] })
      if (typeof result !== "undefined") {
        simulator.setPath(result[0])
      } else {
        mainWindow.webContents.send('log', "Path not changed... it is still: " + simulator.path)
      }
    break;
    case 'about':
      showAboutWindow();
    break;
    default:
      console.log(chalk.red('Unrecognised javascript button press: ') + arg)
  }
})

ipcMain.on('config', (event, arg) => {
    simulator.saveCurrentAsXML(arg);
})


ipcMain.on('saveAs', (event, arg) => {
    simulator.saveJsonToXMLFileAtPath(arg, dialog.showSaveDialog({}))
})

ipcMain.on('openXML', (event, arg) => {
  var result = dialog.showOpenDialog({ properties: ['openFile'] })
  if (typeof result !== "undefined") {
    fs.readFile(result[0], function(err, data) {
    parser.parseString(data, function (err, result) {

      var frame = {};
      frame.frameType = Number(result.simhw.frametype[0].$.type)
      frame.hasChanged = false;
      frame.cards = {};
      frame.links = [];

      for (var c = 0; c<result.simhw.card.length; c++) {
        frame.cards[result.simhw.card[c].$.slot] = Number(result.simhw.card[c].$.type)
      }
      if (result.simhw.linkinfo !== undefined) {
        console.log('THIS HAS LINK INFO! ' + typeof result.simhw.linkinfo)
        for (var l = 0; l < _.size(result.simhw.linkinfo); l++) {
          console.dir('THIS IS LOOP ' + result.simhw.linkinfo[l].$)
          frame.links[l] = {};
          frame.links[l].cardId = Number(result.simhw.linkinfo[l].$.selfslot);
          frame.links[l].connectorId = Number(result.simhw.linkinfo[l].$.selfconn);
          frame.links[l].connection = {
            "frameConnector": Number(result.simhw.linkinfo[l].$.detectsconn),
            "frameSlot": Number(result.simhw.linkinfo[l].$.detectslot),
            "frameType": Number(result.simhw.linkinfo[l].$.detectframetype),
            "ipAddress": result.simhw.linkinfo[l].$.detectip,
            "macAddress": result.simhw.linkinfo[l].$.detectmac,
            "unitId": Number(result.simhw.linkinfo[l].$.detectunitid)
          }
        }
      }

      console.log(chalk.yellow(JSON.stringify(frame, null, 12)))

      mainWindow.webContents.send('openedXML', {"frames":[frame]})
    });
});
  } else {
    mainWindow.webContents.send('log', "No file opened...")
  }
})

simulator.log.on('new', (log) => {
  // console.log(chalk.yellow(log));
  mainWindow.webContents.send('log', log)
})

setInterval(function(){
  if (mainWindow !== null) {
    mainWindow.webContents.send('running', simulator.running)
    mainWindow.webContents.send('path', simulator.path)
  }
}, 1000)
