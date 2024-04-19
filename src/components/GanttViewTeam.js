import React, {useEffect, useState} from 'react';
import moment from 'moment';

import {calculateWidthAndMargin, constants} from '../constants/ganttUtils';

import fakeData from '../constants/fakeData';


const GanttViewTeam = ({ mode }) => {

  const { ExclamationIcon } = constants;
  const [tasks, setTasks] = useState([]);
  const [timelineWeeks, setTimelineWeeks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      setTimelineWeeks(getWeekList());
    }
  }, [users]);

  useEffect(() => {
    setTasks(getTask());
    setTimelineWeeks(getWeekList());
  }, [users]);

  useEffect(() => {
    navigateToday();
  }, [timelineWeeks]);

  const getUsers = () => {
    setUsers(fakeData.users);
  };

  const getTask = () => {
    const tasks = [];
    users.map((user) => {
      user.tasks.map((task) => {
        tasks.push(task);
      });
    });
    return tasks;
  };

  function returnTwoFirstsCharacters(string) {
    return string ? string.substring(0, 2) : '';
  }

  function getWeekList() {
    const startDate =  moment.min(tasks.map((task) => moment(task.start).startOf("isoWeek")).flat());
    const endDate = moment.max(tasks.map((task) => moment(task.end).endOf('isoWeek')).flat());

    const weekList = [];
    let currentWeek = startDate.clone().startOf('isoWeek');
    while (currentWeek.isBefore(endDate)) {
      if (currentWeek.startOf('isoWeek').isBefore(endDate)) {
        const nextWeek = currentWeek.clone().add(4, 'days');
        weekList.push({
          start: currentWeek.format('YYYY-MM-DD'),
          end: nextWeek.format('YYYY-MM-DD')
        });
      }
      currentWeek.add(7, 'days');
    }
    return weekList;
  }
  const calculateHeight = () => {
    let height = 0;

  };

  const calculateTaskStyle = (task, index) => {
    const { widthPercentage, taskMarginLeft } = calculateWidthAndMargin(
      task.start,
      task.end,
      timelineWeeks[0].start,
      mode === 'Mois' ? 250 : 750
    );
    const taskStyle = {
      width: `${widthPercentage}px`,
      left: `calc(${taskMarginLeft}px + 244px)`,
    };

    if (index > 0) {
      taskStyle.marginLeft = '5px'
    }

    return taskStyle;
  }

  function navigateToday() {
    const todayOnGantt = document.querySelector(".gantt-container-section .today");
    if (todayOnGantt) {
      todayOnGantt.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    }
  }

  return (
    <section className="gantt-container-section">
      <div className="gantt-container-section-timeline">
        <div className="gantt-container-section-timeline-header">
          {
            mode === 'Mois' ?
              (
                <div className="gantt-container-section-timeline-header">
                  {timelineWeeks.map((week, index) => {
                    const startOfWeek = moment(week.start, 'YYYY-MM-DD');
                    const endOfWeek = moment(week.end, 'YYYY-MM-DD');
                    const today = moment().startOf('day');
                    const isCurrentWeek = today.isBetween(startOfWeek, endOfWeek, null, '[]');
                    return (
                      <div className={`gantt-container-section-timeline-header-days ${isCurrentWeek ? "today" : ""}`} key={index}>
                        <p>
                          {moment(week.start).format('DD MMMM')} - {moment(week.end).format('DD MMMM')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="gantt-container-section-timeline-header">
                  {timelineWeeks.map((week, index) => {
                    const startOfWeek = moment(week.start, 'YYYY-MM-DD');
                    const endOfWeek = moment(week.end, 'YYYY-MM-DD');
                    const today = moment().startOf('day');
                    const isCurrentWeek = today.isBetween(startOfWeek, endOfWeek, null, '[]');
                    return (
                      <div className={`gantt-container-section-timeline-header-week ${isCurrentWeek ? "today" : ""}`} key={index}>
                        <p>
                          {moment(week.start).format('DD MMMM')} - {moment(week.end).format('DD MMMM')}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )
          }
        </div>
      </div>

      <div className="gantt-container-section-sidebar">
        {users.map((user) => (
          <div className="gantt-container-section-sidebar-line" key={user.id} style={{ height: 'auto', position: "relative" }}>
            <div
              className="gantt-container-section-sidebar-tasks team"
              style={{ height: 'auto' }}
            >
              <div className="gantt-container-section-sidebar-task">
                <div className="gantt-container-section-sidebar-task-client">
                  <p className="gantt-container-section-sidebar-task-client-name">{user.firstName}</p>
                  <p className="gantt-container-section-sidebar-task-client-adress">{user.lastName}</p>
                </div>
                <div className="gantt-container-section-sidebar-task-icon">
                  <img className='gantt-container-section-sidebar-dropdown-content-user-image' src={user.urlAvatar} alt={"user avatar"} />
                </div>
              </div>
            </div>

            <div className="gantt-container-section-main-tasks equipe">
              <div className="gantt-container-section-main-tasks-m equipe">
                {user.tasks?.map((task, index) => {
                    return (
                      <div
                        className="gantt-container-section-main-tasks-t"
                        key={task.id}
                        style={calculateTaskStyle(task, index)}
                      >
                        <div className="gantt-container-section-main-tasks-t-content equipe">
                        </div>
                      </div>
                    );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GanttViewTeam;
