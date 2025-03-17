import { useState } from "react";
import { TestDetails } from "./test-details";
import { TestsList } from "./tests-list";

export function DashboardPage() {
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null);

  return (
    <div className="h-dvh flex flex-col p-4 gap-4">
      <h1>Dashboard</h1>
      <div className="grow grid grid-cols-2 gap-4">
        <TestsList
          selectedTestId={selectedTestId}
          onSelectTest={setSelectedTestId}
        />
        {selectedTestId && <TestDetails testId={selectedTestId} />}
      </div>
    </div>
  );
}
