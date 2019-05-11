function getConfig() {
    "use strict";
    var e = {
        ioCards: {
            x: {
                id: "x",
                text: "",
                connectors: [],
                type: "empty"
            },
            0: {
                id: 0,
                headerText: "In",
                headerColour: "#95b0fb",
                text: "dvi",
                connectors: ["dvi", "dvi"],
                type: "in"
            },
            1: {
                id: 1,
                headerText: "In",
                headerColour: "#95b0fb",
                text: "sdi",
                connectors: ["sdi", "sdi", "sdi", "sdi"],
                type: "in"
            },
            2: {
                id: 2,
                headerText: "In",
                headerColour: "#95b0fb",
                text: "hdmi-dp",
                connectors: ["dp", "dp", "hdmi", "hdmi"],
                type: "in"
            },
            3: {
                id: 3,
                headerText: "In",
                headerColour: "#95b0fb",
                text: "tci",
                connectors: ["dp", "hdmi", "sdi", "sdi", "sdi", "sdi"],
                type: "in"
            },
            4: {
                id: 4,
                headerText: "In",
                headerColour: "#95b0fb",
                text: "hdmi-2.0",
                connectors: ["hdmi", "hdmi", "hdmi", "hdmi"],
                type: "in"
            },
            5: {
                id: 5,
                headerText: "In",
                headerColour: "#95b0fb",
                text: "dp-1.2",
                connectors: ["dp", "dp", "dp", "dp"],
                type: "in"
            },
            20: {
                id: 20,
                headerText: "Out",
                headerColour: "#1ac161",
                text: "dvi",
                connectors: ["dvi", "dvi"],
                type: "out"
            },
            21: {
                id: 21,
                headerText: "Out",
                headerColour: "#1ac161",
                text: "sdi",
                connectors: ["sdi", "sdi", "sdi", "sdi"],
                type: "out"
            },
            22: {
                id: 22,
                headerText: "Out",
                headerColour: "#1ac161",
                text: "hdmi",
                connectors: ["hdmi", "hdmi", "hdmi", "hdmi"],
                type: "out"
            },
            23: {
                id: 23,
                headerText: "Out",
                headerColour: "#1ac161",
                text: "dp",
                connectors: ["dp", "dp", "dp", "dp"],
                type: "out"
            },
            25: {
                id: 25,
                headerText: "Out",
                headerColour: "#1ac161",
                text: "tco",
                connectors: ["dp", "hdmi", "sdi", "sdi", "sdi", "sdi"],
                type: "out"
            },
            26: {
                id: 26,
                headerText: "Out",
                headerColour: "#1ac161",
                text: "dp-1.2",
                connectors: ["dp", "dp", "dp", "dp"],
                type: "out"
            },
            40: {
                id: 40,
                headerText: "MVR",
                headerColour: "#459660",
                text: "mv",
                connectors: [],
                type: "out"
            },
            50: {
                id: 50,
                headerText: "VPU",
                headerColour: "#101010",
                text: "vpu",
                connectors: [],
                type: "vpu"
            },
            70: {
                id: 70,
                headerText: "Exp",
                headerColour: "#dba31e",
                text: "exp",
                connectors: ["cxp", "cxp"],
                type: "exp"
            }
        }
    };
    return e.selectableCards = [{
        displayText: "Tri Combo",
        input: e.ioCards[3],
        output: e.ioCards[25],
        imgUrl: "img/card-tc-90.png"
    }, {
        displayText: "4x DisplayPort 1.2",
        input: e.ioCards[5],
        output: e.ioCards[23],
        imgUrl: "img/card-dp-90.png"
    }, {
        displayText: "4x HDMI 2.0",
        input: e.ioCards[4],
        output: e.ioCards[26],
        imgUrl: "img/card-hdmi-90.png"
    }, {
        displayText: "4x HDMI 1.4",
        input: null,
        output: e.ioCards[22],
        imgUrl: "img/card-hdmi-90.png"
    }, {
        displayText: "2x DisplayPort 1.1 + 2x HDMI 1.4",
        input: e.ioCards[2],
        output: null,
        imgUrl: "img/card-hdmi-dp-90.png"
    }, {
        displayText: "4x 3G SDI",
        input: e.ioCards[1],
        output: e.ioCards[21],
        imgUrl: "img/card-sdi-90.png"
    }, {
        displayText: "2x Dual Link DVI",
        input: e.ioCards[0],
        output: e.ioCards[20],
        imgUrl: "img/card-dvi-90.png"
    }, {
        displayText: "Empty Slot",
        input: e.ioCards.x,
        output: e.ioCards.x,
        imgUrl: "img/card-blank-90.png"
    }], e.frames = {
        0: {
            id: 0,
            text: "E2",
            configs: [{
                text: "E2",
                frameType: 0,
                cards: {
                    0: 70,
                    1: 70,
                    2: 1,
                    3: 1,
                    4: 0,
                    5: 0,
                    6: 2,
                    7: 2,
                    8: 2,
                    9: 2,
                    10: 22,
                    11: 22,
                    12: 21,
                    13: 40,
                    14: 50,
                    15: 50,
                    16: 50,
                    17: 50,
                    19: 50,
                    20: 50,
                    21: 50,
                    22: 50
                }
            }, {
                text: "E2 Jr",
                frameType: 0,
                cards: {
                    0: "x",
                    1: "x",
                    2: "x",
                    3: "x",
                    4: "x",
                    5: "x",
                    6: 1,
                    7: 2,
                    8: 2,
                    9: 2,
                    10: "x",
                    11: 22,
                    12: 21,
                    13: 40,
                    14: 50,
                    15: 50,
                    16: 50,
                    17: 50,
                    19: "x",
                    20: "x",
                    21: "x",
                    22: "x"
                }
            }],
            slots: {
                0: {
                    isSelectable: !1,
                    isVisible: !0,
                    validCards: [70]
                },
                1: {
                    isSelectable: !1,
                    isVisible: !0,
                    validCards: [70]
                },
                2: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                3: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                4: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                5: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                6: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                7: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                8: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                9: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                10: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [20, 21, 22, 23, 25, 26]
                },
                11: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [20, 21, 22, 23, 25, 26]
                },
                12: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [20, 21, 22, 23, 25, 26]
                },
                13: {
                    isSelectable: !1,
                    isVisible: !0,
                    validCards: [20, 21, 22, 23, 25, 40]
                },
                14: {
                    isSelectable: !1,
                    isVisible: !1,
                    validCards: [50]
                },
                15: {
                    isSelectable: !1,
                    isVisible: !1,
                    validCards: [50]
                },
                16: {
                    isSelectable: !1,
                    isVisible: !1,
                    validCards: [50]
                },
                17: {
                    isSelectable: !1,
                    isVisible: !1,
                    validCards: [50]
                },
                19: {
                    isSelectable: !1,
                    isVisible: !1,
                    validCards: [50]
                },
                20: {
                    isSelectable: !1,
                    isVisible: !1,
                    validCards: [50]
                },
                21: {
                    isSelectable: !1,
                    isVisible: !1,
                    validCards: [50]
                },
                22: {
                    isSelectable: !1,
                    isVisible: !1,
                    validCards: [50]
                }
            },
            expansionOptions: [0, 1, 2],
            vpuOptions: [0, 4, 8]
        },
        1: {
            id: 1,
            text: "s3",
            configs: [{
                text: "S3-4K",
                frameType: 1,
                cards: {
                    0: 70,
                    1: 50,
                    2: 50,
                    3: 1,
                    4: 2,
                    5: 2,
                    6: 21,
                    7: 22,
                    8: 40
                }
            }, {
                text: "S3-4K Jr",
                frameType: 1,
                cards: {
                    0: "x",
                    1: 50,
                    2: "x",
                    3: "x",
                    4: 1,
                    5: 2,
                    6: "x",
                    7: 22,
                    8: 40
                }
            }],
            slots: {
                0: {
                    isSelectable: !1,
                    isVisible: !0,
                    validCards: [70]
                },
                1: {
                    isSelectable: !1,
                    isVisible: !0,
                    validCards: [50]
                },
                2: {
                    isSelectable: !1,
                    isVisible: !0,
                    validCards: [50]
                },
                3: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                4: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                5: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5]
                },
                6: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [20, 21, 22, 23, 25, 26]
                },
                7: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [20, 21, 22, 23, 25, 26]
                },
                8: {
                    isSelectable: !1,
                    isVisible: !0,
                    validCards: [20, 21, 22, 23, 25, 40]
                }
            },
            expansionOptions: [0, 1],
            vpuOptions: [0, 1, 2]
        },
        2: {
            id: 2,
            text: "ex",
            configs: [{
                text: "EX",
                frameType: 2,
                cards: {
                    0: 70,
                    1: 2,
                    2: 21
                }
            }],
            slots: {
                0: {
                    isSelectable: !1,
                    isVisible: !0,
                    validCards: [70],
                    excludeFromXml: !0
                },
                1: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5, 20, 21, 22, 23, 25, 26, 50]
                },
                2: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 1, 2, 3, 4, 5, 20, 21, 22, 23, 25, 26, 50]
                }
            },
            expansionOptions: [],
            vpuOptions: [0, 1, 2]
        },
        3: {
            id: 3,
            text: "ip4k",
            configs: [{
                text: "IP4K",
                frameType: 3,
                cards: {
                    0: 50,
                    1: 3,
                    2: 25
                }
            }],
            slots: {
                0: {
                    isSelectable: !1,
                    isVisible: !1,
                    validCards: [50],
                    excludeFromXml: !0
                },
                1: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 3, 25]
                },
                2: {
                    isSelectable: !0,
                    isVisible: !0,
                    validCards: [0, 3, 25]
                }
            },
            expansionOptions: [],
            vpuOptions: []
        }
    }, e.connectorText = {
        hdmi: "HDMI",
        dp: "Display Port",
        sdi: "SDI",
        dvi: "DVI"
    }, e.frameLinks = {
        0: {
            frameType: 0,
            text: "E2",
            connectorCount: 4
        },
        1: {
            frameType: 1,
            text: "S3-4K",
            connectorCount: 2
        },
        2: {
            frameType: 2,
            text: "Ex",
            connectorCount: 2
        },
        3: {
            frameType: 3,
            text: "IP4K",
            connectorCount: 0
        }
    }, e
}
function EventMasterCard(e) {
    "use strict";
    var t = function() {
        var t,
            n,
            i;
        this.imgUrl = e.imgUrl, this.buttons = (t = e.input, n = e.output, i = [], t === n ? i.push({
            card: t,
            text: "Add"
        }) : (t && i.push({
            card: t,
            text: "Input"
        }), n && i.push({
            card: n,
            text: "Output"
        })), i), this.text = e.displayText
    };
    return t.prototype.getImg = function() {
        return this.imgUrl
    }, t.prototype.getButtons = function() {
        return this.buttons
    }, t.prototype.getText = function() {
        return this.text
    }, new t
}
function EventMasterFrame(e) {
    "use strict";
    var t = function() {
        var t,
            n,
            i,
            s,
            a;
        this.id = e.id, this.text = e.text, this.expansionOptions = e.expansionOptions, this.vpuOptions = e.vpuOptions, this.configs = e.configs, this.links = [], this.configButtons = (t = this, n = [], $.each(t.configs, function(e, i) {
            var s = $("<button>").addClass("btn btn-lg btn-default").html(i.text).on("click", function() {
                System.applyConfig(t, i)
            });
            n.push(s)
        }), n), this.expansionButtons = function(e) {
            if (e.expansionOptions.length) {
                var t = {};
                return $.each(e.expansionOptions, function(n, i) {
                    var s = $("<button>").addClass("btn btn-lg btn-default").html(i).on("click", function() {
                        e.setExpansion(i)
                    });
                    t[i] = s
                }), t
            }
            return null
        }(this), this.vpuButtons = function(e) {
            if (e.vpuOptions.length) {
                var t = {};
                return $.each(e.vpuOptions, function(n, i) {
                    var s = $("<button>").addClass("btn btn-lg btn-default").html(i).on("click", function() {
                        e.setVpu(i)
                    });
                    t[i] = s
                }), t
            }
            return null
        }(this), this.slots = (i = this, s = e.slots, a = {}, $.each(s, function(e, t) {
            a[e] = EventMasterSlot(e, t, i)
        }), a)
    };
    return t.prototype.getFrameId = function() {
        return this.id
    }, t.prototype.getText = function() {
        return this.text
    }, t.prototype.getConfigButtons = function() {
        return this.configButtons
    }, t.prototype.getExpansionButtons = function() {
        return this.expansionButtons
    }, t.prototype.getVpuButtons = function() {
        return this.vpuButtons
    }, t.prototype.getMvSlot = function() {
        var e = null;
        return $.each(this.slots, function(t, n) {
            -1 == n.validCards.indexOf(40) || (e = n)
        }), e
    }, t.prototype.getAllLinks = function() {
        return this.links
    }, t.prototype.getConnectedLinks = function() {
        var e = [];
        return $.each(this.links, function(t, n) {
            n.isConnected() && e.push(n)
        }), e
    }, t.prototype.getAllCards = function() {
        var e = [];
        return $.each(this.slots, function(t, n) {
            e.push(n.getCard())
        }), e
    }, t.prototype.getAllSlots = function() {
        return this.slots
    }, t.prototype.getConfigObject = function() {
        var e = this,
            t = {};
        return t.frameType = e.id, t.cards = {}, $.each(e.slots, function(e, n) {
            t.cards[e] = n.getCard().id
        }), t.links = e.getAllLinks(), t
    }, t.prototype.setCard = function(e, t) {
        "object" == typeof this.slots[e] && this.slots[e].setCard(t)
    }, t.prototype.setSelectedCards = function(e) {
        $.each(this.slots, function(t, n) {
            n.setSelectedCard(e)
        }), $(this).trigger("frameChange")
    }, t.prototype.setExpansion = function(e) {
        var t = this,
            n = 0;
        $.each(t.slots, function(i, s) {
            -1 != s.validCards.indexOf(70) && (n < e ? t.setCard(s.index, System.config.ioCards[70]) : t.setCard(s.index, System.config.ioCards.x), n++)
        }), t.renderExpansionButtons(), t.calculateLinks(), $(this).trigger("frameChange"), $(this).trigger("linksChange")
    }, t.prototype.setVpu = function(e) {
        var t = this,
            n = 0;
        $.each(t.slots, function(i, s) {
            -1 != s.validCards.indexOf(50) && (n < e ? t.setCard(s.index, System.config.ioCards[50]) : t.setCard(s.index, System.config.ioCards.x), n++)
        }), t.renderVpuButtons(), $(this).trigger("frameChange")
    }, t.prototype.selectFrame = function() {
        System.activeFrame = this, System.nextClickDeselects = !1
    }, t.prototype.selectAllSlots = function(e) {
        $.each(this.slots, function(t, n) {
            n.select(e)
        })
    }, t.prototype.addLink = function(e, t) {
        this.links.push(EventMasterLink(e, t)), $(this).trigger("linksChange")
    }, t.prototype.renderExpansionButtons = function() {
        var e = 0;
        $.each(this.slots, function(t, n) {
            var i = n.getCard();
            null !== i && 70 === i.id && e++
        }), -1 != this.expansionOptions.indexOf(e) && ($.each(this.expansionButtons, function(e, t) {
            t.removeClass("active")
        }), this.expansionButtons[e].addClass("active"))
    }, t.prototype.renderVpuButtons = function() {
        var e = 0;
        $.each(this.slots, function(t, n) {
            50 === n.getCard().id && e++
        }), -1 != this.vpuOptions.indexOf(e) && ($.each(this.vpuButtons, function(e, t) {
            t.removeClass("active")
        }), this.vpuButtons[e].addClass("active"))
    }, t.prototype.calculateLinks = function() {
        var e = this;
        e.links = [], $.each(e.slots, function(t, n) {
            70 === n.getCard().id && (e.links.push(EventMasterLink({
                cardId: t,
                connectorId: 0
            })), e.links.push(EventMasterLink({
                cardId: t,
                connectorId: 1
            })))
        })
    }, t.prototype.importLinks = function(e) {
        var t = this;
        $.each(e, function(e, n) {
            var i = EventMasterLink({
                cardId: n.cardId,
                connectorId: n.connectorId
            });
            i.setFrameType(n.connection.frameType), i.setConnector(n.connection.frameSlot, n.connection.frameConnector), i.setUnitId(n.connection.unitId), i.setIpAddress(n.connection.ipAddress), i.setMacAddress(n.connection.macAddress), t.links.push(i)
        })
    }, new t(e)
}
function EventMasterLink(e) {
    "use strict";
    var t = function() {
        this.cardId = parseInt(e.cardId), this.connectorId = parseInt(e.connectorId), this.connection = {
            frameType: null,
            frameSlot: null,
            frameConnector: null,
            unitId: null,
            ipAddress: null,
            macAddress: null
        }
    };
    return t.prototype.isConnected = function() {
        return null !== this.connection.frameType
    }, t.prototype.disconnect = function() {
        this.connection = {
            frameType: null,
            frameSlot: null,
            frameConnector: null,
            unitId: null,
            ipAddress: null,
            macAddress: null
        }
    }, t.prototype.getUnitId = function() {
        return this.connection.unitId
    }, t.prototype.getIpAddress = function() {
        return this.connection.ipAddress
    }, t.prototype.getMacAddress = function() {
        return this.connection.macAddress
    }, t.prototype.setFrameType = function(e) {
        "x" === e || null === e ? this.disconnect() : this.connection.frameType = parseInt(e)
    }, t.prototype.setConnector = function(e, t) {
        this.isConnected() && (this.connection.frameSlot = parseInt(e), this.connection.frameConnector = parseInt(t))
    }, t.prototype.setUnitId = function(e) {
        this.isConnected() && (this.connection.unitId = isNaN(parseInt(e)) ? null : parseInt(e))
    }, t.prototype.setIpAddress = function(e) {
        this.isConnected() && (this.connection.ipAddress = e)
    }, t.prototype.setMacAddress = function(e) {
        this.isConnected() && (this.connection.macAddress = e)
    }, new t(e)
}
function EventMasterSlot(e, t, n) {
    "use strict";
    var i = function() {
        this.parent = n, this.index = e, this.isSelectable = t.isSelectable, this.isSelected = !1, this.isVisible = t.isVisible, this.excludeFromXml = t.excludeFromXml || !1, this.validCards = t.validCards, this.currentCard = null, this.slotElement = function(e) {
            if (e.isVisible) {
                var t = $("<div>").addClass("slot").addClass("slot-" + e.index).on("click", function() {
                    System.nextClickDeselects && e.parent.selectAllSlots(!1), e.select(), System.nextClickDeselects = !1
                });
                return e.isSelectable && t.addClass("selectable"), t.append($("<div>").addClass("header")), t.append($("<div>").addClass("connectors")), t
            }
            return null
        }(this)
    };
    return i.prototype.select = function(e) {
        var t = this;
        t.isVisible && (t.isSelectable || !1 === e) && (t.isSelected = "boolean" == typeof e ? e : !t.isSelected, t.slotElement.removeClass("selected"), t.isSelected && t.slotElement.addClass("selected"))
    }, i.prototype.setSelectedCard = function(e) {
        this.isSelected && this.setCard(e)
    }, i.prototype.setCard = function(e) {
        var t = this;
        -1 == t.validCards.indexOf(e.id) && "x" !== e.id || (t.currentCard = e, null !== t.slotElement && (t.slotElement.removeClass(function(e, t) {
            return (t.match(/(^|\s)card-\S+/g) || []).join(" ")
        }), t.slotElement.addClass("card-" + t.currentCard.id), "string" == typeof t.currentCard.headerText ? t.slotElement.find(".header").html(t.currentCard.headerText) : t.slotElement.find(".header").empty(), "string" == typeof t.currentCard.headerColour ? t.slotElement.find(".header").css("background-color", t.currentCard.headerColour) : t.slotElement.find(".header").css("background-color", "")))
    }, i.prototype.getElement = function() {
        return this.slotElement
    }, i.prototype.getCard = function() {
        return this.currentCard
    }, i.prototype.setSelectable = function(e) {
        var t = this;
        t.isSelectable = e, t.isSelectable ? t.slotElement.addClass("selectable") : (t.slotElement.removeClass("selectable"), t.select(!1))
    }, new i
}
!function() {
    "use strict";
    window.System = {
        config: getConfig(),
        selectableCards: [],
        frames: [],
        activeFrame: null,
        nextClickDeselects: !1,
        hasChanged: !1,
        load: function() {
            var e = this;
            $.each(e.config.selectableCards, function(t, n) {
                e.selectableCards[t] = EventMasterCard(n)
            }), $.each(e.config.frames, function(t, n) {
                e.frames[t] = EventMasterFrame(n), $(e.frames[t]).on("frameChange", function() {
                    e.frameChange()
                }), $(e.frames[t]).on("linksChange", function() {
                    e.linksChange()
                })
            }), $("#card-select").trigger("render", [e.selectableCards]), $("#config-buttons").trigger("render", [e.frames]), e.getCookie() || e.firstVisit()
        },
        getCookie: function() {
            var e = this;
            return Cookies.get("simxml-hasChanged") && Cookies.get("simxml-currentConfig") ? !!e.digestCookie(e.convertOldCookie(JSON.parse(Cookies.get("simxml-currentConfig")), Cookies.get("simxml-hasChanged"))) && (Cookies.remove("simxml-hasChanged"), Cookies.remove("simxml-currentConfig"), e.render(), e.saveCurrent(), !0) : !!Cookies.get("simxml-configB64") && !!e.digestCookie(JSON.parse(atob(Cookies.get("simxml-configB64")))) && (e.render(), !0)
        },
        convertOldCookie: function(e, t) {
            var n = {};
            if ("number" != typeof e.frameType)
                return null;
            if (n.frameType = e.frameType, "object" != typeof e.cards)
                return null;
            if (n.cards = {}, $.each(e.cards, function(e, t) {
                n.cards[e] = t
            }), "number" != typeof e.numberOfVPU)
                return null;
            var i = [];
            0 === n.frameType ? i = [14, 15, 16, 17, 19, 20, 21, 22] : 1 === n.frameType ? i = [2, 3] : 2 === n.frameType && (i = [1, 2]);
            var s = 0;
            return $.each(i, function(t, i) {
                s < e.numberOfVPU ? n.cards[i] = 50 : n.cards[i] = "x", s++
            }), "string" != typeof t ? null : (n.hasChanged = t, Cookies.remove("simxml-hasChanged"), Cookies.remove("simxml-currentConfig"), {
                frames: [n]
            })
        },
        digestCookie: function(e) {
            var t = this;
            if (!e)
                return !1;
            if ("object" == typeof e.frames[0]) {
                var n = e.frames[0];
                return "string" == typeof n.hasChanged ? t.hasChanged = "true" === n.hasChanged : t.hasChanged = !0, "number" == typeof n.frameType && ($.each(t.frames, function(e, i) {
                    i.getFrameId() !== n.frameType || (t.activeFrame = i)
                }), "object" == typeof n.cards && ($.each(n.cards, function(e, n) {
                    t.activeFrame.setCard(e, t.config.ioCards[n])
                }), "object" == typeof n.links ? t.activeFrame.importLinks(n.links) : t.activeFrame.calculateLinks(), !0))
            }
            return !1
        },
        importFromXML: function(e) {
          this.applyConfig(this.frames[0], e.frames[0])
        },
        firstVisit: function() {
            this.applyConfig(this.frames[0], this.config.frames[0].configs[0]), this.showFrameSelect()
        },
        render: function() {
            $("#frame-indicator").trigger("render", this.activeFrame), $("#frame-container").trigger("render", this.activeFrame), this.activeFrame.renderExpansionButtons(), this.activeFrame.renderVpuButtons(), $("#expansion-select").trigger("render"), $("#vpu-select").trigger("render"), $("#mv-select").trigger("render"), $("#link-select").trigger("render"), $("#info-tables").trigger("render")
        },
        showFrameSelect: function() {
            $("#frame-select-modal").modal("show")
        },
        setCardForSelected: function(e) {
            this.activeFrame.setSelectedCards(e), this.nextClickDeselects = !0
        },
        frameChange: function() {
            $("#info-tables").trigger("render"), this.hasChanged = "true", this.saveCurrent()
        },
        linksChange: function() {
            $("#link-select").trigger("render"), this.hasChanged = "true", this.saveCurrent()
        },
        setMvAsOutput: function(e) {
            var t = this.activeFrame.getMvSlot();
            t && (e ? (40 === t.currentCard.id && t.setCard(this.config.ioCards[22]), t.setSelectable(!0)) : (t.setCard(this.config.ioCards[40]), t.setSelectable(!1)), $("#mv-select").trigger("render"), this.saveCurrent())
        },
        saveCurrent: function() {
            var e = this.activeFrame.getConfigObject();
            e.hasChanged = this.hasChanged;
            var t = {
                    frames: [e]
                },
                n = btoa(JSON.stringify(t));
            Cookies.set("simxml-configB64", n)
            return t;
        },
        applyConfig: function(e, t) {
            var n = this;
            $.each(t.cards, function(t, i) {
                e.setCard(t, n.config.ioCards[i])
            }), e.selectFrame(), e.renderExpansionButtons(), e.renderVpuButtons(), e.calculateLinks(), $("#frame-select-modal").modal("hide"), n.hasChanged = !1, n.render(), n.saveCurrent()
        },
        getXml: function() {
            var e = $("<form>").attr("method", "get").attr("action", window.downloadUrl).attr("id", "xml-form");
            $.each(this.activeFrame.getAllSlots(), function(t, n) {
                n.excludeFromXml || $("<input>").attr("type", "hidden").attr("name", "slot-" + n.index).attr("value", n.getCard().id).appendTo(e)
            });
            var t = JSON.stringify(this.activeFrame.getConnectedLinks());
            $("<input>").attr("type", "hidden").attr("name", "link-json").attr("value", t).appendTo(e), $("<input>").attr("type", "hidden").attr("name", "frame-type").attr("value", this.activeFrame.id).appendTo(e), e.appendTo("body"), e.submit();
            for (var n = [], i = 0; i < e[0].length; i++)
                n.push(e[0][i].value);
            var s = JSON.stringify(n);
            _paq.push(["trackEvent", "Download", s])
        },
        generateUrl: function(e) {
            return window.baseUrl + e
        },
        generateUrlStatic: function(e) {
            return "./" + e
        },
        connectorTypeToText: function(e) {
            return this.config.connectorText[e] || ""
        }
    }
}(), function() {
    "use strict";
    function e(e, t) {
        "id" === t && e.inputmask("9", {
            repeat: 2,
            greedy: !1
        }), "ip" === t && e.inputmask({
            alias: "ip",
            oncomplete: i,
            onincomplete: s
        }), "mac" === t && e.inputmask({
            alias: "mac",
            oncomplete: i,
            onincomplete: s
        }), "remove" === t && e.inputmask("remove")
    }
    function t(e) {
        return e.replace(/[_]/g, "")
    }
    function n() {
        $(".link-ip-address").each(function() {
            var e = $(this);
            e.prop("disabled") && e.val(t(e.val()))
        })
    }
    function i() {
        var e,
            t = $(this);
        $(this).parent().addClass("has-success"), t.trigger("save"), null !== (e = $(t).data("copy-to")) && $.each(e, function(e, t) {
            $(t).trigger("save")
        })
    }
    function s() {
        $(this).parent().removeClass("has-success")
    }
    function a() {
        var e = $("tr.link-row"),
            t = {};
        $.each(e, function(e, n) {
            var i = $(n).find(".link-unit-id").val();
            "" !== i ? (void 0 === t[i] && (t[i] = []), t[i].push(n)) : t["reset" + e] = [n]
        }), $.each(t, function(e, t) {
            if (0 !== t.length) {
                var n = $(t.shift()),
                    i = n.find(".link-ip-address"),
                    s = n.find(".link-mac-address");
                if (0 === t.length)
                    i.data("copy-to", null).data("copy-from", null), s.data("copy-to", null).data("copy-from", null);
                else {
                    var a = [],
                        r = [];
                    $.each(t, function(e, t) {
                        a.push($(t).find(".link-ip-address").data("copy-to", null).data("copy-from", i)), r.push($(t).find(".link-mac-address").data("copy-to", null).data("copy-from", s))
                    }), i.data("copy-from", null).data("copy-to", a).trigger("keyup"), s.data("copy-from", null).data("copy-to", r).trigger("keyup")
                }
            }
        })
    }
    function r() {
        var e = $(this).parent().find("input, select"),
            t = $("tr.link-row");
        e.hasClass("link-frame-type") && t.find(".link-frame-type").val(e.val()).trigger("change"), e.hasClass("link-unit-id") && t.find(".link-unit-id").val(e.val()).trigger("keyup")
    }
    function o(e) {
        a(), $(".link-row").trigger("render"), n(), $(e).trigger("save"), System.saveCurrent()
    }
    function d(e) {
        var n = $(e),
            i = n.data("copy-to");
        if (null !== i) {
            var s = t(n.val());
            $.each(i, function(e, t) {
                $(t).val(s).trigger("save")
            })
        }
    }
    $("#links-connector-key").on("render", function(e) {
        e.stopPropagation();
        var t = $(this);
        t.empty();
        var n = System.activeFrame.getAllLinks(),
            i = [],
            s = [];
        if ($.each(n, function(e, t) {
            i.push({
                isDimmed: !1,
                isActive: t.isConnected()
            })
        }), n.length < 4)
            for (var a = n.length; a < 4; a++)
                i.push({
                    isDimmed: !0,
                    isActive: !1
                });
        for (var r = 0; r < i.length; r++) {
            var o = $("<div>").addClass("connector-key-connector");
            (r + 1) % 2 == 0 ? o.addClass("bottom-link").html((1 < r ? "1" : "0") + "-1") : o.addClass("top-link").html((1 < r ? "1" : "0") + "-0"), i[r].isDimmed && o.addClass("dimmed"), i[r].isActive && o.addClass("active"), s.push(o)
        }
        for (var d = 0; d < s.length; d++)
            if ((d + 1) % 2 != 0) {
                var l = $("<div>").addClass("connector-key-card");
                l.append($("<div>").addClass("connector-key-card-header").html(System.config.ioCards[70].headerText).css("background-color", System.config.ioCards[70].headerColour)), l.append(s[d]).append(s[d + 1]), l.appendTo(t)
            }
    }), $("#link-select").on("render", function() {
        var i = $(this),
            s = System.activeFrame.getAllLinks();
        if (0 === s.length)
            return $(this).hide(), void $("#no-links").show();
        $(this).show(), $("#no-links").hide(), $("#links-connector-key").trigger("render");
        var l = $($("#link-row-template").prop("content")).find("tr"),
            c = i.find("tbody");
        c.find(".link-row").remove(), $.each(s, function(n, i) {
            var s = l.clone();
            s.find(".link-from-text").html(i.cardId + "-" + i.connectorId), s.find("input, select").map(function(e, t) {
                var n = $(t),
                    s = $(t).prop("name");
                n.prop("name", s + "|" + i.cardId + "_" + i.connectorId)
            }), i.isConnected() && (null !== i.connection.frameType && s.find(".link-from-connector").val(i.cardId + "-" + i.connectorId), null !== i.connection.frameType && s.find(".link-frame-type").val(i.connection.frameType), null !== i.connection.frameSlot && null !== i.connection.frameConnector && s.find(".link-to-connector").val(i.connection.frameSlot + "_" + i.connection.frameConnector), null !== i.connection.unitId && s.find(".link-unit-id").val(i.connection.unitId), null !== i.connection.ipAddress && s.find(".link-ip-address").val(i.connection.ipAddress), null !== i.connection.macAddress && s.find(".link-mac-address").val(i.connection.macAddress)), s.find(".link-frame-type").on("change", function() {
                var e;
                e = this, $(e).closest("tr").trigger("render"), $(e).trigger("save"), $("#links-connector-key").trigger("render"), System.saveCurrent()
            }), s.find(".link-to-connector").on("change", function() {
                $(this).trigger("save"), System.saveCurrent()
            }), s.find(".link-unit-id").on("keyup paste", function(e) {
                var t = this;
                "paste" === e.type ? setTimeout(function() {
                    o(t)
                }, 100) : o(this)
            }), s.find(".link-ip-address").on("keyup paste", function(e) {
                var t = this;
                "paste" === e.type ? setTimeout(function() {
                    d(t)
                }, 100) : d(t)
            }), s.find(".link-mac-address").on("keyup paste", function(e) {
                var t = this;
                "paste" === e.type ? setTimeout(function() {
                    d(t)
                }, 100) : d(t)
            }), s.find(".link-frame-type").on("save", function() {
                var e = $(this).val();
                i.setFrameType(e), System.saveCurrent()
            }), s.find(".link-to-connector").on("save", function() {
                var e = $(this).val();
                if (null !== e && "" !== e) {
                    var t = e.split("_");
                    i.setConnector(t[0], t[1]), System.saveCurrent()
                } else
                    i.setConnector(null, null)
            }), s.find(".link-unit-id").on("save", function() {
                var e = $(this).val();
                i.setUnitId(e), System.saveCurrent()
            }), s.find(".link-ip-address").on("save", function() {
                var e = t($(this).val());
                i.setIpAddress(e), System.saveCurrent()
            }), s.find(".link-mac-address").on("save", function() {
                var e = $(this).val();
                i.setMacAddress(e), System.saveCurrent()
            }), s.on("render", function(t) {
                t.stopPropagation(), function(t) {
                    var n = $(t);
                    if ("x" === n.find(".link-frame-type").val())
                        n.find(".link-to-connector").val("x").prop("disabled", !0).trigger("save"), n.find(".link-unit-id").val("").prop("disabled", !0).trigger("save"), n.find(".link-ip-address").val("").prop("disabled", !0).trigger("save"), n.find(".link-mac-address").val("").prop("disabled", !0).trigger("save");
                    else {
                        n.find(".link-to-connector").prop("disabled", !1), n.find(".link-unit-id").prop("disabled", !1);
                        var i = [n.find(".link-ip-address"), n.find(".link-mac-address")];
                        $.each(i, function(t, n) {
                            var i = n.data("copy-from");
                            null != i ? (e(n, "remove"), n.prop("disabled", !0)) : !0 === n.prop("disabled") && (n.prop("disabled", !1), n.val("").trigger("save"), e(n, n.data("input-type")))
                        })
                    }
                }(this)
            }), c.append(s)
        }), e($(".link-unit-id"), "id"), e($(".link-ip-address"), "ip"), e($(".link-mac-address"), "mac"), a(), $(".link-row").trigger("render"), n(), $('[data-toggle="tooltip"]').tooltip(), $("div.copy-to-all").on("click", r)
    })
}(), $("#config-buttons").on("render", function(e, t) {
    var n = this;
    $("#config-buttons").empty(), $.each(t, function(e, t) {
        var i = $("<li>"),
            s = $("<img>").addClass("img").attr("alt", t.getText() + " frame small").attr("src", System.generateUrlStatic("img/frame-icon-" + t.getFrameId() + ".png"));
        i.append(s).append("<br>");
        var a = $("<div>").addClass("button-group").append(t.getConfigButtons());
        i.append(a), $(n).append(i)
    })
}), $("#frame-indicator").on("render", function(e, t) {
    var n = $("<img>").addClass("img").attr("alt", t.text + " frame").attr("src", System.generateUrlStatic("img/frame-indicator-" + t.getFrameId() + ".png")).on("click", function() {
        System.showFrameSelect()
    });
    $(this).empty().append(n)
}), $("#frame-container").on("render", function(e, t) {
    var n = $("<div>").addClass("frame").attr("id", "frame-" + t.id);
    $.each(t.slots, function(e, t) {
        n.append(t.getElement())
    }), $(this).empty().append(n)
}), $("#card-select").on("render", function(e, t) {
    var n = [];
    $.each(t, function(e, t) {
        var i = $("<div>").addClass("col-xs-6").addClass("col-md-4"),
            s = $("<div>").addClass("panel").addClass("panel-default"),
            a = $("<div>").addClass("panel-heading").html(t.getText()),
            r = $("<div>").addClass("panel-body"),
            o = $("<img>").attr("src", System.generateUrlStatic(t.getImg())).attr("alt", t.getText()).addClass("center-block");
        r.append(o), $.each(t.getButtons(), function(e, t) {
            var n = $("<button>").addClass("btn btn-default").html(t.text);
            n.on("click", function() {
                System.setCardForSelected(t.card)
            }), r.append(n)
        }), s.append(a), s.append(r), i.append(s), n.push(i)
    }), $(this).append(n)
}), $("#mv-select").on("render", function() {
    var e = $(this),
        t = System.activeFrame.getMvSlot();
    null === t ? e.hide() : (e.show(), e.find("button").map(function() {
        var e = $(this);
        e.removeClass("active"), 40 === t.currentCard.id && !1 === e.data("mvAsOutput") && e.addClass("active"), 40 !== t.currentCard.id && !0 === e.data("mvAsOutput") && e.addClass("active")
    }))
}), $("#expansion-select").on("render", function() {
    var e = $(this),
        t = e.children(".btn-group");
    t.empty();
    var n = System.activeFrame.getExpansionButtons();
    n ? ($.each(n, function(e, n) {
        t.append(n)
    }), e.show()) : e.hide()
}), $("#vpu-select").on("render", function() {
    var e = $(this),
        t = e.children(".btn-group");
    t.empty();
    var n = System.activeFrame.getVpuButtons();
    n ? ($.each(n, function(e, n) {
        t.append(n)
    }), e.show()) : e.hide()
}), $("#info-tables").on("render", function() {
    var e = {
            hdmi: 0,
            sdi: 0,
            dp: 0,
            dvi: 0
        },
        t = {
            hdmi: 0,
            sdi: 0,
            dvi: 0,
            dp: 0
        },
        n = 0;
    $.each(System.activeFrame.getAllCards(), function(i, s) {
        $.each(s.connectors, function(n, i) {
            "in" === s.type ? e[i]++ : "out" === s.type && t[i]++
        }), "vpu" === s.type && n++
    });
    var i,
        s,
        a = 2 * n,
        r = 4 * n,
        o = $("#input-info"),
        d = $("#output-info");
    o.empty(), $.each(e, function(e, t) {
        t && (o.append("<tr><td>" + System.connectorTypeToText(e) + "</td><td>" + t + "</td></tr>"), i = 1)
    }), i || o.append('<tr><td colspan="2">No Inputs</td></tr>'), d.empty(), $.each(t, function(e, t) {
        t && (d.append("<tr><td>" + System.connectorTypeToText(e) + "</td><td>" + t + "</td></tr>"), s = 1)
    }), s || d.append('<tr><td colspan="2">No Outputs</td></tr>');
    var l = $("#layer-info");
    l.empty(), l.append("<tr><td>Mixer</td><td>" + a + "</td></tr>"), l.append("<tr><td>Single</td><td>" + r + "</td></tr>")
}), $("#frame-select-modal").on("show.bs.modal", function() {
    System.hasChanged ? $("#changes-warning").show() : $("#changes-warning").hide()
}), $("#btn-select-all-slots").on("click", function() {
    $.each(System.frames, function(e, t) {
        t.selectAllSlots(!0)
    }), System.nextClickDeselects = !1
}), $("#btn-deselect-all-slots").on("click", function() {
    $.each(System.frames, function(e, t) {
        t.selectAllSlots(!1)
    }), System.nextClickDeselects = !1
}), $("#btn-invert-slot-selection").on("click", function() {
    $.each(System.frames, function(e, t) {
        t.selectAllSlots()
    }), System.nextClickDeselects = !1
}), $("#mv-select button").on("click", function() {
    System.setMvAsOutput($(this).data("mvAsOutput"))
}), $("#btn-download-xml").on("click", function() {
    System.getXml()
}), $("#btn-about").on("click", function(e) {
    e.preventDefault(), $("#about-modal").modal("show")
});
