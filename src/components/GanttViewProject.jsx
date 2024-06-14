import React, { useCallback, useEffect, useState } from "react";
import GanttTimelineHeader from "./ganttTimelineHeader";
import GanttSidebar from "./ganttSidebar";
import GanttTaskContainer from "./GanttTaskContainer";
import { getProjects, PROJECTS } from '../assets/utils/ganttUtils';
import { mergeStyles } from "./gantt";
import { colors, convertHexToRGBA } from '../constants/colors'

const GanttViewProject = ({ customize, data, selectView, modeMonth }) => {
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

  const baseStyles = mergeStyles(defaultStyles, customize);

  // Function to generate dynamic styles for each project
  const getDynamicStyles = (project) => {
    console.log(project);
    const dynamicStyles = {
      sidebarProjects: {
        background: colors[project.color],
      }
    };
    const style = mergeStyles(baseStyles, dynamicStyles);
    console.log(style);
    return style;
  };

  // Render the project
  return (
    <section className="gantt-container-section">
      <div className="gantt-container-section-timeline">
        <GanttTimelineHeader users={users} styleData={baseStyles} modeMonth={modeMonth} />
      </div>
      <div className="gantt-container-section-sidebar">
        {projects.map((project) => (
          <div className="gantt-container-section-sidebar-line" key={project.id}>
            <GanttSidebar styleData={getDynamicStyles(project)} data={project} selectedDropdownId={selectedDropdownId}
              toggleDropdown={toggleDropdown} view={PROJECTS} selectView={selectView} />
            <GanttTaskContainer users={users} selectedDropdownId={selectedDropdownId} project={project}
              styleData={baseStyles} previousTasks={previousTasks} modeMonth={modeMonth} view={PROJECTS} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GanttViewProject;
