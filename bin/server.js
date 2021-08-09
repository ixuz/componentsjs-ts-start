#!/usr/bin/env node
const { AppRunner } = require("..");

const main = async () => {
  const appInstance = await new AppRunner().run();
  await appInstance.start();
};

main();
