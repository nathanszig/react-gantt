import React from 'react';
import moment from "moment";
import { weekHaveTask, getWeekList, monthHaveTask } from '../assets/utils/ganttUtils';

const GanttTimelineHeader = (props) => {
  const timelineWeeks = getWeekList(props.users);
  const modeMonth = props.modeMonth;
  let weekIndex = 0;
  let monthIndex = 0;

  // Group weeks by year
  const weeksByYear = timelineWeeks.reduce((acc, week) => {
    const year = moment(week.end, "YYYY-MM-DD").year();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(week);
    return acc;
  }, {});

  // Group months by year
  const monthsByYear = timelineWeeks.reduce((acc, week) => {
    const year = moment(week.end, "YYYY-MM-DD").year();
    const month = moment(week.end, "YYYY-MM-DD").month();
    if (!acc[year]) {
      acc[year] = [];
    }
    if (!acc[year].includes(month)) {
      acc[year].push(month);
    }
    return acc;
  }, {});

  // Return the timeline header
  return (
    <div className="gantt-container-section-timeline-header">
      {
        Object.keys(weeksByYear).map(year => (
          <div key={year} className="gantt-container-section-timeline-header-weeks">
            <div className="gantt-container-section-timeline-header-weeks-year">
              <b>{year}</b>
            </div>
            <div className="gantt-container-section-timeline-header-weeks-content">
              {modeMonth ?
                monthsByYear[year].map((month, index) => {
                  const monthStart = moment().year(year).month(month).startOf('month');
                  const monthEnd = moment().year(year).month(month).endOf('month');
                  const today = moment().startOf("day");
                  const isCurrentMonth = today.isBetween(
                    monthStart,
                    monthEnd.add(1, 'day'),
                    null,
                    "[]"
                  );
                  const isMonthHaveTask = monthHaveTask(props.users, monthStart, monthEnd) || isCurrentMonth;
                  const isStart = index === 0 && Object.keys(monthsByYear).indexOf(year) === 0;
                  // si index = length - 1 et year est a la fin de weeksByYear alors c'est la dernière semaine du gantt
                  const isEnd = index === monthsByYear[year].length - 1 && Object.keys(monthsByYear).indexOf(year) === Object.keys(monthsByYear).length - 1;
                  monthIndex++;
                  return (
                    <div className="month-container" key={monthIndex}>
                      <div
                        className={`gantt-container-section-timeline-header-month ${isCurrentMonth ? "today" : ""} ${isStart ? 'start' : isEnd ? 'end' : ''} ${isMonthHaveTask ? "" : "no-task"}`}
                        id={`month-${monthIndex}`}
                        name='month'
                        style={props.styleData.daysContainer}
                      >
                        {isCurrentMonth ? (
                          <div className="todayDiv">
                            <p className="todayText"><b>Today</b></p>
                            <p className="monthDate">
                              {monthStart.format("MMMM")}
                            </p>
                          </div>
                        ) : (
                          <p className="monthDate">
                            {monthStart.format("MMMM")}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                }) :
                weeksByYear[year].map((item, index) => {
                  const startOfWeek = moment(item.start, "YYYY-MM-DD");
                  const endOfWeek = moment(item.end, "YYYY-MM-DD");
                  const today = moment().startOf("day");
                  const isCurrentWeek = today.isBetween(
                    startOfWeek,
                    endOfWeek.add(2, 'days'),
                    null,
                    "[]"
                  );

                  const isWeekHaveTask = weekHaveTask(props.users, startOfWeek, endOfWeek) || isCurrentWeek;
                  // si index = 0 et index de year dans weeksByYear est 0 alors c'est la première semaine du gantt
                  const isStart = index === 0 && Object.keys(weeksByYear).indexOf(year) === 0;
                  // si index = length - 1 et year est a la fin de weeksByYear alors c'est la dernière semaine du gantt
                  const isEnd = index === weeksByYear[year].length - 1 && Object.keys(weeksByYear).indexOf(year) === Object.keys(weeksByYear).length - 1;
                  weekIndex++;

                  return (
                    <div className="week-container" key={weekIndex}>
                      <div
                        className={`gantt-container-section-timeline-header-days ${isCurrentWeek ? "today" : ""} ${isStart ? "start" : isEnd ? "end" : ""} ${isWeekHaveTask ? "" : "no-task"}`}
                        id={`week-${weekIndex}`}
                        name='week'
                        style={props.styleData.daysContainer}
                      >
                        {isCurrentWeek ? (
                          <div className="todayDiv">
                            <p className="todayText"><b>Today</b></p>
                            <p className="weekDate">
                              {moment(item.start).format("DD MMMM")} -{" "}
                              {moment(item.end).format("DD MMMM")}
                            </p>
                          </div>
                        ) : (
                          <p className="weekDate">
                            {moment(item.start).format("DD MMMM")} -{" "}
                            {moment(item.end).format("DD MMMM")}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default GanttTimelineHeader;
