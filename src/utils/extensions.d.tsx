/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/

declare global {
  interface String {
    toSentenceCase(): string;
  }
};

// declare module '@theme-ui/css' {
//   interface Theme {
//     spacing(n: number): string
//   }
// };

String.prototype.toSentenceCase = function(): string {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

export {};