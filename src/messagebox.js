var m = require("mithril")
var ws = require("./websocket")

module.exports = {
    oninit: function() {
        console.log("loaded messagebox", ws.webSocket)
    },
    view: function() {
        return m("form", {id: "messagebox", action: "javascript:void(0);", autocomplete: "off"},
        [
            m("label", {for: "message"}),
            "Enter message:",
            m("input", {type: "text", id: "message", name: "message", class: "chat-input"})
        ])
    }
}