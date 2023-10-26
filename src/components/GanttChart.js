import React from 'react';
import GanttRow from './GanttRow';

const GanttChart = ({ tasks }) => {
    return (
        <div className="gantt-chart">
            {tasks.map((task, index) => (
                <GanttRow key={index} task={task} />
            ))}
        </div>
    );
};

export default GanttChart;
