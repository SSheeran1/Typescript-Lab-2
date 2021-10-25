import { Greeter } from "./Greeter";

export class JavaScriptGreeter extends Greeter {
  greet(name: string): string {
    return `console.log('${super.greet(name)}')`;
  }
}

// export class JavaScriptGreeter extends Greeter {
//   greet(name: string) {
//     return `console.log('${super.greet(name)}')`;
//   }
// }
