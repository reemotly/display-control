"use strict";

const execFile = require("child_process").execFile;
const os = require("os");

const darwin = {};

darwin.sleep = () => {
    return new Promise((resolve, reject) => {
        execFile("pmset", ["displaysleepnow"], (error, stdout, stderr) => {
            error ? reject(error) : resolve();
        });
    })
}

/** Sleep with a default timeout of 5 minutes */
darwin.wake = (timeoutInSeconds, cb) => {
    return new Promise((resolve, reject) => {
        execFile("caffeinate", ["-u", "-t", `${timeoutInSeconds ? timeoutInSeconds : "300"}`], (error, stdout, stderr) => {
            error ? reject(error) : resolve();
        });
    })
}

darwin.supported = () => {
    return os.platform() == 'darwin';
}

module.exports = darwin;
