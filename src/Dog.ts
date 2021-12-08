import { IAnimal } from "./IAnimal";

export class Dog implements IAnimal {
  say(): void {
    console.log("Dog barks!");
  }
}
