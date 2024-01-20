import { useEffect, useState } from 'react';
import { CreateInput } from './components/CreateInput'
import { EntriesList } from './components/EntriesList'
import { getEntries } from './lib/todoRest'
import Todo from './interfaces/todoInterface';
import './App.css'

function App() {
  const [entries, setEntries] = useState<Todo[]>([]);

  const fetchEntries = async () => {
    try {
      const { data } = await getEntries();
      setEntries(data);
    } catch (error) {
      console.error('Ошибка при получении записей:', error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const onEntryUpdate = () => {
    fetchEntries();
  };

  return (
    <>
      <CreateInput onEntryCreated={fetchEntries} />
      <EntriesList entries={entries} onEntryUpdate={onEntryUpdate} />
    </>
  )
}

export default App
