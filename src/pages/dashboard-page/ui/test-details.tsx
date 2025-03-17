import { useEffect, useState } from "react";
import { Test } from "~/shared/api/tests";
import { getTest } from "~/shared/api/get-test";
import { cn } from "~/shared/lib/cn";

export function TestDetails({ testId }: { testId: string }) {
  const [test, setTest] = useState<Test | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    getTest(testId, { signal: abortController.signal })
      .then((data) => {
        setTest(data);
        setLoading(false);
      })
      .catch((error) => {
        if (error === "Request aborted") {
          console.log("getTest request aborted");

          return;
        }

        throw error;
      });

    return () => abortController.abort();
  }, [testId]);

  return (
    <div
      className={cn({
        "text-red-500": !loading && test && test?.id !== testId,
        "text-green-500": !loading && test && test?.id === testId,
      })}
    >
      {loading ? (
        <div>Loading...</div>
      ) : test ? (
        <div>
          Details for <span className="font-bold">{test?.name}</span>
        </div>
      ) : (
        <div>Test not found</div>
      )}
    </div>
  );
}
