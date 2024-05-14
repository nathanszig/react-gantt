import React from 'react';
import moment from "moment";
import { weekHaveTask, getWeekList } from '../assets/utils/ganttUtils';

const GanttTimelineHeader = (props) => {
  const timelineWeeks = getWeekList(props.users);
  let weekIndex = 0;
  // Créer un objet où chaque clé est une année et la valeur est un tableau de semaines correspondant à cette année
  const weeksByYear = timelineWeeks.reduce((acc, week) => {
    const year = moment(week.end, "YYYY-MM-DD").year();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(week);
    return acc;
  }, {});


  return (
    <div className="gantt-container-section-timeline-header">
      {
        Object.keys(weeksByYear).map(year => (
        <div key={year} className="gantt-container-section-timeline-header-weeks">
          <div className="gantt-container-section-timeline-header-weeks-year">
            <b>{year}</b>
          </div>
          <div className="gantt-container-section-timeline-header-weeks-content">
            {weeksByYear[year].map(week => {
              const startOfWeek = moment(week.start, "YYYY-MM-DD");
              const endOfWeek = moment(week.end, "YYYY-MM-DD");
              const today = moment().startOf("day");
              const isCurrentWeek = today.isBetween(
                startOfWeek,
                endOfWeek.add(2, 'days'),
                null,
                "[]"
              );
              const isWeekHaveTask = weekHaveTask(props.users, startOfWeek, endOfWeek) || isCurrentWeek;
              const isNewYearWeek =
                (startOfWeek.isoWeekday() === 1 && startOfWeek.isoWeek() === 1) ||
                ((startOfWeek.isoWeekday() === 7 || startOfWeek.isoWeekday() === 6) && startOfWeek.isoWeek() === 52);
              weekIndex++;
              return (
                <div className="week-container" key={weekIndex}>
                  <div
                    className={`gantt-container-section-timeline-header-days ${isCurrentWeek ? "today" : ""} ${weekIndex === 1 ? "start" : weekIndex === timelineWeeks.length ? "end" : ""} ${isWeekHaveTask ? "" : "no-task"}`}
                    style={props.styleData.daysContainer}
                  >
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
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default GanttTimelineHeader;
