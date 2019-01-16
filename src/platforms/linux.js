"use strict";

const exec = require("child_process").exec;
const os = require("os");

const linux = {};

linux.sleep = () => {
    return new Promise((resolve, reject) => {
        exec('export DISPLAY=:0; xset dpms force suspend', (err) => {
            err ? reject(err) : resolve();
        });
    });
}

linux.wake = () => {
    return new Promise((resolve, reject) => {
        exec('export DISPLAY=:0; xset dpms force on', (err) => {
            err ? reject(err) : resolve();
        });
    });
}

linux.supported = () => {
    return os.platform() == 'linux';
}

module.exports = linux;
