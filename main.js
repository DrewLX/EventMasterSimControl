// Modules to control application life and create native browser window
const {app, BrowserWindow, ipcMain, dialog, Menu} = require('electron')
const chalk = require('chalk');
const Store = require('electron-store');

const store = new Store();

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
  // mainWindow.webContents.openDevTools()

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
