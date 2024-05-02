import React, { useState } from 'react';
import arrowLeft from '../assets/pictos/arrow-left.svg';
import arrowRight from '../assets/pictos/arrow-right.svg';
import '../styles/gantt.scss';
import '../index.css';
import GanttViewProject from './GanttViewProject'
import GanttViewPerso from './GanttViewPerso'
import {PERSO, PROJECT, USERS} from "../assets/utils/ganttUtils";

export function mergeStyles(target, source) {

  for (const key in source) {
    if (typeof source[key] === 'object') {
      // Si la valeur est un objet, fusionnez récursivement
      target[key] = mergeStyles(target[key] || {}, source[key]);
    } else {
      // Sinon, remplacez la valeur
      target[key] = source[key];
    }
  }
  return target;
}

export const handleMoveToToday = () => {
  const todayOnGantt = document.querySelector(".gantt-container-section .today");
  if (todayOnGantt) {
    todayOnGantt.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

export const handleMoveToStart = () => {
  const startOnGantt = document.querySelector(".gantt-container-section .start");
  if (startOnGantt) {
    startOnGantt.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

export const handleMoveToEnd = () => {
  const endOnGantt = document.querySelector(".gantt-container-section .end");
  if (endOnGantt) {
    endOnGantt.scrollIntoView({ behavior: "smooth", inline: "end", block: "nearest" });
  }
}

const Gantt = ({ customize, data }) => {
  const [testData, setTestData] = useState(data);
  const [view, setView] = useState("project");
  const defaultStyles = {
    todayButton: {
      background: '#FFF',
      color: '#000',
      border: '1px solid #000',
      borderRadius: "5px",
    },
    daysContainer: {
      background: '#FFF',
      color: '#000',
      border: '1px solid #000',
      borderRadius: "5px",
    },
  };

  const handleMoveLeft = () => {
    const ganttContainer = document.querySelector(".gantt-container-section");
    if (ganttContainer) {
      ganttContainer.scrollLeft -= 500;
    }
  };

  const handleMoveRight = () => {
    const ganttContainer = document.querySelector(".gantt-container-section");
    console.log(ganttContainer);
    if (ganttContainer) {
      console.log('there')
      ganttContainer.scrollLeft += 500;
    }
  };

  const selectUser = (userId) => {
    if (view !== PERSO) {
      // Sort to only get the data of the selected user
      const selectedUser = data.users.filter(user => user.id === userId);
      const newdata = { users: [selectedUser[0]] }
      setTestData(newdata);
      setView(PERSO);
    }
  }

  const styles = mergeStyles(defaultStyles, customize);

  return (
    <div className="gantt-container" >
      <div className="gantt-container-filters">
        <div className="view-state-button">
          <button className={view === PROJECT ? "active" : ""} onClick={() => setView(PROJECT)}>Projects
          </button>
          <button className={view === USERS ? "active" : ""} onClick={() => setView(USERS)}>Users
          </button>
        </div>
        <div className="gantt-container-filters-crt">
          <div className="gantt-container-filters-crt-block">
            <button className="gantt-container-filters-crt-block-btn-left" onClick={handleMoveLeft}>
              <img src={arrowLeft} alt="Move Left"/>
            </button>
            <p onClick={handleMoveToStart} style={styles.todayButton}>Début</p>
            <p onClick={handleMoveToToday} style={styles.todayButton}>Aujourd'hui</p>
            <p onClick={handleMoveToEnd} style={styles.todayButton}>Fin</p>
            <button className="gantt-container-filters-crt-block-btn-right" onClick={handleMoveRight}>
              <img src={arrowRight} alt="Move Right"/>
            </button>
          </div>
        </div>
      </div>
      {
        view === PROJECT ?
          <GanttViewProject
            customize={styles}
            data={testData}
            selectUser={selectUser}
          />
          :
          <GanttViewPerso
            customize={styles}
            data={testData}
            selectUser={selectUser}
          />
      }
    </div>
  );
};
export default Gantt;
