import { Test, TESTS } from "./tests";

export async function getTest(id: string) {
  return new Promise<Test>((resolve) => {
    switch (id) {
      case "1":
        setTimeout(() => {
          resolve(TESTS.find((test) => test.id === id)!);
        }, 1000);
        break;
      case "2":
        setTimeout(() => {
          resolve(TESTS.find((test) => test.id === id)!);
        }, 2000);
        break;
      default:
        resolve(TESTS.find((test) => test.id === id)!);
    }
  });
}
