import React, {useEffect, useState} from 'react';

import GanttTimelineHeader from "./ganttTimelineHeader";
import GanttSidebar from "./ganttSidebar";
import GanttTaskContainer from "./GanttTaskContainer";

import {transformUsersData,USERS} from '../assets/utils/ganttUtils';
import { mergeStyles } from "./gantt";

const GanttViewTeam = ({ customize, data, selectView, modeMonth }) => {
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
    setPreviousTasks([]);
  }, []);

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
        <GanttTimelineHeader users={data} styleData={styles} modeMonth={modeMonth}/>
      </div>

      <div className="gantt-container-section-sidebar">
        {
          transformUsersData(data).map((user) => (
              <div className="gantt-container-section-sidebar-line" key={user.id}>
                <GanttSidebar styleData={styles} data={user} selectedDropdownId={selectedDropdownId}
                      toggleDropdown={toggleDropdown} view={USERS} selectView={selectView}/>
                <GanttTaskContainer users={users} selectedDropdownId={selectedDropdownId} user={user}
                      styleData={styles} previousTasks={previousTasks} modeMonth={modeMonth} view={USERS}/>
              </div>
            ))
        }
      </div>
    </section>
  );

}

export default GanttViewTeam;
