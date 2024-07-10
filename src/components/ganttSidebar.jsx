import Icon from '../assets/pictos/arrow-left.svg';
import { USERS } from '../assets/utils/ganttUtils';

const GanttSidebar = (props) => {
  // Define the card title based on the view
  let cardTitle = props.view === USERS ? `${props.data.firstName} ${props.data.lastName}` : props.data.name;

  // Render the user task
  const renderUserTask = (task, index) => {
    const user = task.user;
    return (
      <div
        className="gantt-container-section-sidebar-dropdown-content-user"
        key={index}
      >
        <div className="gantt-container-section-sidebar-dropdown-content-user-div">
          <div className="user-info">
            <img
              src={user.urlAvatar}
              alt={`Avatar de ${user.firstName} ${user.lastName}`}
              className={"avatar-img"}
            />
            <div className="user-info-p">
              <p onClick={() => props.selectView(user.id)}>{user.firstName} {user.lastName}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render the project
  const renderProject = (project, index) => {
    return (
      <div
        className="gantt-container-section-sidebar-dropdown-content-project"
        key={index}
      >
        <div className="gantt-container-section-sidebar-dropdown-content-project-div">
          <div className="project-info">
            <div className="project-info-p">
              <p>{project.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Return the sidebar
  return (
    <div className="gantt-container-section-sidebar-tasks project" style={props.styleData.sidebarProjects}>
      <div className="gantt-container-section-sidebar-task">
        <div className="gantt-container-section-sidebar-task-client">
          <p
            className={`gantt-container-section-sidebar-task-client-name${props.view === USERS ?'-team':''} `}
            onClick={props.view === USERS ? () => props.selectView(props.data.id) : undefined}
          >
            {cardTitle}
          </p>
        </div>
        <div
          className="gantt-container-section-sidebar-task-icon"
          onClick={() => props.toggleDropdown(props.data.id)}>
          <img
            src={Icon}
            alt={"dropdown-arrow-gantt"}
            style={{
              transform:
                props.data.id === props.selectedDropdownId
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
            }}
          />
        </div>
      </div>
      {props.data.id === props.selectedDropdownId && (
        <div className="gantt-container-section-sidebar-dropdown-content">
          {props.view !== USERS
            ? props.data.tasks.map(renderUserTask)
            : props.data.projects.map(renderProject)
          }
        </div>
      )}
    </div>
  );
};

export default GanttSidebar;
