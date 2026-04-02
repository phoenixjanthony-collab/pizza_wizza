const { contextBridge, ipcRenderer } = require('electron');

// Expose safe methods to the renderer process
contextBridge.exposeInMainWorld('api', {
    // Example of exposing a method
    send: (channel, data) => {
        // whitelist channels
        let validChannels = ['toMain'];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    // Example of receiving data
    receive: (channel, func) => {
        let validChannels = ['fromMain'];
        if (validChannels.includes(channel)) {
            // Strip off `event` and just return the data
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    }
});