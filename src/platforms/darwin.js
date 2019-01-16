"use strict";

const execFile = require("child_process").execFile;
const os = require("os");

const darwin = {};

darwin.sleep = () => {
    execFile("pmset", ["displaysleepnow"], (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
    });
}

/** Sleep with a default timeout of 5 minutes */
darwin.wake = (timeoutInSeconds) => {
    execFile("caffeinate", ["-u", "-t", `${timeoutInSeconds ? timeoutInSeconds : "300"}`], (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
    });
}

darwin.supported = () => {
    return os.platform() == 'darwin';
}

module.exports = darwin;
