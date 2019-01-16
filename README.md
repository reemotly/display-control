# Display Control

A node module that supports sleeping and waking the display. Supports Windows, Mac and Linux.
This repo is a fork from https://github.com/SynergiTech/display-control intended to fix a few issues and make a few modifications to fit our needs.

Check the commits to view the changes!

## Installation
```

$ npm install github:reemotly/display-control#master

```

## How to use
```js

var displaycontrol = require("display-control");

displaycontrol.sleep();
displaycontrol.wake();

```
