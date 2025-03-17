import { TESTS, type Test } from "./tests";

export async function getTests() {
  return new Promise<Test[]>((resolve) => {
    setTimeout(() => {
      resolve([...TESTS]);
    }, 1000);
  });
}
