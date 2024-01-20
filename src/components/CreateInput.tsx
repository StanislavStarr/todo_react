import { useState } from 'react'
import { createEntry } from '../lib/todoRest'

interface CreateInputProps {
  onEntryCreated: () => void;
}

export function CreateInput({ onEntryCreated }: CreateInputProps) {

  const [text, setText] = useState('')

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createEntry({ title: text, state: false });
    setText('');
    onEntryCreated();
  };

  return (
    <>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Название"
          onChange={handleInput}
          value={text}
          autoFocus
        />
        <button className="btn btn-outline-secondary" type="submit">
          Сохранить
        </button>
      </form>
    </>
  )
}
