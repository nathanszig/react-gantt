import React, {useCallback, useEffect, useState} from "react";
import moment from "moment";

import {calculateWidthAndMargin, weekHaveTask} from '../constants/ganttUtils';
import {mergeStyles} from "./gantt";

import Icon from '../arrow-left.svg';


const GanttViewProject = ({ customize, data }) => {

  const defaultStyles = {
    sidebarProjects: {
      background: '#fff',
      color: '#000',
      border: '1px solid #000',
    },
    taskContainer: {
      background: '#fff',
      color: '#000',
      border: '1px solid #000',
    },
  };

  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [timelineWeeks, setTimelineWeeks] = useState([]);
  const [previousTasks, setPreviousTasks] = useState([]);
  const [selectedDropdownId, setSelectedDropdownId] = useState(null);
  const [weekWithoutTask, setWeekWithoutTask] = useState(0);
  const toggleDropdown = (id) => {
    if (selectedDropdownId === id) {
      setSelectedDropdownId(null);
    } else {
      setSelectedDropdownId(id);
    }
  };

  const getUsers = useCallback(() => {
    setUsers(data && data.users ? data.users : []);
  }, [data]);

  const getWeekList = useCallback(() => {
    const startDate = moment.min(
        users.map((user) =>
            user.tasks.map((task) =>
                moment(task.start)
            )
        ).flat()
    );

    const endDate = moment.max(
        users.flatMap((user) => {
          return user.tasks.map((task) => {
            console.log('task ', task);
            return moment(task.end);
          });
        })
    );

    const weekList = [];
    let currentWeek = startDate.clone().startOf("isoWeek");
    while (currentWeek.isBefore(endDate)) {
      const endWeek = currentWeek.clone().add(4, "days");
      weekList.push({
        start: currentWeek.format("YYYY-MM-DD"),
        end: endWeek.format("YYYY-MM-DD"),
      });
      currentWeek.add(7, "days");
    }
    return weekList;
  }, [users]);

  const getProjects = useCallback(() => {
    const projectsMap = [];
    users.forEach((user) =>
        user.tasks.forEach((task) => {
          const project = task.project;
          const projectId = project.id;
          const taskId = task.id;
          const projectIndex = projectsMap.findIndex((p) => p.id === projectId);
          if (projectIndex === -1) {
            projectsMap.push({
              id: projectId,
              name: project.name,
              tasks: [task],
              users: [user]
            });
          } else {
            const taskIndex = projectsMap[projectIndex].tasks.findIndex((t) => t.id === taskId);
            const userIndex = projectsMap[projectIndex].users.findIndex((u) => u.id === user.id);
            if (taskIndex === -1) {
              projectsMap[projectIndex].tasks.push(task);
              if (userIndex === -1) {
                  projectsMap[projectIndex].users.push(user);
              }
            }
          }
        })
    );
    return sortProjectByChronologicalOrder(projectsMap);
  }, [users]);

  useEffect(() => {
    getUsers();
    setPreviousTasks([]);
  }, [getUsers]);

  useEffect(() => {
    if (users.length > 0) {
      setTimelineWeeks(getWeekList());
    }
  }, [users, getWeekList]);

  useEffect(() => {
    if(users.length > 0) {
      setProjects(getProjects())
    }
  }, [users, getProjects])

  function excludeAttribute(obj, attributeToExclude) {
    const { [attributeToExclude]: excludedAttribute, ...rest } = obj;
    return rest;
  }

  function sortProjectByChronologicalOrder(projects) {
    function getProjectDateRange(project) {
      const startDates = project.tasks.map(task => new Date(task.start).getTime());
      const endDates = project.tasks.map(task => new Date(task.end).getTime());
      const startDate = new Date(Math.min(...startDates));
      const endDate = new Date(Math.max(...endDates));
      return { startDate, endDate };
    }

    function compareProjects(a, b) {
      const dateRangeA = getProjectDateRange(a);
      const dateRangeB = getProjectDateRange(b);

      if (dateRangeA.startDate < dateRangeB.startDate) {
        return -1;
      } else if (dateRangeA.startDate > dateRangeB.startDate) {
        return 1;
      } else {
        // If start dates are the same, sort based on end date
        if (dateRangeA.endDate < dateRangeB.endDate) {
          return -1;
        } else if (dateRangeA.endDate > dateRangeB.endDate) {
          return 1;
        } else {
          return 0;
        }
      }
    }

    const sortedProjects = [...projects].sort(compareProjects);
    // Sort tasks within each project
    sortedProjects.forEach(project => {
      project.tasks.sort((a, b) => new Date(a.start) - new Date(b.start));
    });

    return sortedProjects;
  }

  const styles = mergeStyles(defaultStyles, customize);

  const calculateTaskStyle = (task) => {
    const { widthPercentage, taskMarginLeft } = calculateWidthAndMargin(
      task.start,
      task.end,
      timelineWeeks[0].start,
      250
    );
    previousTasks.push({widthPercentage, taskMarginLeft});
    return {
      width: `${widthPercentage}px`,
      left: `calc(${taskMarginLeft}px)`,
    };
  };

  return (
      <section className="gantt-container-section">
        <div className="gantt-container-section-timeline">
          <div className="gantt-container-section-timeline-header">
            {timelineWeeks.map((week, index) => {
              const startOfWeek = moment(week.start, "YYYY-MM-DD");
              const endOfWeek = moment(week.end, "YYYY-MM-DD");
              const today = moment().startOf("day");
              const isCurrentWeek = today.isBetween(
                  startOfWeek,
                  endOfWeek.add(2, 'days'),
                  null,
                  "[]"
              );
              const isWeekHaveTask = weekHaveTask(users, startOfWeek, endOfWeek) || isCurrentWeek;
              return (
                  <div
                      className={`gantt-container-section-timeline-header-days ${isCurrentWeek ? "today" : ""} ${index === 0 ? "start" : index === timelineWeeks.length - 1 ? "end" : ""} ${isWeekHaveTask ? "" : "no-task"}`}
                      key={index}
                      style={styles.daysContainer}>
                      {isCurrentWeek ? (
                          <div className="todayDiv">
                            <p className="todayText"><b>Aujourd'hui</b></p>
                            <p className="weekDate">
                              {moment(week.start).format("DD MMMM")} -{" "}
                              {moment(week.end).format("DD MMMM")}
                            </p>
                          </div>
                      ) : (
                          <p className="weekDate">
                            {moment(week.start).format("DD MMMM")} -{" "}
                            {moment(week.end).format("DD MMMM")}
                          </p>
                      )}
                  </div>
              );
            })}
          </div>
        </div>

        <div className="gantt-container-section-sidebar">
          {projects.map((project) => (
              <div className="gantt-container-section-sidebar-line" key={project.id}>
                <div className="gantt-container-section-sidebar-tasks project" style={defaultStyles.sidebarProjects}>
                  <div className="gantt-container-section-sidebar-task">
                    <div className="gantt-container-section-sidebar-task-client">
                      <p className="gantt-container-section-sidebar-task-client-name">
                        {project.name}
                      </p>
                    </div>
                    <div
                        className="gantt-container-section-sidebar-task-icon"
                        onClick={() => toggleDropdown(project.id)}>
                      <img
                          src={Icon}
                          alt={"dropdown-arrow-gantt"}
                          style={{
                            transform:
                                project.id === selectedDropdownId
                                    ? "rotate(180deg)"
                                    : "rotate(0deg)",
                          }}
                      />
                    </div>
                  </div>
                  {project.id === selectedDropdownId && (
                      <div className="gantt-container-section-sidebar-dropdown-content">
                        {project.users.map((user) => (
                            <div className="gantt-container-section-sidebar-dropdown-content-user" key={user.id}>
                              <div className="gantt-container-section-sidebar-dropdown-content-user-p">
                                <p>{user.firstName}</p>
                                <p>{user.lastName}</p>
                              </div>
                            </div>
                        ))}
                      </div>
                  )}
                </div>
                <div className="gantt-task-container" style={
                  selectedDropdownId === project.id ? { flexDirection: 'column', marginTop: '115px' } : { flexDirection: 'row' }
                }>
                  {project.tasks.map((task, index) => {
                    let { width, left } = calculateTaskStyle(task);
                    let marginLeftVar = index !== 0 ? previousTasks[index - 1].widthPercentage : null;
                    let regex = /(?<=calc\()\d+(\.\d+)?(?=px\))/;
                    let finalMargin = selectedDropdownId === project.id ? (parseInt(left.match(regex)) - marginLeftVar) : parseInt(left.match(regex));
                    return (
                        <div className="gantt-container-section-main-tasks project" key={task.id}>
                          <div className="gantt-container-section-main-tasks-m">
                            <div
                                className="gantt-container-section-main-tasks-t"
                                style={{ width: width, left: finalMargin }}
                            >
                              <div className="gantt-container-section-main-tasks-t-content" style={defaultStyles.taskContainer}>
                                <p>
                          <span>
                            {moment(task.start, "MM/DD/YYYY").format("DD/MM/YYYY")} -{" "}
                            {moment(task.end, "MM/DD/YYYY").format("DD/MM/YYYY")}
                          </span>
                                </p>
                                <p className="title">
                                  {task.name}
                                </p>
                                <p className="description">
                                  {task.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                    );
                  })}
                </div>
              </div>
          ))}
        </div>
      </section>
  );
};

export default GanttViewProject;
