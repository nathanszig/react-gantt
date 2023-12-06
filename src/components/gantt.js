import React, { useState, useRef } from 'react';
import arrowLeft from '../assets/img/icons/arrow-left.svg';
import arrowRight from '../assets/img/icons/arrow-right.svg';
import '../styles/gantt.scss';
import '../index.css';
import GanttViewTeam from './GanttViewTeam'
import GanttViewProject from './GanttViewProject'
import {constants} from '../constants/ganttUtils';

const Gantt = ({customize}) => {
  const defaultStyles = {
        todayButton: {
            background: '#FFF',
            color: '#000',
            border: '1px solid #000',
            borderRadius: "5px",
        },
        weeksContainer: {
            background: '#FFF',
            color: '#000',
            border: '1px solid #000',
            borderRadius: "5px",
        },

    };
  const { ArrowLeft, ArrowRight } = constants;

  const ganttContainerRef = useRef(null);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [selectedCalendar, setSelectedCalendar] = useState('Mois');
  const [showGanttTeamChart, setShowGanttTeamChart] = useState(false);

  const handleSelectTeam = (event) => {
    setSelectedTeam(event.target.value);
    setShowGanttTeamChart(event.target.value === 'Vue equipe');
  };

  const handleSelectCalendar = (event) => {
    setSelectedCalendar(event.target.value);
  };

  const handleMoveLeft = () => {
    const ganttContainer = document.querySelector(".gantt-container-section");
    if (ganttContainer) {
      if (selectedCalendar === 'Mois') {
        ganttContainer.scrollLeft -= 500;
      } else {
        ganttContainer.scrollLeft -= 1000;
      }
    }
  };

  const handleMoveRight = () => {
    const ganttContainer = document.querySelector(".gantt-container-section");
    if (ganttContainer) {
      if (selectedCalendar === 'Mois') {
        ganttContainer.scrollLeft += 500;
      } else {
        ganttContainer.scrollLeft += 1000;
      }
    }
  };

  const handleMoveToToday = () => {
    const todayOnGantt = document.querySelector(".gantt-container-section .today");
    if (todayOnGantt) {
      todayOnGantt.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }

  function mergeStyles(target, source) {
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

  const styles = mergeStyles(defaultStyles, customize);

  return (
    <div className="gantt-container" ref={ganttContainerRef}>
      <div className="gantt-container-filters">
        <div className="gantt-container-filters-slc">
          <div className="gantt-container-filters-slc-group">
            <select value={selectedTeam} onChange={handleSelectTeam} className='select-custom-secondary'>
              <option value="Vue projet">Vue projet</option>
              <option value="Vue equipe">Vue équipe</option>
            </select>
            <select value={selectedCalendar} onChange={handleSelectCalendar} className='select-custom-secondary'>
              <option value="Mois">Mois</option>
              <option value="Semaine">Semaine</option>
            </select>
          </div>
        </div>
        <div className="gantt-container-filters-crt">
          <div className="gantt-container-filters-crt-block">
            <button className="gantt-container-filters-crt-block-btn-left" onClick={handleMoveLeft}>
              <img src={arrowLeft} alt="Move Left" />
            </button>
            <p onClick={handleMoveToToday} style={styles.todayButton}>Aujourd'hui</p>
            <button className="gantt-container-filters-crt-block-btn-right" onClick={handleMoveRight}>
             <img src={arrowRight} alt="Move Right" />
            </button>
          </div>
        </div>
      </div>

      {
        showGanttTeamChart ? (
          <GanttViewTeam
            mode={selectedCalendar}
            customize={styles}
          />
        ) : (
          <GanttViewProject
            mode={selectedCalendar}
            customize={styles}
          />
        )
      }
    </div>
  );
};
export default Gantt;