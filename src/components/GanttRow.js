import React from 'react';

const GanttRow = ({ task }) => {
    return (
        <div className="gantt-row">
            <div className="gantt-task-name">{task.name}</div>
            <div className="gantt-bar-container">
                <div className="gantt-bar" style={{ width: `${task.duration}%` }}></div>
            </div>
        </div>
    );
};

export default GanttRow;
