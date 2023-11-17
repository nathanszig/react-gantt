import React, {useEffect, useState} from "react";
import moment from "moment";

import {calculateWidthAndMargin, constants, fakeData} from '../constants/ganttUtils';


const GanttViewProject = ({ mode }) => {
  const { ExclamationIcon, ArrowLeft, ArrowRight } = constants;
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [timelineWeeks, setTimelineWeeks] = useState([]);
  function returnTwoFirstsCharacters(string) {
    return string.substring(0, 2);
  }
  function convertToHoursAndMinutes(number) {
    const hours = Math.floor(number);
    const decimalPart = number - hours;
    const minutes = Math.round(decimalPart * 60);
    return `${hours}h${minutes < 10 ? "0" : ""}${minutes}`;
  }

  const [selectedDropdownId, setSelectedDropdownId] = useState(null);
  const toggleDropdown = (id) => {
    if (selectedDropdownId === id) {
      setSelectedDropdownId(null);
    } else {
      setSelectedDropdownId(id);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      setTimelineWeeks(getWeekList());
    }
  }, [users]);

  useEffect(() => {
    if(users.length > 0) {
      setProjects(getProjects())
    }
  }, [users])

  useEffect(() => {
    navigateToday();
  }, [timelineWeeks]);

  const getUsers = () => {
    setUsers(fakeData.users);
  };

  function getWeekList() {
    const startDate = moment.min(
      users.map((user) =>
        user.tasks.map((task) =>
          moment(task.start).startOf("isoWeek")
        )
      ).flat()
    );

    const endDate = moment.max(
      users.map((user) =>
          user.tasks.map((task) =>
              moment(task.end).startOf("isoWeek")
          )
      ).flat()
    );

    const weekList = [];
    let currentWeek = startDate.clone().startOf("isoWeek");

    while (currentWeek.isBefore(endDate)) {
      if (currentWeek.startOf("isoWeek").isBefore(endDate)) {
        const nextWeek = currentWeek.clone().add(4, "days");
        weekList.push({
          start: currentWeek.format("YYYY-MM-DD"),
          end: nextWeek.format("YYYY-MM-DD"),
        });
      }
      currentWeek.add(7, "days");
    }
    return weekList;
  }

  function getProjects() {
    const projectsMap = [];
    users.map((user) =>
        user.tasks.map((task) => {
          const project = task.project;
          const projectId = project.id;
          const taskId = task.id;
          const projectIndex = projectsMap.findIndex((p) => p.id === projectId);
          task.user = user;
          if (projectIndex === -1) {
            projectsMap.push({
                id: projectId,
                name: project.name,
                tasks: [task],
                users: [user]
            });
          } else {
            const taskIndex = projectsMap.tasks.findIndex((t) => t.id === taskId);
            if (taskIndex === -1) {
              projectsMap[projectIndex].tasks.push(task);
              projectsMap[projectIndex].users.push(user);
            }
          }
        })
    );
    return projectsMap;
  }

  const calculateTaskStyle = (task) => {
    const { widthPercentage, taskMarginLeft } = calculateWidthAndMargin(
      task.start,
      task.end,
      timelineWeeks[0].start,
      mode === "Mois" ? 250 : 750
    );
    return {
      width: `${widthPercentage}px`,
      left: `calc(${taskMarginLeft}px)`,
    };
  };

  function navigateToday() {
    const todayOnGantt = document.querySelector(
      ".gantt-container-section .today"
    );
    if (todayOnGantt) {
      todayOnGantt.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }

  return (
    <section className="gantt-container-section">
      <div className="gantt-container-section-timeline">
        {mode === "Mois" ? (
          <div className="gantt-container-section-timeline-header">
            {timelineWeeks.map((week, index) => {
              const startOfWeek = moment(week.start, "YYYY-MM-DD");
              const endOfWeek = moment(week.end, "YYYY-MM-DD");
              const today = moment().startOf("day");
              const isCurrentWeek = today.isBetween(
                startOfWeek,
                endOfWeek,
                null,
                "[]"
              );
              return (
                <div
                  className={`gantt-container-section-timeline-header-days ${
                    isCurrentWeek ? "today" : ""
                  }`}
                  key={index}
                >
                  <p>
                    {moment(week.start).format("DD MMMM")} -{" "}
                    {moment(week.end).format("DD MMMM")}
                  </p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="gantt-container-section-timeline-header">
            {timelineWeeks.map((week, index) => {
              const startOfWeek = moment(week.start, "YYYY-MM-DD");
              const endOfWeek = moment(week.end, "YYYY-MM-DD");
              const today = moment().startOf("day");
              const isCurrentWeek = today.isBetween(
                startOfWeek,
                endOfWeek,
                null,
                "[]"
              );
              return (
                <div
                  className={`gantt-container-section-timeline-header-week ${
                    isCurrentWeek ? "today" : ""
                  }`}
                  key={index}
                >
                  <p>
                    {moment(week.start).format("DD MMMM")} -{" "}
                    {moment(week.end).format("DD MMMM")}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="gantt-container-section-sidebar">
        {projects.map((project) => (
          <div
            className="gantt-container-section-sidebar-line"
            key={project.id}
          >

            <div className="gantt-container-section-sidebar-tasks project">
              <div className="gantt-container-section-sidebar-task">
                <div className="gantt-container-section-sidebar-task-client">
                  <p className="gantt-container-section-sidebar-task-client-name">
                    {project.name}
                  </p>
                </div>
                <div
                  className="gantt-container-section-sidebar-task-icon"
                  onClick={() => toggleDropdown(project.id)}
                >
                  <img
                    src={"/images/pictos/arrow-dropdown-gantt.svg"}
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
                    <div
                      className="gantt-container-section-sidebar-dropdown-content-user"
                      key={user.id}
                    >
                      <div className="gantt-container-section-sidebar-dropdown-content-user-p">
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
                      </div>
                      <img
                        className="gantt-container-section-sidebar-dropdown-content-user-image"
                        src={process.env.REACT_APP_PROD_URL + user.urlAvatar}
                        alt={"user avatar"}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          {project.tasks.map((task) => (
            <div className="gantt-container-section-main-tasks project" key={task.id}>
              <div className="gantt-container-section-main-tasks-m">
                <div
                  className="gantt-container-section-main-tasks-t"
                  style={calculateTaskStyle(task)}
                >
                  <div className="gantt-container-section-main-tasks-t-content">
                    <p>
                      <span>
                        {moment(task.start).format("DD/MM/YYYY")} -{" "}
                        {moment(task.end).format("DD/MM/YYYY")}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {
                <div
                  className="gantt-container-section-main-tasks-u"
                  key={task.user.id}
                >
                  {task.id === selectedDropdownId && (
                    <>
                      {task.user.tasks.map((userTask, index) => {
                        const { widthPercentage, taskMarginLeft } =
                          calculateWidthAndMargin(
                            userTask.start,
                            userTask.end,
                            timelineWeeks[0].start,
                            mode === "Mois" ? 250 : 750
                          );

                        const taskStyle = {
                          width: `${widthPercentage}px`,
                          left: `calc(${taskMarginLeft}px)`,
                        };

                        if (index > 0) {
                          taskStyle.marginLeft = "5px";
                        }

                        return (
                          <div
                            className="gantt-container-section-main-tasks-t"
                            key={userTask.id}
                            style={taskStyle}
                          >

                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              }
            </div>
          ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GanttViewProject;
