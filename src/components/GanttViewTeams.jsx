import React, {useCallback, useEffect, useState} from 'react';

import GanttTimelineHeader from "./ganttTimelineHeader";
import GanttSidebar from "./ganttSidebar";
import GanttTaskContainer from "./GanttTaskContainer";

import {createAllProject,transformUsersData,TEAM} from '../assets/utils/ganttUtils';
import { mergeStyles } from "./gantt";

const GanttViewTeam = ({ customize, data, selectUser, modeMonth }) => {
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

  const [users, setUsers] = useState(data);
  const [previousTasks, setPreviousTasks] = useState([]);
  const [selectedDropdownId, setSelectedDropdownId] = useState(null);

  const getUsers = useCallback(() => {
    setUsers(null);
    setUsers(data.map(userData => createAllProject(userData)));
  }, [data]);

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
        {transformUsersData(users).map((user) => (
          <div className="gantt-container-section-sidebar-line" key={user.id}>
            <GanttSidebar styleData={styles} data={user} selectedDropdownId={selectedDropdownId}
                          toggleDropdown={toggleDropdown} view={TEAM} selectUser={selectUser}/>
          </div>
        ))}
      </div>
    </section>
  );

}

export default GanttViewTeam;
