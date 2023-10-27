import React, {useEffect, useState} from "react";
import moment from "moment";

import {calculateWidthAndMargin, constants, fakeData} from './../constants/ganttUtils';


const GanttViewProject = ({ mode }) => {
  const { ExclamationIcon, ArrowLeft, ArrowRight } = constants;

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

  const [tasks, setTasks] = useState([]);
  const [timelineWeeks, setTimelineWeeks] = useState([]);

  function getWeekList(fixtures) {
    const startDate = moment.min(
      fixtures.map((item) => moment(item.startAt).startOf("isoWeek"))
    );
    const endDate = moment.max(
      fixtures.map((item) => moment(item.endAt).endOf("isoWeek"))
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

  const getTasks = async () => {
    // let request = await GlobalService.get("/projects/context/gantt");
    // if (request.status === 200) {
    //   const fixtures = request.data["hydra:member"];
    //   const timelineWeeks = getWeekList(fixtures);
    //   setTasks(fixtures);
    //   setTimelineWeeks(timelineWeeks);
    // }
    const fixtures = fakeData['users'];
    const timelineWeeks = getWeekList(fixtures);
    setTimelineWeeks(timelineWeeks);
  };

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    navigateToday();
  }, [timelineWeeks]);

  const calculateTaskStyle = (fixture) => {
    const { widthPercentage, taskMarginLeft } = calculateWidthAndMargin(
      fixture.tasks[0].start,
      fixture.tasks[0].start,
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
        {tasks.map((fixture) => (
          <div
            className="gantt-container-section-sidebar-line"
            key={fixture.id}
          >
            <div className="gantt-container-section-sidebar-tasks project">
              <div className="gantt-container-section-sidebar-task">
                <div className="gantt-container-section-sidebar-task-client">
                  <p className="gantt-container-section-sidebar-task-client-name">
                    {fixture.client.firstname} {fixture.client.lastname}
                  </p>
                  <p className="gantt-container-section-sidebar-task-client-adress">
                    {fixture.address.street}
                  </p>
                  <p className="gantt-container-section-sidebar-task-client-p">
                    {fixture.address.nicePostcode}
                  </p>
                  <p className="gantt-container-section-sidebar-task-client-city">
                    {fixture.address.city}
                  </p>
                </div>
                <div
                  className="gantt-container-section-sidebar-task-icon"
                  onClick={() => toggleDropdown(fixture.id)}
                >
                  <img
                    src={"/images/pictos/arrow-dropdown-gantt.svg"}
                    alt={"dropdown-arrow-gantt"}
                    style={{
                      transform:
                        fixture.id === selectedDropdownId
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                    }}
                  />
                </div>
              </div>
              {fixture.id === selectedDropdownId && (
                <div className="gantt-container-section-sidebar-dropdown-content">
                  {fixture.ings.map((user) => (
                    <div
                      className="gantt-container-section-sidebar-dropdown-content-user"
                      key={user.id}
                    >
                      <div className="gantt-container-section-sidebar-dropdown-content-user-p">
                        <p>{user.firstname}</p>
                        <p>{user.lastname}</p>
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

            <div className="gantt-container-section-main-tasks project">
              <div className="gantt-container-section-main-tasks-m">
                <div
                  className="gantt-container-section-main-tasks-t"
                  style={calculateTaskStyle(fixture)}
                >
                  <div className="gantt-container-section-main-tasks-t-content">
                    <p>
                      <span>
                        {moment(fixture.startAt).format("DD/MM/YYYY")} -{" "}
                        {moment(fixture.endAt).format("DD/MM/YYYY")}
                      </span>
                      <span>
                        {fixture.type} / {fixture.reference}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {fixture.ings.map((user) => (
                <div
                  className="gantt-container-section-main-tasks-u"
                  key={user.id}
                >
                  {fixture.id === selectedDropdownId && (
                    <>
                      {user.assignments.map((assignment, index) => {
                        const { widthPercentage, taskMarginLeft } =
                          calculateWidthAndMargin(
                            assignment.startAt,
                            assignment.endAt,
                            timelineWeeks[0].start,
                            mode === "Mois" ? 250 : 750
                          );

                        const leftPosition = taskMarginLeft;
                        const taskStyle = {
                          width: `${widthPercentage}px`,
                          left: `calc(${leftPosition}px)`,
                        };

                        if (index > 0) {
                          taskStyle.marginLeft = "5px";
                        }

                        return (
                          <div
                            className="gantt-container-section-main-tasks-t"
                            key={assignment.id}
                            style={taskStyle}
                          >
                            <div className="gantt-container-section-main-tasks-t-content">
                              {moment(assignment.endAt).diff(
                                assignment.startAt,
                                "days"
                              ) <= 1 ? (
                                <>
                                  <p title={assignment.niceType}>
                                    {returnTwoFirstsCharacters(
                                      assignment.niceType
                                    )}
                                    ..
                                  </p>
                                </>
                              ) : (
                                <>
                                  <p>
                                    <span>
                                      {assignment.niceType} <br />
                                      Temps estimé :{" "}
                                      {convertToHoursAndMinutes(
                                        assignment.estimatedDuration
                                      )}
                                    </span>
                                    {!assignment.completed &&
                                      assignment.endAt <
                                        moment().format("YYYY-MM-DD") && (
                                        <img
                                          src={ExclamationIcon}
                                          alt="Validation Error"
                                          className="validation-icon"
                                          title="La date de rendu est dépassée sans que la tâche soit complétée"
                                        />
                                      )}
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GanttViewProject;
