import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test(" create a class named HtmlGreeter. This is a subclass of Greeter.", () => {
    const newGreeter = new HtmlGreeter("Hello");
    expect(newGreeter.greeting).toBe("Hello");
  });
  test("constructor properly sets tagName", () => {
    const newGreeter = new HtmlGreeter("Hello", "div");
    expect(newGreeter.tagName).toBe("div");
  });
  test("Override the greet method to wrap the result in the specified HTML tag", () => {
    const newGreeter = new HtmlGreeter("Hello", "div");
    expect(newGreeter.greet("Sara")).toBe("<div>Hello, Sara!</div>");
  });
  test("default tagName= h1", () => {
    const newGreeter = new HtmlGreeter("Hello");
    expect(newGreeter.greet("Sara")).toBe("<h1>Hello, Sara!</h1>");
  });
});
