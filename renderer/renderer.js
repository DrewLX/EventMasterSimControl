// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron')

var app = new Vue({
    el: '#app',
    data: {
        log: '',
        running: false,
        error: "",
        visible: false
    },
    methods: {
      start: function() {
        lastStartedConfig = System.saveCurrent();
        electron.ipcRenderer.send('config', lastStartedConfig);
        this.log = ''
        setTimeout(function(){
          electron.ipcRenderer.send('command', 'sim-start')
        }, 500);
      },
      reload: function() {
        this.stop();
        this.start();
      },
      stop: function() {
        electron.ipcRenderer.send('command', 'sim-stop')
      },
      choosePath: function() {
        electron.ipcRenderer.send('command', 'choose-path')
      },
      saveAs: function() {
        electron.ipcRenderer.send('saveAs', System.saveCurrent())
      },
      openXML: function() {
        electron.ipcRenderer.send('openXML')
      },
      checkMismatch: function() {
        if (this.running) {
          if (!_.isEqual(System.saveCurrent(), lastStartedConfig)) {
            this.error = "Config does not match running simulator!"
          } else {
            this.error = ""
          }
        } else {
          this.error = ""
        }
      },
      about: function() {
        electron.ipcRenderer.send('command', 'about')
      }
    },

    created: function() {

      setInterval(function () {
        this.checkMismatch();
      }.bind(this), 1000);

        electron.ipcRenderer.on('log', (event, message) => {
            this.log += '\r\n' + message
            this.running = true

            var container = this.$el.querySelector("#log");
            container.scrollTop = container.scrollHeight;
        })

        electron.ipcRenderer.on('running', (event, message) => {
            this.running = message
        })
        electron.ipcRenderer.on('path', (event, message) => {
            document.getElementById('pathbtn').title = message;
        })
        electron.ipcRenderer.on('openedXML', (event, message) => {
          System.activeFrame.links = []
          System.render()

          setTimeout(function() {
            System.digestCookie(message)
            System.render()
          }, 1000)
        })

    }
})
