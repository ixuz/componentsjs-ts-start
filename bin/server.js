#!/usr/bin/env node
require("../dist/index");
const { AppRunner } = require("..");
new AppRunner().run().then((appInstance) => {
  appInstance.start();
});
