import { useState } from 'react';
import { Modal } from './Modal';
import Todo from '../interfaces/todoInterface';
import { updateEntry, deleteEntry } from '../lib/todoRest';
import '../assets/module.Item.css';

interface EntryItemProps {
  entry: Todo;
  onEntryUpdate: () => void;
}

export function EntryItem({ entry, onEntryUpdate }: EntryItemProps) {
  const [checkbox, setCheckbox] = useState(entry.state);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newState = e.target.checked;
    setCheckbox(newState);
    await updateEntry(entry.id, { state: newState });
    onEntryUpdate();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const removeItem = async () => {
    await deleteEntry(entry.id)
    onEntryUpdate();
  }

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <input
          className='form-check-input'
          style={{ cursor: 'pointer' }}
          type="checkbox"
          checked={checkbox}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label">
          {entry.title.length > 30
          ? entry.title.substring(0, 30) + "..."
          : entry.title}
        </label>
        
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-warning btn-sm" onClick={openModal}>Изменить</button>
          <button type="button" className="btn btn-danger btn-sm" onClick={removeItem}>Удалить</button>
        </div>
      </li>

      {isModalOpen && <Modal onClose={closeModal} isModalOpen={isModalOpen} entry={entry} onEntryUpdate={onEntryUpdate}/>}
    </>
)}
