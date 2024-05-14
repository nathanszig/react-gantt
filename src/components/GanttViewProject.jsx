import React, { useCallback, useEffect, useState } from "react";
import GanttTimelineHeader from "./ganttTimelineHeader";
import GanttSidebar from "./ganttSidebar";

import { getProjects } from '../assets/utils/ganttUtils';

import { mergeStyles } from "./gantt";

import GanttTaskContainer from "./GanttTaskContainer";

const GanttViewProject = ({ customize, data, selectUser, modeMonth}) => {
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
  const [projects, setProjects] = useState([]);
  const [previousTasks, setPreviousTasks] = useState([]);
  const [selectedDropdownId, setSelectedDropdownId] = useState(null);

  const getUsers = useCallback(() => {
    setUsers(data && data.users ? data.users : []);
  }, [data]);

  useEffect(() => {
    if (users.length > 0) {
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

      <div className="gantt-container-section-sidebar">
        {projects.map((project) => (
          <div className="gantt-container-section-sidebar-line" key={project.id}>
            <GanttSidebar styleData={styles} data={project} selectedDropdownId={selectedDropdownId} toggleDropdown={toggleDropdown} view="project" selectUser={selectUser}/>
            <GanttTaskContainer users={users} selectedDropdownId={selectedDropdownId} project={project}
                                styleData={styles} previousTasks={previousTasks} modeMonth={modeMonth}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GanttViewProject;
