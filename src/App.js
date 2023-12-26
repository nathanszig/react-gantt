import React from 'react';
import './App.css';
import Gantt from './components/gantt';

import {fakeData} from "./constants/ganttUtils";
function App() {

    return (
        <div className="App">
            <Gantt data={fakeData}/>
        </div>
    );
}

export default App;
