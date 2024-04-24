import Icon from '../assets/pictos/arrow-left.svg';

const GanttSidebar = (props) => {

  let cardTitle = ""

  if (props.view === "project") {
    cardTitle = props.data.name
  }

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

          {props.view === "project" ? props.data.users.map((user, index) => {
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
          }) : null}
        </div>
      )}
    </div>
  )
}

export default GanttSidebar;
