import React, { useState } from 'react';
import './App.css';
import Gantt from './components/gantt';
import { fakeData } from './constants/fakeData';
import { Modal } from './components/Modal';

function App() {
    const style1 = {
        "daysContainer": {
            "background": "#faeccb",
            "color": "#000000",
            "border": "1px solid #000000",
            "borderRadius": "5px"
        },
        "taskContainer": {
            "background": "#e3881d",
            "color": "#ffff",
            "border": "1px solid #000"
        },
        "sidebarProjects": {
            "background": "#faeccb",
            "color": "#000",
            "border": "1px solid #000"
        },
        "todayButton": {
            "background": "#e3881d",
            "color": "#ffff",
            "border": "1px solid #000000",
            "borderRadius": "5px"
        },
    }

    const style2 = {
        "daysContainer": {
            "background": "#daebff",
            "color": "#000000",
            "border": "1px solid #000000",
            "borderRadius": "5px"
        },
        "taskContainer": {
            "background": "#5ca8fe",
            "color": "#ffff",
            "border": "1px solid #000",
            "borderRadius": "5px"
        },
        "sidebarProjects": {
            "background": "#daebff",
            "color": "#000",
            "border": "1px solid #000",
            "borderRadius": "5px"
        },
        "todayButton": {
            "background": "#3685fb",
            "color": "#ffff",
            "border": "1px solid #000000",
            "borderRadius": "5px"
        },
    }

    const style3 = {
        "daysContainer": {
            "background": "#e8e6df",
            "color": "#000000",
            "border": "1px solid #000000",
            "borderRadius": "0"
        },
        "taskContainer": {
            "background": "#9f987c",
            "color": "#ffff",
            "border": "1px solid #000",
            "borderRadius": "0"
        },
        "sidebarProjects": {
            "background": "#e8e6df",
            "color": "#000",
            "border": "1px solid #000",
            "borderRadius": "0"
        },
        "todayButton": {
            "background": "#857e60",
            "color": "#ffff",
            "border": "1px solid #000000",
            "borderRadius": "0"
        },
    }

    const style4 = {
            "todayButton": {
                "background": "#ffff",
                "color": "#000000",
                "border": "1px solid #000000",
                "borderRadius": "5px"
            },
            "daysContainer": {
                "background": "#ffff",
                "color": "#000000",
                "border": "1px solid #000000",
                "borderRadius": "5px"
            },
            "sidebarProjects": {
                "background": "#fff",
                "color": "#000",
                "border": "1px solid #000"
            },
            "taskContainer": {
                "background": "#fff",
                "color": "#000",
                "border": "1px solid #000"
            }
    }

    const [currentStyle, setCurrentStyle] = useState(style1);
    const [modal, setModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleClose = () => {
      setModal(false);
    };

    const handleTaskClick = (task) => {
      setSelectedTask(task);
      setModal(true);
    };

    return (
        <div className="App">
            <Modal isOpen={modal} onClose={handleClose} task={selectedTask} />
            <div>
                <button onClick={() => setCurrentStyle(style1)}>Style 1</button>
                <button onClick={() => setCurrentStyle(style2)}>Style 2</button>
                <button onClick={() => setCurrentStyle(style3)}>Style 3</button>
                <button onClick={() => setCurrentStyle(style4)}>Style 4</button>
            </div>
            <Gantt data={fakeData} customize={currentStyle} onTaskClick={handleTaskClick}/>
        </div>
    );
}

export default App;
