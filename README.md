# ledger-chat
Simple chat app for ES ledger

Right now it doesn't talk to a ledger websocket. Instead, start an echo websocket:

`python echo-server.py`

And then serve index.html:

`yarn dev`