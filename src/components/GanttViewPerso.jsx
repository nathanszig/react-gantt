import React, { useCallback, useEffect, useState } from "react";
import GanttTimelineHeader from "./ganttTimelineHeader";
import GanttSidebar from "./ganttSidebar";

import {createAllProject, getProjects, PERSO, TEAM} from '../assets/utils/ganttUtils';

import { mergeStyles } from "./gantt";

import GanttTaskContainer from "./GanttTaskContainer";

const GanttViewPerso = ({ customize, data, selectUser, modeMonth }) => {
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

  const toggleDropdown = (id) => {
    if (selectedDropdownId === id) {
      setSelectedDropdownId(null);
    } else {
      setSelectedDropdownId(id);
    }
  };

  const styles = mergeStyles(defaultStyles, customize);

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
                          toggleDropdown={toggleDropdown} view={PERSO} selectUser={selectUser}/>
            <GanttTaskContainer users={users} selectedDropdownId={selectedDropdownId} project={project}
                          styleData={styles} previousTasks={previousTasks} modeMonth={modeMonth} view={PERSO}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GanttViewPerso;
