const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  passImage: (image) => {
    ipcRenderer.send('set-image', image);
  }
});