export class App {
  public readonly name;

  constructor(name: string) {
    this.name = name;
  }

  public async start(): Promise<void> {
    console.log(`App[${this.name}] started!`);
  }
}
