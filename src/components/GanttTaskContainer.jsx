import moment from "moment";
import { calculateWidthAndMargin, getWeekList } from "../assets/utils/ganttUtils";

const GanttTaskContainer = (props) => {
  const timelineWeeks = getWeekList(props.users);

  const calculateTaskStyle = (task) => {
    const { widthPercentage, taskMarginLeft } = calculateWidthAndMargin(
      task.start,
      task.end,
      timelineWeeks[0].start,
      250
    );
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
        let idStack = 1;
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
              if (i < index) idStack++;
            }
          }
        }
        let height = props.selectedDropdownId === props.project.id ? "110px" : `calc(132px / ${nbStacked})`
        let top = props.selectedDropdownId === props.project.id ? `calc(115px * ${index})` : `calc(135px / ${nbStacked} * ${idStack - 1} ${idStack > 1 ? '+ 5px' : ''})`
        return (
          <div
            className="gantt-container-section-main-tasks project"
            key={task.id}
          >
            <div className="gantt-container-section-main-tasks-m">
              <div
                className={` gantt-container-section-main-tasks-t ${stacked ? 'stacked' : ''}`}
                style={{ width: width, left: finalMargin, height: height, top: top }}
                data-line={1}
                {...(stacked && { "data-nbStacked": nbStacked, idStack: idStack })}
              >
                <div
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
