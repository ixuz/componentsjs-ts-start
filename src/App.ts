import { IAnimal } from "./IAnimal";
import { MyComponent } from "./MyComponent";

export class App {
  public readonly myComponent: MyComponent;
  public readonly animals: IAnimal[];
  public readonly name: string;

  constructor(myComponent: MyComponent, animals: IAnimal[], name: string) {
    this.myComponent = myComponent;
    this.animals = animals;
    this.name = name;
  }

  public async start(): Promise<void> {
    console.log(`App[${this.name}] started!`);

    this.myComponent.print("A message!");

    this.animals.forEach((animal) => animal.say());
  }
}
