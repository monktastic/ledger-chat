var m = require("mithril")
var ws = require("./websocket")
// import {webSocket} from "./websocket"

module.exports = {
    // TODO use webSocket
        oninit: function() {
        console.log("loaded chatbox", ws.webSocket)
    },
    view: function() {
        return m("main", [
            m("div", {id: "chatbox", class: "chatbox"})
        ])
    }
}
