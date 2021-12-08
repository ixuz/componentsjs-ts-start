import { MyComponent } from "./MyComponent";

export class App {
  public readonly myComponent: MyComponent;
  public readonly name: string;

  constructor(myComponent: MyComponent, name: string) {
    this.myComponent = myComponent;
    this.name = name;
  }

  public async start(): Promise<void> {
    console.log(`App[${this.name}] started!`);

    this.myComponent.print("A message!");
  }
}
