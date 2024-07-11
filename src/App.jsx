import React, { useState } from 'react';
import './App.css';
import Gantt from './components/gantt';
import { fakeData } from './constants/fakeData';
import { Modal } from './components/Modal';

function App() {
    

    return (
        <div className="">
            <Gantt data={fakeData}/>
        </div>
    );
}

export default App;
