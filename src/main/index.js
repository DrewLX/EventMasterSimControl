'use strict'

import { app, BrowserWindow, ipcMain, dialog } from 'electron'
import * as path from 'path'
import { format as formatUrl } from 'url'

const chalk = require('chalk');
const Store = require('electron-store');
const store = new Store();
const simulator = require('./simulator.js');
simulator.setStore(store)

const isDevelopment = process.env.NODE_ENV !== 'production'

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

function createMainWindow() {
  const window = new BrowserWindow({
    width: 1000,
    height: 900
  })

  if (isDevelopment) {
    window.webContents.openDevTools()
  }

  if (isDevelopment) {
    window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  }
  else {
    window.loadURL(formatUrl({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }))
  }

  if (store.get('path')) {
    simulator.setPath(store.get('path'))
  } else {
    simulator.setPath(dialog.showOpenDialog({ properties: ['openDirectory'] })[0])
  }

  window.on('closed', () => {
    mainWindow = null
  })

  window.webContents.on('devtools-opened', () => {
    window.focus()
    setImmediate(() => {
      window.focus()
    })
  })

  return window
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = createMainWindow()
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
      simulator.setPath(dialog.showOpenDialog({ properties: ['openDirectory'] })[0])
    break;
    default:
      console.log(chalk.red('Unrecognised javascript button press: ') + arg)
  }
})

ipcMain.on('config', (event, arg) => {
    simulator.saveCurrentAsXML(arg);
    // console.log(chalk.yellow(arg))
})

simulator.log.on('new', (log) => {
  // console.log(chalk.yellow(log));
  mainWindow.webContents.send('log', log)
})

setInterval(function(){
  mainWindow.webContents.send('running', simulator.running)
}, 1000)
