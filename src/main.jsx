import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gantt from './components/gantt';
import {fakeData} from "./constants/ganttUtils";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Gantt data={fakeData}/>
);
