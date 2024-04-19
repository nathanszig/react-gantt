import React from 'react';
import moment from "moment";
import {weekHaveTask, getWeekList} from '../assets/utils/ganttUtils';

const GanttTimelineHeader = (props) => {
    
    const timelineWeeks = getWeekList(props.users);

    return (
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
              const isWeekHaveTask = weekHaveTask(props.users, startOfWeek, endOfWeek) || isCurrentWeek;
              return (
                  <div
                      className={`gantt-container-section-timeline-header-days ${isCurrentWeek ? "today" : ""} ${index === 0 ? "start" : index === timelineWeeks.length - 1 ? "end" : ""} ${isWeekHaveTask ? "" : "no-task"}`}
                      key={index}
                      style={props.styleData.daysContainer}>
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
    )
}

export default GanttTimelineHeader;
