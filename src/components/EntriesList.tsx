
import Todo from '../interfaces/todoInterface';
import { EntryItem } from './EntryItem';

interface EntriesListProps {
  entries: Todo[];
  onEntryUpdate: () => void;
}

export function EntriesList({ entries, onEntryUpdate }: EntriesListProps) {

  return (
    <div>
      <ul className="list-group">
        {entries.map(entry => (
          <EntryItem key={entry.id} entry={entry} onEntryUpdate={onEntryUpdate} />
        ))}
      </ul>
    </div>
  )
}