import React from 'react';

const TaskTable = ({ tasks }) => {
    return (
        <table className="task-table">
            <thead>
                <tr>
                    <th>Tasks</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, index) => (
                    <tr key={index}>
                        <td>{task.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TaskTable;
