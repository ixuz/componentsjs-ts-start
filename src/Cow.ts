import { IAnimal } from "./IAnimal";

export class Cow implements IAnimal {
  say(): void {
    console.log("Cow moos!");
  }
}
