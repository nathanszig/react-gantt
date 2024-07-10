import React, { useCallback, useEffect, useState } from "react";
import GanttTimelineHeader from "./ganttTimelineHeader";
import GanttSidebar from "./ganttSidebar";

import {createAllProject, getProjects, SINGLE_USER} from '../assets/utils/ganttUtils';

import { mergeStyles } from "./gantt";

import GanttTaskContainer from "./GanttTaskContainer";

const GanttViewPerso = ({ customize, data, selectView, modeMonth }) => {
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

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(data.users[0]);
  const [projects, setProjects] = useState([]);
  const [previousTasks, setPreviousTasks] = useState([]);
  const [selectedDropdownId, setSelectedDropdownId] = useState(null);

  const getUsers = useCallback(() => {
    setUsers(data && data.users ? data.users : []);
  }, [data]);

  useEffect(() => {
    if (users.length > 0) {
      setUser(createAllProject(user));
      setProjects(getProjects(users))
    }
  }, [users])

  useEffect(() => {
    getUsers();
    setPreviousTasks([]);
  }, [getUsers]);

  // Toggle the dropdown
  const toggleDropdown = (id) => {
    if (selectedDropdownId === id) {
      setSelectedDropdownId(null);
    } else {
      setSelectedDropdownId(id);
    }
  };

  const styles = mergeStyles(defaultStyles, customize);

  // Render the project
  return (
    <section className="gantt-container-section">
      <div className="gantt-container-section-timeline">
        <GanttTimelineHeader users={users} styleData={styles} modeMonth={modeMonth}/>
      </div>
      <div className={"gantt-perso-info"}>
        <img
          src={user.urlAvatar}
          alt={`Avatar de ${user.firstName} ${user.lastName}`}
          className={"avatar-img"}
        />
        <p className={"gantt-perso-info-name"}>{user.firstName} {user.lastName}</p>
      </div>
      <div className="gantt-container-section-sidebar">
        {projects.map((project) => (
          <div className="gantt-container-section-sidebar-line" key={project.id}>
            <GanttSidebar styleData={styles} data={project} selectedDropdownId={selectedDropdownId}
                          toggleDropdown={toggleDropdown} view={SINGLE_USER} selectView={selectView}/>
            <GanttTaskContainer users={users} selectedDropdownId={selectedDropdownId} project={project}
                          styleData={styles} previousTasks={previousTasks} modeMonth={modeMonth} view={SINGLE_USER}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GanttViewPerso;
