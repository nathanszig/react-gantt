import React from 'react';
import closeIcon from '../assets/pictos/close.svg';
export const Modal = ({ isOpen, onClose, onTaskClick, task, customize }) => {
  return (
    isOpen ?
      <div className="modal" onClick={onClose}>
        <div className='content' onClick={(e) => e.stopPropagation()} style={customize ? customize.modal : {}}>
          <div className="modal-header">
            <h2>{task ? `${task.name}` : ''}</h2>
            {task.project && task.project.name && <p>{task.project.name} - {task.user.lastName} {task.user.firstName}</p>}
            <img
              src={closeIcon}
              alt="Close the modal"
              className="close-icon"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            />
            <div className='time'>
              <p>{task.start && `${task.start}`} - {task.end && `${task.end}`}</p>
            </div>
          </div>
          {task ? (
            <div>
          
              <p>{task.description}</p>
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
