import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("Sets the greeting property from a parameter", () => {
    const newGreeting = new Greeter("Hello");
    expect(newGreeting.greeting).toBe("Hello");
  });
  test("greet: Has a string parameter called name. It returns the composed greeting based on the greeting property and name parameter", () => {
    const newGreeting = new Greeter("Hello");
    expect(newGreeting.greet("Sara")).toBe("Hello, Sara!");
  });
  test("greet: Has a string parameter called name. It returns the composed greeting based on the greeting property and name parameter", () => {
    const newGreeting = new Greeter("Goodbye");
    expect(newGreeting.greet("Joe")).toBe("Goodbye, Joe!");
  });
});
