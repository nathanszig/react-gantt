import moment from "moment";
import {
  calculateWidthAndMargin,
  getWeekList
} from "../assets/utils/ganttUtils";
import {useEffect, useRef, useState} from "react";

const GanttTaskContainer = (props) => {

  const [timelineWidth, setTimelineWidth] = useState(null);
  const timelineWeeks = getWeekList(props.users);
  const modeMonth = props.modeMonth;
  const stackedRef = useRef(null);

  useEffect(() => {
    const updateWidths = () => {
      if (modeMonth) {
        const monthDiv = document.getElementsByName('month')[1];
        if (monthDiv) {
          setTimelineWidth(monthDiv.offsetWidth);
        }
      } else {
        const weekDiv = document.getElementsByName('week')[1];
        if (weekDiv) {
          setTimelineWidth(weekDiv.offsetWidth);
        }
      }
    };
    updateWidths();
    window.addEventListener('resize', updateWidths); // Update widths on resize
    return () => window.removeEventListener('resize', updateWidths); // Clean up the event listener
  }, [modeMonth]);

  const calculateTaskStyle = (task) => {
    const { widthPercentage, taskMarginLeft } = calculateWidthAndMargin(task.start,task.end,timelineWeeks[0].start, timelineWidth,modeMonth)
    props.previousTasks.push({ widthPercentage, taskMarginLeft });
    return {
      width: `${widthPercentage}px`,
      left: `calc(${taskMarginLeft}px)`,
    };
  };

  return (
    <div
      className="gantt-task-container"
      style={
        props.selectedDropdownId === props.project.id
          ? { flexDirection: "column", marginTop: "150px" }
          : { flexDirection: "row" }
      }
    >
      {props.project.tasks.map((task, index) => {
        let { width, left } = calculateTaskStyle(task);
        let regex = /(?<=calc\()\d+(\.\d+)?(?=px\))/;
        let finalMargin =
          props.selectedDropdownId === props.project.id
            ? parseInt(left.match(regex))
            : parseInt(left.match(regex));

        // Vérifier si cette tâche se chevauche avec une autre tâche dans le même projet
        let stacked = false;
        let nbStacked = 1;
        let idstack = 1;
        for (let i = 0; i < props.project.tasks.length; i++) {
          if (i !== index) {
            let otherTask = props.project.tasks[i];
            if (
              (moment(task.start).isBetween(otherTask.start, otherTask.end) ||
                moment(task.end).isBetween(otherTask.start, otherTask.end)) ||
              (moment(otherTask.start).isBetween(task.start, task.end) ||
                moment(otherTask.end).isBetween(task.start, task.end))
            ) {
              stacked = true;
              nbStacked++;
              if (i < index) idstack++;
            }
          }
        }
        let height = props.selectedDropdownId === props.project.id ? "110px" : `calc(132px / ${nbStacked})`
        let top = props.selectedDropdownId === props.project.id ? `calc(115px * ${index})` : `calc(135px / ${nbStacked} * ${idstack - 1} ${idstack > 1 ? '+ 5px' : ''})`

        /* - Pour le mode semaine on ajoute la classe truncated si la width du container est plus petite que la width de la tâche
           - Cette classe permet au hover de la tâche de s'afficher en entier
           - La taille minimum étant de 1 semaine ce problème n'arrive pas en mode mois
           - Si on passe en mode mois on enlève la classe truncated  si elle est présente
         */
        useEffect(() => {
            if (stackedRef && stackedRef.current) {
              if (stackedRef.current.offsetWidth > parseInt(width.match(/\d+/)) && !modeMonth) {
                stackedRef.current.classList.add('truncated');
              }
            }
            modeMonth && stackedRef.current.classList.contains('truncated') ? stackedRef.current.classList.remove('truncated') : null;
        }, [stackedRef, modeMonth]);

        return (
          <div
            className="gantt-container-section-main-tasks project"
            key={task.id}
          >
            <div className="gantt-container-section-main-tasks-m">
              <div
                className={` gantt-container-section-main-tasks-t ${stacked ? 'stacked' : ''}`}
                style={{ width: width, left: finalMargin, height: height, top: top }}
              >
                <div
                  ref={stackedRef}
                  className="gantt-container-section-main-tasks-t-content"
                  style={props.styleData.taskContainer}
                >
                  <p>
                    <span>
                      {moment(task.start, "MM/DD/YYYY").format("DD/MM/YYYY")} -{" "}
                      {moment(task.end, "MM/DD/YYYY").format("DD/MM/YYYY")}
                    </span>
                  </p>
                  <p className="title">{task.name}</p>
                  <p className="description">{task.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GanttTaskContainer;
