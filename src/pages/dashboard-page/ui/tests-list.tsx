import { useState, useEffect } from "react";
import { getTests } from "~/shared/api/get-tests";
import { Test } from "~/shared/api/tests";
import { cn } from "~/shared/lib/cn";

export function TestsList({
  selectedTestId,
  onSelectTest,
}: {
  selectedTestId: string | null;
  onSelectTest: (testId: string | null) => void;
}) {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    getTests({ signal: abortController.signal })
      .then((data) => {
        setTests(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error === "Request aborted") {
          console.log("getTests request aborted");

          return;
        }

        throw error;
      });

    return () => abortController.abort();
  }, []);

  return (
    <div className="space-y-2">
      <h1>Tests List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="space-y-1">
          {tests.map((test) => (
            <li key={test.id}>
              <button
                className={cn(
                  "rounded-sm cursor-pointer bg-neutral-500 active:bg-blue-600 text-neutral-50 py-2 px-4 hover:bg-blue-400 transition-colors",
                  {
                    "bg-blue-500": selectedTestId === test.id,
                  }
                )}
                onClick={() =>
                  onSelectTest(selectedTestId === test.id ? null : test.id)
                }
              >
                {test.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
