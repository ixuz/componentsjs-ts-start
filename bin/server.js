#!/usr/bin/env node
console.log("Server.js");
require("../dist/index");
const { AppRunner } = require("..");
new AppRunner().run().then((appInstance) => {
  appInstance.start();
});
