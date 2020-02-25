import m from "mithril"
//import chatbox from "./chatbox"
var chatbox = require("./chatbox")
import messagebox from "./messagebox"

var wsUrl = 'ws://localhost:8765';
var webSocket = new WebSocket(wsUrl);


var root = document.body

var Chat = {
    oninit: function() {
    },
    view: function() {
        return m("main", [
            m(chatbox),
            m(messagebox),
        ])
    }
}

m.mount(root, Chat)

// TODO mithril'ify all this.

var chatBox = document.getElementById('chatbox')

webSocket.onmessage = function(event) {
    chatBox.append(event.data)
    var br = document.createElement("br");
    chatBox.append(br)
    console.log("ws got", event.data)
}

webSocket.onclose = function(event) {
    console.log("ws closed", event)
}

webSocket.onerror = function(event) {
    console.log("ws error", event)
}


// Must attach to window for parcel to make it available
window.sendMsg = event => {
    var message = document.getElementById('message').value
    if (!message) {
        return
    }
    chatBox.append(message)
    var br = document.createElement("br");
    chatBox.append(br)

    webSocket.send(message)
    document.getElementById('message').value = ''
}

var msgBox = document.getElementById('messagebox')
msgBox.addEventListener("submit", sendMsg);

