import React, { useState } from 'react';
import arrowLeft from '../assets/pictos/arrow-left.svg';
import arrowRight from '../assets/pictos/arrow-right.svg';
import '../styles/gantt.scss';
import '../index.css';
import GanttViewProject from './GanttViewProject'
import GanttViewPerso from './GanttViewPerso'
import {removeProjectAllProjects, PERSO, PROJECT, TEAM} from "../assets/utils/ganttUtils";
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

const Gantt = ({ customize, data }) => {
  const [testData, setTestData] = useState(data);
  const [view, setView] = useState("project");
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

  const changeMode = (mode) => {
    setModeMonth(mode);
  }

  const selectUser = (userId, newView = null) => {
    if (view !== PERSO && userId !== null) {
      // Sort to only get the data of the selected user
      const selectedUser = data.users.filter(user => user.id === userId);
      setTestData({ users: [selectedUser[0]] });
      setView(PERSO);
    } else if (newView !== null && view !== newView && newView !== PERSO && userId === null) {
      newView === PROJECT ? setTestData(removeProjectAllProjects(data)) : setTestData(data.users);
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
            className={view === TEAM ? "active" : ""}
            onClick={() => selectUser(null, TEAM)}
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
        view === PROJECT ?
          <GanttViewProject
            customize={styles}
            data={testData}
            selectUser={selectUser}
            modeMonth={modeMonth}
          />
          :
          view === PERSO ?
            <GanttViewPerso
              customize={styles}
              data={testData}
              selectUser={selectUser}
              modeMonth={modeMonth}
            /> : <GanttViewTeams
              customize={styles}
              data={testData}
              selectUser={selectUser}
              modeMonth={modeMonth}
            />
      }
    </div>
  );
};
export default Gantt;
