import { TESTS, type Test } from "./tests";

export async function getTests(options?: { signal?: AbortSignal }) {
  return new Promise<Test[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([...TESTS]);
    }, 1000);

    options?.signal?.addEventListener("abort", () => {
      console.log("getTests request aborted");
      reject("Request aborted");
    });
  });
}
