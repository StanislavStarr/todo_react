import React, { useEffect, useState } from 'react'
import { updateEntry } from '../lib/todoRest';
import Todo from '../interfaces/todoInterface';
import '../assets/module.Modal.css';


interface ModalProps {
  onClose: () => void;
  isModalOpen: boolean;
  entry: Todo;
  onEntryUpdate: () => void;
}

export function Modal({ onClose, isModalOpen, onEntryUpdate, entry }: ModalProps) {

  const [text, setText] = useState(entry.title)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen, onClose]);

  const updateItem = async () => {
    await updateEntry(entry.id, { title: text });
    onEntryUpdate();
    onClose();
  }

  return (
    <>
      <div className='modal-background'>
        <div className='modal' style={{ display: isModalOpen ? 'block' : 'none' }} tabIndex={1000} onClick={handleBackgroundClick}>
          <div className="modal-dialog">
            <div className="modal-content" onClick={handleModalClick}>
              <div className="modal-header">
                <h5 className="modal-title">Редактирование записи</h5>
                <button type="button" className="btn-close" onClick={onClose}></button>
              </div>

              <div className="modal-body">
                <p>{entry.title}</p>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Название"
                  onChange={handleInput}
                  value={text}
                  autoFocus
                />
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Закрыть</button>
                <button type="button" className="btn btn-primary" onClick={updateItem}>Сохранить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

