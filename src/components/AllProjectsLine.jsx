import Icon from '../assets/pictos/arrow-left.svg';

const AllProjectsLine = (toggled) => {

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

  return (
    <div
      className="gantt-container-section-sidebar-line"
    >

      <div className="gantt-container-section-sidebar-tasks project" style={defaultStyles.sidebarProjects}>
        <div className="gantt-container-section-sidebar-task">
          <div className="gantt-container-section-sidebar-task-client">
            <p className="gantt-container-section-sidebar-task-client-name">
              All projects
            </p>
          </div>
          <div
            className="gantt-container-section-sidebar-task-icon"
          // onClick={() => toggleDropdown(project.id)}
          >
            <img
              src={Icon}
              alt={"dropdown-arrow-gantt"}
              style={{
                transform:
                  toggled
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        {toggled && (
          <div className="gantt-container-section-sidebar-dropdown-content">
            {/* {project.users.map((user) => (
              <div
                className="gantt-container-section-sidebar-dropdown-content-user"
                key={user.id}>
                <div className="gantt-container-section-sidebar-dropdown-content-user-p">
                  <p>{user.firstName}</p>
                  <p>{user.lastName}</p>
                </div>
              </div>
            ))} */}
          </div>
        )}
      </div>
      <div className="gantt-task-container" style={
        toggled ? { flexDirection: 'column', marginTop: '115px' } : { flexDirection: 'row' }
      }>
        {/* {project.tasks.map((task, index) => {
          let { width, left } = calculateTaskStyle(task)
          let marginLeftVar = index !== 0 ? previousTasks[index - 1].widthPercentage : null;
          let regex = /(?<=calc\()\d+(\.\d+)?(?=px\))/
          let finalMargin = toggled ? (parseInt(left.match(regex)) - marginLeftVar) : parseInt(left.match(regex));

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
                        {moment(task.start).format("DD/MM/YYYY")} -{" "}
                        {moment(task.end).format("DD/MM/YYYY")}
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
          )
        })} */}
      </div>
    </div>
  )
}

export default AllProjectsLine;
