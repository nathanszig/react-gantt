import React, {useCallback, useEffect, useState} from 'react';
import moment from 'moment';
import GanttTimelineHeader from "./ganttTimelineHeader";
import GanttSidebar from "./ganttSidebar";
import GanttTaskContainer from "./GanttTaskContainer";

import {calculateWidthAndMargin, createAllProject, getProjects, TEAM} from '../assets/utils/ganttUtils';
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

  useEffect(() => {
    if (users.length > 0) {
      console.log('setusers')
      setUsers(users.map(user => createAllProject(user)));
    }
    setPreviousTasks([]);
  }, [users])


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
        <div className="gantt-container-section-sidebar-line">
          <GanttSidebar styleData={styles} data={users} selectedDropdownId={selectedDropdownId} toggleDropdown={toggleDropdown} view={TEAM} selectUser={selectUser}/>
        </div>
      </div>
    </section>
  );

}

export default GanttViewTeam;
