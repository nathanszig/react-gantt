import React, { useState, useEffect } from 'react';
import moment from 'moment';

import {constants, calculateWidthAndMargin, fakeData} from './../constants/ganttUtils';



const GanttViewTeam = ({ mode }) => {

  const { ExclamationIcon } = constants;
  const [tasks, setTasks] = useState([]);
  const [timelineWeeks, setTimelineWeeks] = useState([]);

  function returnTwoFirstsCharacters(string) {
    return string.substring(0, 2);
  }

  function getWeekList(fixtures) {
    const allAssignments = [];
    fixtures.forEach(fixture => {
      if (fixture.assignments && Array.isArray(fixture.assignments)) {
        allAssignments.push(...fixture.assignments);
      }
    });
    const startDate = moment.min(allAssignments.map(item => moment(item.startAt).startOf('isoWeek')));
    const endDate = moment.max(allAssignments.map(item => moment(item.endAt).endOf('isoWeek')));
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

  function formatAssignments(fixtures) {
    const formattedFixtures = fixtures.map((fixture) => {
      const { assignments, ...rest } = fixture;
      const sortedAssignments = assignments.sort((a, b) => {
        return new Date(a.startAt) - new Date(b.startAt);
      });
      const formattedAssignments = [];
      for (let i = 0; i < sortedAssignments.length; i++) {
        const currentAssignment = sortedAssignments[i];
        const currentAssignmentEnd = new Date(currentAssignment.endAt);
        let assignmentData = { ...currentAssignment };
        let assignmentUnder = [];
        for (let j = i + 1; j < sortedAssignments.length; j++) {
          const nextAssignment = sortedAssignments[j];
          const nextAssignmentStart = new Date(nextAssignment.startAt);
          if (nextAssignmentStart <= currentAssignmentEnd) {
            assignmentUnder.push(nextAssignment);
            i++;
          } else {
            break;
          }
        }
        if (assignmentUnder.length > 0) {
          assignmentData = { ...assignmentData, assignmentUnder };
        }
        formattedAssignments.push(assignmentData);
      }
      return { ...rest, assignments: formattedAssignments };
    });
    return formattedFixtures;
  }

  const getTasks = async () => {
    // let request = await GlobalService.get('/ings/context/gantt');
    // if (request.status === 200) {
    //   const fixtures = request.data['hydra:member'];
    //   const tasks = formatAssignments(fixtures);
    //   const timelineWeeks = getWeekList(fixtures);
    //   setTasks(tasks);
    //   setTimelineWeeks(timelineWeeks);
    // }
    const fixtures = fakeData['hydra:member'];
    const tasks = formatAssignments(fixtures);
    const timelineWeeks = getWeekList(fixtures);
    setTasks(tasks);
    setTimelineWeeks(timelineWeeks);
  }

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    navigateToday();
  }, [timelineWeeks]);


  const calculateHeight = (fixture) => {
    let assignments = fixture.assignments;
    let height = 0;
    if (assignments) {
      if (assignments.length > 0) {
        let biggestLenghtAssignmentsUnder = 0;
        assignments.forEach(element => {
          if (element.assignmentUnder) {
            if (element.assignmentUnder.length > biggestLenghtAssignmentsUnder) {
              biggestLenghtAssignmentsUnder = element.assignmentUnder.length;
            }
          }
        });
        height += 110 + (biggestLenghtAssignmentsUnder * 115);
      } else {
        height += 110;
      }
    }
    if (height > 0) {
      return `${height}px`;
    } else {
      return 'auto';
    }
  };

  const calculateTaskStyle = (fixture, index, isUnderAssignment) => {
    const { widthPercentage, taskMarginLeft } = calculateWidthAndMargin(
      fixture.startAt,
      fixture.endAt,
      timelineWeeks[0].start,
      mode === 'Mois' ? 250 : 750
    );
    const leftPosition = taskMarginLeft;
    const taskStyle = {
      width: `${widthPercentage}px`,
      left: `calc(${leftPosition}px + 244px)`,
      top: isUnderAssignment ? `calc(${(index + 1) * 115}px)` : '',
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
              )
              :
              (
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
        {tasks.map((fixture) => (
          <div className="gantt-container-section-sidebar-line" key={fixture.id} style={{ height: calculateHeight(fixture), position: "relative" }}>

            <div
              className="gantt-container-section-sidebar-tasks team"
              style={{ height: calculateHeight(fixture) }}
            >
              <div className="gantt-container-section-sidebar-task">
                <div className="gantt-container-section-sidebar-task-client">
                  <p className="gantt-container-section-sidebar-task-client-name">{fixture.firstname}</p>
                  <p className="gantt-container-section-sidebar-task-client-adress">{fixture.lastname}</p>
                </div>
                <div className="gantt-container-section-sidebar-task-icon">
                  <img className='gantt-container-section-sidebar-dropdown-content-user-image' src={process.env.REACT_APP_PROD_URL + fixture.urlAvatar} alt={"user avatar"} />
                </div>
              </div>
            </div>

            <div className="gantt-container-section-main-tasks equipe">
              <div className="gantt-container-section-main-tasks-m equipe">
                {fixture.assignments?.map((assignment, index) => {

                  if (assignment.assignmentUnder) {
                    return (
                      <React.Fragment
                        key={assignment.id}
                      >
                        <div
                          className="gantt-container-section-main-tasks-t equipe"
                          style={calculateTaskStyle(assignment, index)}
                        >
                          <div className="gantt-container-section-main-tasks-t-content equipe">
                            {
                              moment(assignment.endAt).diff(assignment.startAt, 'days') <= 1 ?
                                (
                                  <>
                                    <p title={assignment.niceType + " - Client : " + assignment.clientNiceNames}>
                                      {returnTwoFirstsCharacters(assignment.niceType)}..
                                    </p>
                                  </>
                                ) : (
                                  <>
                                    <div className='equipe-task'>
                                      <p>{assignment.niceType}</p>
                                    </div>
                                    <div className='equipe-content'>
                                      <p>{assignment.clientNiceNames}</p>
                                      <p>{assignment.projectType}</p>
                                    </div>
                                  </>
                                )
                            }
                          </div>
                        </div>
                        {assignment.assignmentUnder.map((assignmentUnder, innerIndex) => (
                          <div className="gantt-container-section-main-tasks-u equipe" key={innerIndex} style={calculateTaskStyle(assignmentUnder, innerIndex, true)}>
                            <div
                              className="gantt-container-section-main-tasks-t equipe"
                            >
                              <div className="gantt-container-section-main-tasks-t-content equipe">
                                {
                                  moment(assignmentUnder.endAt).diff(assignmentUnder.startAt, 'days') <= 1 ?
                                    (
                                      <>
                                        <p title={assignmentUnder.niceType + " - Client : " + assignmentUnder.clientNiceNames}>
                                          {returnTwoFirstsCharacters(assignmentUnder.niceType)}..
                                        </p>
                                      </>
                                    ) : (
                                      <>
                                        <div className='equipe-task'>
                                          <p>{assignmentUnder.niceType}</p>
                                        </div>
                                        <div className='equipe-content'>
                                          <p>{assignmentUnder.clientNiceNames}</p>
                                          <p>{assignmentUnder.projectType}</p>
                                        </div>
                                      </>
                                    )
                                }
                              </div>
                            </div>
                          </div>
                        ))}
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <div
                        className="gantt-container-section-main-tasks-t"
                        key={assignment.id}
                        style={calculateTaskStyle(assignment, index)}
                      >
                        <div className="gantt-container-section-main-tasks-t-content equipe">
                          {
                            moment(assignment.endAt).diff(assignment.startAt, 'days') <= 1 ?
                              (
                                <>
                                  <p title={assignment.niceType + " - Client : " + assignment.clientNiceNames}>
                                    {returnTwoFirstsCharacters(assignment.niceType)}..
                                  </p>
                                </>
                              ) : (
                                <>
                                  <div className='equipe-task'>
                                    <p>{assignment.niceType}</p>
                                  </div>
                                  <div className='equipe-content'>
                                    <p>{assignment.clientNiceNames}</p>
                                    <p>{assignment.projectType}</p>
                                  </div>
                                </>
                              )
                          }
                        </div>
                      </div>
                    );
                  }
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
