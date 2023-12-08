import React, {useEffect, useState} from "react";
import moment from "moment";

import {calculateWidthAndMargin, fakeData} from '../constants/ganttUtils';
import {mergeStyles} from "./gantt";

const GanttViewProject = ({ mode, customize }) => {

  const defaultStyles = {
    daysContainer:{
      background: '#000',
      color: '#fff',
    },
    weeksContainer:{
      background: '#000',
      color: '#fff',
    },
  };

  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [timelineWeeks, setTimelineWeeks] = useState([]);
  const [previousTasks, setPreviousTasks] = useState([]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  useEffect(() => {
    if(users.length > 0) {
      setProjects(getProjects())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users])

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
    users.forEach((user) =>
        user.tasks.forEach((task) => {
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
            const taskIndex = projectsMap[0].tasks.findIndex((t) => t.id === taskId);
            if (taskIndex === -1) {
              projectsMap[projectIndex].tasks.push(task);
              projectsMap[projectIndex].users.push(user);
            }
          }
        })
    );
    return projectsMap;
  }

  const styles = mergeStyles(defaultStyles, customize);

  const getTasks = async () => {
    const timelineWeeks = getWeekList(fakeData);
    setTimelineWeeks(timelineWeeks);
  };

  useEffect( () => {
    getTasks()
  }, []);

  const calculateTaskStyle = (task) => {
    const { widthPercentage, taskMarginLeft } = calculateWidthAndMargin(
      task.start,
      task.end,
      timelineWeeks[0].start,
      mode === "Mois" ? 250 : 250
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
          <div className="gantt-container-section-timeline-header" >
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
                    isCurrentWeek ? "today" :
                    index === 0 ? "start" : 
                    index === timelineWeeks.length - 1 ? "end" : ""
                  }`}
                  key={index}
                  style={styles.daysContainer}
                >
                  <p>
                    {moment(week.start).format("DD MMMM")} -{" "}
                    {moment(week.end).format("DD MMMM")}
                  </p>
                </div>
              );
            })}
          </div>
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
            <div className="gantt-task-container">

            
          {project.tasks.map((task, index) => {
            let {width, left} = calculateTaskStyle(task)
            let marginLeftVar = index != 0 ? previousTasks[index-1].widthPercentage : null ;
            let regex = /(?<=calc\()\d+(\.\d+)?(?=px\))/
            let finalMargin = (parseInt(left.match(regex)));
            console.log('test' , left)
            return (
            <div className="gantt-container-section-main-tasks project" key={task.id}>
              <div className="gantt-container-section-main-tasks-m">
                <div
                  className="gantt-container-section-main-tasks-t"
                  style={{width: width, left: finalMargin}}
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
                            250
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
          )})}
          </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default GanttViewProject;
