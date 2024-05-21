import Icon from '../assets/pictos/arrow-left.svg';
import {TEAM} from '../assets/utils/ganttUtils';

const GanttSidebar = (props) => {
  0
  // Déterminer le titre en fonction de la vue
  let cardTitle = props.view === TEAM ? `${props.data.firstName} ${props.data.lastName}` : props.data.name;

  return (
    <div className="gantt-container-section-sidebar-tasks project" style={props.styleData.sidebarProjects}>
      <div className="gantt-container-section-sidebar-task">
        <div className="gantt-container-section-sidebar-task-client">
          <p className="gantt-container-section-sidebar-task-client-name">
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
          {props.view !== TEAM ? props.data.tasks.map((task, index) => {
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
                      <p onClick={()=>props.selectUser(user.id)}>{user.firstName} {user.lastName}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }) : props.data.tasks.map((task, index) => {
            console.log('--------------------')
            console.log(props.view)
            console.log(props.data)
            const project = task.project;
            const user = props.data;
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
                      <p>{project.name}</p>
                    </div>
                  </div>
                  <div className="task-info">
                    <p>{task.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default GanttSidebar;
