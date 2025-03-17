export const TESTS = [
  {
    id: "1",
    name: "Test 1",
  },
  {
    id: "2",
    name: "Test 2",
  },
] as const;

export type Test = (typeof TESTS)[number];
