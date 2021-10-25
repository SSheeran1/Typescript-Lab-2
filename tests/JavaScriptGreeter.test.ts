import { JavaScriptGreeter } from "../src/javascriptgreeter";

describe("JavaScriptGreeter class", () => {
  test("JavaScriptGreeter-This is a subclass of Greeter", () => {
    const newGreeter = new JavaScriptGreeter("Hello");
    expect(newGreeter.greeting).toBe("Hello");
  });

  test("Override the greet method to wrap the result in a console.log.", () => {
    const newGreeter = new JavaScriptGreeter("Hello");
    expect(newGreeter.greet("Sara")).toBe("console.log('Hello, Sara!')");
  });
  test("Override the greet method to wrap the result in a console.log.", () => {
    const newGreeter = new JavaScriptGreeter("Goodbye");
    expect(newGreeter.greet("Joe")).toBe("console.log('Goodbye, Joe!')");
  });
});
