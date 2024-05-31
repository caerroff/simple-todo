import { useState } from "react";

function Explorer() {
  const [entries, setEntries] = useState([{ id: 1, name: "Entry 1"}]);

  // Handle the new entry button click
  const handleNewEntry = () => {
    const newEntry = {
      id: entries.length + 1,
      name: `Entry ${entries.length + 1}`
    };
    setEntries([newEntry, ...entries]);
  };

  const handleDeleteEntry = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  }

  return (
    <div className="w-96 h-full text-left p-2">
      <div className="flex justify-between mb-2 align-middle">
        <h3 className="my-auto text-lg align-middle">Entries</h3>
        <button className="btn btn-success" onClick={handleNewEntry}>
          + New Entry
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          {entries.map((entry) => (
            <div key={entry.id} className
            ="flex justify-between p-2">
              <span>{entry.name}</span>
              <button className="btn btn-danger" onClick={
                () => handleDeleteEntry(entry.id)
              }>Delete</button>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explorer;
