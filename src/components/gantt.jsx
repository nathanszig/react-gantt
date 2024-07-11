import React, { useState } from 'react';
import arrowLeft from '../assets/pictos/arrow-left.svg';
import arrowRight from '../assets/pictos/arrow-right.svg';
import '../styles/gantt.scss';
import '../index.css';
import GanttViewProject from './GanttViewProject'
import GanttViewPerso from './GanttViewPerso'
import {removeProjectAllProjects, SINGLE_USER, PROJECTS, USERS} from "../assets/utils/ganttUtils";
import GanttViewTeams from "./GanttViewTeams";

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

const Gantt = ({ customize, data, onTaskClick }) => {
  const [testData, setTestData] = useState(data);
  const [view, setView] = useState(PROJECTS);
  const [modeMonth, setModeMonth] = useState(false);

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

  // Move the gantt to the left
  const handleMoveLeft = () => {
    const ganttContainer = document.querySelector(".gantt-container-section");
    if (ganttContainer) {
      ganttContainer.scrollLeft -= 500;
    }
  };

  // Move the gantt to the right
  const handleMoveRight = () => {
    const ganttContainer = document.querySelector(".gantt-container-section");
    if (ganttContainer) {
      ganttContainer.scrollLeft += 500;
    }
  };

  // Change the mode of the gantt between month and week
  const changeMode = (mode) => {
    setModeMonth(mode);
  }

  // Select the view to display and if it's a single user, display the user passed in parameter
  const selectView = (userId, newView = null) => {
    if (view !== SINGLE_USER && userId !== null) {
      // Sort to only get the data of the selected user
      const selectedUser = data.users.filter(user => user.id === userId);
      setTestData({ users: [selectedUser[0]] });
      setView(SINGLE_USER);
    } else if (newView !== null && view !== newView && newView !== SINGLE_USER && userId === null) {
      newView === PROJECTS ? setTestData(removeProjectAllProjects(data)) : setTestData(data.users);
      setView(newView);
    }
  }

  const styles = mergeStyles(defaultStyles, customize);

  // Render the project
  return (
    <div className="gantt-container" >
      <div className="gantt-container-filters">
        <div className="view-state-button">
          <button
            className={view === PROJECTS ? "active" : ""}
            onClick={() => selectView(null, PROJECTS)}
          >
            Projects
          </button>
          <button
            className={view === USERS ? "active" : ""}
            onClick={() => selectView(null, USERS)}
          >
            Users
          </button>
        </div>
        <div className="mode-state-button">
          <button
            className={modeMonth ? "active" : ""}
            onClick={() => changeMode(true)}
          >
            Mois
          </button>
          <button
            className={!modeMonth ? "active" : ""}
            onClick={() => changeMode(false)}
          >
            Semaine
          </button>
        </div>
        <div className="gantt-container-filters-crt">
          <div className="gantt-container-filters-crt-block">
            <button className="gantt-container-filters-crt-block-btn-left" onClick={handleMoveLeft}>
              <img src={arrowLeft} alt="Move Left"/>
            </button>
            <p onClick={handleMoveToStart} style={styles.todayButton}>Début</p>
            <p onClick={handleMoveToToday} style={styles.todayButton}>Today</p>
            <p onClick={handleMoveToEnd} style={styles.todayButton}>Fin</p>
            <button className="gantt-container-filters-crt-block-btn-right" onClick={handleMoveRight}>
              <img src={arrowRight} alt="Move Right"/>
            </button>
          </div>
        </div>
      </div>
      {
        view === PROJECTS ?
          <GanttViewProject
            customize={styles}
            data={testData}
            selectView={selectView}
            modeMonth={modeMonth}
            onTaskClick={onTaskClick}
          /> : view === SINGLE_USER ?
            <GanttViewPerso
              customize={styles}
              data={testData}
              selectView={selectView}
              modeMonth={modeMonth}
              onTaskClick={onTaskClick}
            /> :
            <GanttViewTeams
              customize={styles}
              data={testData}
              selectView={selectView}
              modeMonth={modeMonth}
              onTaskClick={onTaskClick}
            />
      }
    </div>
  );
};
export default Gantt;
