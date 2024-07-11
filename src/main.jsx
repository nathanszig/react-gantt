import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gantt from './components/gantt';
import {fakeData} from "./constants/fakeData";
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <App/>
    </div>
    
);
