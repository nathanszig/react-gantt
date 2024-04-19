import React from 'react';
import moment from "moment";
import { weekHaveTask, getWeekList } from '../assets/utils/ganttUtils';

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
                // Check if it's the first week of a new year or if the new year starts on a weekend
              const isNewYearWeek =
                (startOfWeek.isoWeekday() === 1 && startOfWeek.isoWeek() === 1) || // First week of a new year
                ((startOfWeek.isoWeekday() === 7 || startOfWeek.isoWeekday() === 6) && startOfWeek.isoWeek() === 52) // New year starts on a weekend

                console.log(isNewYearWeek)
                console.log(startOfWeek.isoWeekday())
                console.log(startOfWeek.isoWeek())

                return (
                    <div className="week-container">
                        {isNewYearWeek && (
                            <div className="new-year-message">
                                <b>{endOfWeek.format("YYYY")}</b>
                            </div>
                        )}
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
                    </div>
                );
            })}
        </div>
    )
}

export default GanttTimelineHeader;
