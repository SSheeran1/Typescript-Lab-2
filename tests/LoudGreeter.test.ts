import { LoudGreeter } from "../src/loudgreeter";

describe("LoudGreeter class", () => {
  test("LoudGreeter. This is a subclass of Greeter", () => {
    const newGreeter = new LoudGreeter("Hello");
    expect(newGreeter.greeting).toBe("Hello");
  });
  test("LoudGreeter-extra property add exclamations", () => {
    const newGreeter = new LoudGreeter("Hello");
    expect(newGreeter.greet("Sara")).toBe("Hello, Sara!!!!");
  });

  test("addVolume-Every time this is called, it adds an additional exclamation point to extra.", () => {
    const newGreeter = new LoudGreeter("Hello");
    newGreeter.addVolume();
    newGreeter.addVolume();
    expect(newGreeter.greet("Sara")).toBe("Hello, Sara!!!!!!");
  });
  test("addVolume-Every time this is called, it adds an additional exclamation point to extra.", () => {
    const newGreeter = new LoudGreeter("Hello");
    newGreeter.addVolume();
    newGreeter.addVolume();
    newGreeter.addVolume();
    newGreeter.addVolume();
    expect(newGreeter.greet("Sara")).toBe("Hello, Sara!!!!!!!!");
  });
});
