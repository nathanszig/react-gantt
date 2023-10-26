import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import arrowLeft from '../img/icons/arrow-left.svg';
import arrowRight from '../img/icons/arrow-right.svg';
import '../styles/gantt.scss';
import GanttViewTeam from './GanttViewTeam'
import GanttViewProject from './GanttViewProject'


const MbeGantt = () => {

  // const { ArrowLeft, ArrowRight } = constants;

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
            <p onClick={handleMoveToToday}>Aujourd'hui</p>
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
          />
        ) : (
          <GanttViewProject
            mode={selectedCalendar}
          />
        )
      }
    </div>
  );
};

export default MbeGantt;