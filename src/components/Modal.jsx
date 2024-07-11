import React from 'react';
import closeIcon from '../assets/pictos/close.svg';
export const Modal = ({ isOpen, onClose, onTaskClick, task }) => {
  return (
    isOpen ?
      <div className="modal" onClick={onClose}>
        <div className='content' onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h1>{task ? `Tâche: ${task.name}` : ''}</h1>
            <img
              src={closeIcon}
              alt="Close the modal"
              className="close-icon"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            />
          </div>
          {task ? (
            <div>
            {task.project && task.project.name && <p>{`Projet: ${task.project.name}`}</p>}
              {task.user && task.user && <p>{`Assigné à : ${task.user.firstName} ${task.user.lastName} `}</p>}
              <p>{task.description || 'No description available'}</p>
              <p>{task.start && `Start: ${task.start}`}</p>
              <p>{task.end && `End: ${task.end}`}</p>
              {task.taskImgUrl && <img src={task.taskImgUrl} alt="Task Image" />}
            </div>
          ) : (
            <p>Modal content</p>
          )}
        </div>
      </div>
      : null
  );
}
