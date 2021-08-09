import { ComponentsManager } from "componentsjs";

console.log("AppRunner.ts");

export class AppRunner {
  public async run(): Promise<unknown> {
    console.log("AppRunner::run()");

    const componentsManager = await ComponentsManager.build({
      mainModulePath: __dirname, // Path to your npm package's root
      moduleLoader: (registry) =>
        registry.registerModule("config/config.jsonld"),
    });

    //await componentsManager.configRegistry.register("config/config.jsonld");

    const app = "urn:componentsjs-ts-start:default:App";
    const appInstance = await componentsManager.instantiate(app);

    console.log("App instantiated!");

    return appInstance;
  }
}
