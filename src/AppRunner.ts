import { ComponentsManager } from "componentsjs";
import * as Path from "path";

export class AppRunner {
  public async run(): Promise<unknown> {
    const componentsManager = await ComponentsManager.build({
      mainModulePath: Path.join(__dirname, "/.."), // Path to your npm package's root
    });

    await componentsManager.configRegistry.register("config/config.jsonld");

    const app = "urn:componentsjs-ts-start:App";
    const appInstance = await componentsManager.instantiate(app);

    return appInstance;
  }
}
