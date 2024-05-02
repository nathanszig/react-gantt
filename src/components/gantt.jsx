import React, { useState } from 'react';
import arrowLeft from '../assets/pictos/arrow-left.svg';
import arrowRight from '../assets/pictos/arrow-right.svg';
import '../styles/gantt.scss';
import '../index.css';
import GanttViewProject from './GanttViewProject'
import GanttViewPerso from './GanttViewPerso'
import {removeProjectAllProjects, PERSO, PROJECT, USERS} from "../assets/utils/ganttUtils";

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
    if (ganttContainer) {
      ganttContainer.scrollLeft += 500;
    }
  };

  const selectUser = (userId, newView = null) => {
    if (view !== PERSO && userId !== null) {
      // Sort to only get the data of the selected user
      const selectedUser = data.users.filter(user => user.id === userId);
      setTestData({ users: [selectedUser[0]] });
      setView(PERSO);
    } else if (newView !== null && view !== newView && newView !== PERSO && userId === null) {
      setTestData(removeProjectAllProjects(data))
      setView(newView);
    }
  }

  const styles = mergeStyles(defaultStyles, customize);

  return (
    <div className="gantt-container" >
      <div className="gantt-container-filters">
        <div className="view-state-button">
          <button
            className={view === PROJECT ? "active" : ""}
            onClick={() => selectUser(null, PROJECT)}
          >
            Projects
          </button>
          <button
            className={view === USERS ? "active" : ""}
            onClick={() => selectUser(null, USERS)}
          >
            Users
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
          view === PERSO ?
          <GanttViewPerso
            customize={styles}
            data={testData}
            selectUser={selectUser}
          /> : <></>
      }
    </div>
  );
};
export default Gantt;
