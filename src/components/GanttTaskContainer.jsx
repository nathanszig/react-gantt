import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {calculateWidthAndMargin, getWeekList, PERSO, TEAM} from '../assets/utils/ganttUtils';

const GanttTaskContainer = (props) => {

  const [timelineWidth, setTimelineWidth] = useState(null);
  const timelineWeeks = getWeekList(props.users);
  const modeMonth = props.modeMonth;

  useEffect(() => {
    const updateWidths = () => {
      if (modeMonth) {
        const monthDiv = document.getElementsByName('month')[1];
        if (monthDiv) {
          setTimelineWidth(monthDiv.offsetWidth);
        }
      } else {
        const weekDiv = document.getElementsByName('week')[1];
        if (weekDiv) {
          setTimelineWidth(weekDiv.offsetWidth);
        }
      }
    };
    updateWidths();
    window.addEventListener('resize', updateWidths); // Update widths on resize
    return () => window.removeEventListener('resize', updateWidths); // Clean up the event listener
  }, [modeMonth]);

  const calculateTaskStyle = (task) => {
    const { widthPercentage, taskMarginLeft } = calculateWidthAndMargin(task.start,task.end,timelineWeeks[0].start, timelineWidth,modeMonth)
    props.previousTasks.push({ widthPercentage, taskMarginLeft });
    return {
      width: `${widthPercentage}px`,
      left: `calc(${taskMarginLeft}px)`,
    };
  };

  const getTaskContainerStyle = (data) => {
    return props.selectedDropdownId === data.id
      ? { flexDirection: 'column', marginTop: '150px' }
      : { flexDirection: 'row' };
  };

  const renderTasks = (tasks, selectedId, projectIndex = 0) => {
    return tasks.map((task, index) => {
      let { width, left } = calculateTaskStyle(task);
      let regex = /(?<=calc\()\d+(\.\d+)?(?=px\))/;
      let finalMargin = parseInt(left.match(regex));

      // Vérifier si cette tâche se chevauche avec une autre tâche dans le même projet
      let stacked = false;
      let nbStacked = 1;
      let idstack = 1;
      for (let i = 0; i < tasks.length; i++) {
        if (i !== index) {
          let otherTask = tasks[i];
          if (
            (moment(task.start).isBetween(otherTask.start, otherTask.end) ||
              moment(task.end).isBetween(otherTask.start, otherTask.end)) ||
            (moment(otherTask.start).isBetween(task.start, task.end) ||
              moment(otherTask.end).isBetween(task.start, task.end))
          ) {
            stacked = true;
            nbStacked++;
            if (i < index) idstack++;
          }
        }
      }
      let height = props.selectedDropdownId === selectedId ? '110px' : `calc(132px / ${nbStacked})`;
      let top = 0;
      // Si la vue est TEAM, on calcule le top en fonction de l'index du projet sinon en fonction de l'index de la tâche
      if (props.view !== TEAM) {
        top = props.selectedDropdownId === selectedId
          ? `calc(115px * ${index})`
          : `calc(135px / ${nbStacked} * ${idstack - 1} ${idstack > 1 ? '+ 5px' : ''})`;
      } else {
        top = props.selectedDropdownId === selectedId
          ? `calc(135px * ${projectIndex})`
          : `calc(135px / ${nbStacked} * ${idstack - 1} ${idstack > 1 ? '+ 5px' : ''})`;
      }
      return (
        <div className="gantt-container-section-main-tasks project" key={task.id}>
          <div className="gantt-container-section-main-tasks-m">
            <div
              className={`gantt-container-section-main-tasks-t ${stacked ? 'stacked' : ''}`}
              style={{width: width, left: finalMargin, height: height, top: top }}
            >
              <div
                className="gantt-container-section-main-tasks-t-content"
                style={props.styleData.taskContainer}
              >
                <p>
                  <span>
                    {moment(task.start, 'MM/DD/YYYY').format('DD/MM/YYYY')} -{' '}
                    {moment(task.end, 'MM/DD/YYYY').format('DD/MM/YYYY')}
                  </span>
                </p>
                <p className="title">{task.name}</p>
                <p className="description">{task.description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      className="gantt-task-container"
      style={getTaskContainerStyle(props.view === TEAM ? props.user : props.project)}
    >
      {props.view !== TEAM
        ? renderTasks(props.project.tasks, props.project.id)
        : props.user.projects.map((project, index) => (
              renderTasks(project.tasks, props.user.id, index)
            )
        )}
    </div>
  );
};

export default GanttTaskContainer;
