const { app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  const windowWidth = 1300;
  const windowHeight = 700;

  mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    webPreferences: {
      nodeIntegration: false,
    },
    icon: path.join(__dirname, 'icon.ico'),
    autoHideMenuBar: true,
  });

  mainWindow.center();

  mainWindow.loadURL('https://discord.com/developers');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});