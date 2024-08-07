import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import {calculateWidthAndMargin, getWeekList, SINGLE_USER, USERS} from '../assets/utils/ganttUtils';
import info from '../assets/pictos/info.svg';

const GanttTaskContainer = (props) => {

  const [timelineWidth, setTimelineWidth] = useState(null);
  const timelineWeeks = getWeekList(props.users);
  const modeMonth = props.modeMonth;
  const stackedRef = useRef(null);
  const { onTaskClick } = props;

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

  // Calculate the width and margin of the task
  const calculateTaskStyle = (task) => {
    const { widthPercentage, taskMarginLeft } = calculateWidthAndMargin(task.start,task.end,timelineWeeks[0].start, timelineWidth,modeMonth)
    props.previousTasks.push({ widthPercentage, taskMarginLeft });
    return {
      width: `${widthPercentage}px`,
      left: `calc(${taskMarginLeft}px)`,
    };
  };

  // Get the task container style
  const getTaskContainerStyle = (data) => {
    return props.selectedDropdownId === data.id
      ? { flexDirection: 'column', marginTop: '110px' }
      : { flexDirection: 'row' };
  };

  // Render the tasks
  const renderTasks = (tasks, selectedId, projectIndex = 0) => {
    console.log(tasks)
    return tasks.map((task, index) => {
      let nbDays = moment(task.end).diff(moment(task.start), 'days');
      let nbMonths = moment(task.end).diff(moment(task.start), 'months');
      let nbYears = moment(task.end).diff(moment(task.start), 'years');
      let { width, left } = calculateTaskStyle(task);
      let regex = /(?<=calc\()\d+(\.\d+)?(?=px\))/;
      let finalMargin = parseInt(left.match(regex));

      // Check if the task is stacked
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
      let height = props.selectedDropdownId === selectedId ? '100px' : `calc(100px / ${nbStacked})`;
      let top = 0;

      // Check if the task is truncated
      useEffect(() => {
        if (stackedRef && stackedRef.current) {
          if (stackedRef.current.offsetWidth > parseInt(width.match(/\d+/))) {
            stackedRef.current.classList.add('truncated');
          } else if (stackedRef.current.classList.contains('truncated')) {
            stackedRef.current.classList.remove('truncated');
          }
        }
      }, [stackedRef, modeMonth]);

      // If the view is USERS calculate the top with the project index else calculate it with the idstack
      if (props.view !== USERS) {
        top = props.selectedDropdownId === selectedId
          ? `calc(100px * ${index} + 10px)`
          : `calc(100px / ${nbStacked} * ${idstack - 1} ${idstack > 1 ? '+ 5px' : ''})`;
      } else {
        top = props.selectedDropdownId === selectedId
          ? `calc(130px * ${projectIndex})`
          : `calc(100px / ${nbStacked} * ${idstack - 1} ${idstack > 1 ? '+ 5px' : ''} + 10px)`;
      }

      // Calculate the duration of the task in years, months and days
      let duration = '';

      nbYears > 0 ? duration += `${nbYears} an${nbYears > 1 ? 's' : ''}` : '';
      nbMonths > 0 ? duration += nbYears > 0 ? (nbMonths - nbYears * 12 > 0 ? ` ${nbMonths - nbYears * 12} months` : '') : ` ${nbMonths} months` : '';
      nbDays > 0 ? duration += nbMonths > 0 ? (nbDays - nbMonths * 30 > 0 ? ` ${nbDays - nbMonths * 30} days` : '') : ` ${nbDays} days` : '';
      // Return the task
      return (
        <div className="gantt-container-section-main-tasks project" key={task.id} onClick={() => onTaskClick(task)}>
          <div className="gantt-container-section-main-tasks-m">
            <div
              className={`gantt-container-section-main-tasks-t ${stacked ? 'stacked' : ''}`}
              style={{width: width, left: finalMargin, height: height, top: top }}
            >
              <div
                ref={stackedRef}
                className="gantt-container-section-main-tasks-t-content"
                style={props.styleData.taskContainer}
              >
                <img
                  src={info}
                  alt="Info"
                  className="info-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    onTaskClick(task);
                  }}
                  style={{position: 'absolute', top: '5px', right: '5px', cursor: 'pointer'}}
                />
                <p>
                  <span>
                    {moment(task.start, 'MM/DD/YYYY').format('DD/MM/YYYY')} -{' '}
                    {moment(task.end, 'MM/DD/YYYY').format('DD/MM/YYYY')}
                  </span>
                </p>
                <p className="title">{task.name}</p>
                <p className="nbDays">{duration}</p>
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
      style={getTaskContainerStyle(props.view === USERS ? props.user : props.project)}
    >
      {props.view !== USERS
        ? renderTasks(props.project.tasks, props.project.id)
        : props.user.projects.map((project, index) => (
          renderTasks(project.tasks, props.user.id, index)
            )
        )}
    </div>
  );
};

export default GanttTaskContainer;

