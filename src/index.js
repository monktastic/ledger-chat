import m from "mithril"

var wsUrl = 'ws://localhost:8765';
var webSocket = new WebSocket(wsUrl);

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


// var root = document.body

// m.render(root, "Hello world")
// m.render(root, m("h1", "My first app"))

// m.render(root, m("main", [
//     m("h1", {class: "title"}, "My second app"),
//     m("button", "A button"),
// ]))

// var count = 0
// var Hello = {
//     view: function() {
//         return m("main", [
//             m("h1", {class: "title"}, "My third app"),
//             m("button", {onclick: function() {count++}}, count + " clicks")
//         ])
//     }
// }

// m.mount(root, Hello)

