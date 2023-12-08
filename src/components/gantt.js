import React, {useRef} from 'react';
import '../styles/gantt.scss';
import '../index.css';
import GanttViewProject from './GanttViewProject'
import {constants} from '../constants/ganttUtils';

const todayOnGantt = document.querySelector(".gantt-container-section .today");

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
        todayOnGantt.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
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
    const {ArrowLeft, ArrowRight} = constants;

    const ganttContainerRef = useRef(null);
    const todayOnGanttRef = useRef(null);

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

    const styles = mergeStyles(defaultStyles, customize);

  return (
    <div className="gantt-container" ref={ganttContainerRef}>
      <div className="gantt-container-filters">
        <div className="gantt-container-filters-crt">
          <div className="gantt-container-filters-crt-block">
            <button className="gantt-container-filters-crt-block-btn-left" onClick={handleMoveLeft}>
              <img src={ArrowLeft} alt="Move Left" />
            </button>
            <p onClick={handleMoveToStart} style={styles.todayButton}>Début</p>
            <p onClick={handleMoveToToday} style={styles.todayButton}>Aujourd'hui</p>
            <p onClick={handleMoveToEnd} style={styles.todayButton}>Fin</p>
            <button className="gantt-container-filters-crt-block-btn-right" onClick={handleMoveRight}>
             <img src={ArrowRight} alt="Move Right" />
            </button>
          </div>
        </div>
      </div>

      {
        <GanttViewProject
          customize={styles}
        />
      }
    </div>
  );
};
export default Gantt;