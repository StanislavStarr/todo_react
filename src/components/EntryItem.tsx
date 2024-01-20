import { useState } from 'react';
import Todo from '../interfaces/todoInterface';
import { updateEntry } from '../lib/todoRest';

interface EntryItemProps {
  entry: Todo;
  onEntryUpdate: () => void;
}

export function EntryItem({ entry, onEntryUpdate }: EntryItemProps) {
  const [checkbox, setCheckbox] = useState(entry.state);

  const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newState = e.target.checked;
    setCheckbox(newState);
    await updateEntry(entry.id, { state: newState });
    onEntryUpdate();
  };

  return (
    <>
      <li className="list-group-item d-flex">
        <input
          className="form-check-input me-1"
          type="checkbox"
          checked={checkbox}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label">{entry.title}</label>
      </li>
    </>
)}
