import moment from 'moment';
import {getDurationInDays, getDurationInWeeks, numberOfWeeksInMonth, weekIndexInMonth} from './dateUtils';

export const PROJECT = "project";
export const PERSO = "perso";
export const TEAM = "team";

moment.updateLocale('fr', {
  week: {
    dow: 1
  }
});

// Redirect to the corresponding function to calculate the width and margin of a task
export const calculateWidthAndMargin = (startDate, endDate, firstWeekStartDate, width, modeMonth) => {
  return modeMonth
    ? calculateMonthWidthAndMargin(startDate, endDate, firstWeekStartDate, width)
    : calculateWeekWidthAndMargin(startDate, endDate, firstWeekStartDate, width);
}

// Call function to calculate width and margin of a task for a week
export const calculateWeekWidthAndMargin = (startDate, endDate, firstWeekStartDate, width) => {
  const widthPercentage = calculateWeekTaskWidth(startDate, endDate, width);
  const taskMarginLeft = calculateWeekTaskMarginLeft(startDate, firstWeekStartDate, width);
  return { widthPercentage, taskMarginLeft };
};

// Call function to calculate width and margin of a task for a month
export const calculateMonthWidthAndMargin = (startDate, endDate, firstWeekStartDate, width) => {
  const widthPercentage = calculateMonthTaskWidth(startDate, endDate, width);
  const taskMarginLeft = calculateMonthTaskMarginLeft(startDate, firstWeekStartDate, width);
  return { widthPercentage, taskMarginLeft };
};

// Calculate the width of a task for a week
export const calculateWeekTaskWidth = (startDate, endDate, width) => {
  const startDateMoment = moment(startDate);
  const durationInDays = getDurationInDays(startDate, endDate);
  // with moment.js calcul number of days between startDate and endDate without weekends
  let marginDays = 0;
  for (let i = 0; i < durationInDays; i++) {
    const currentDate = startDateMoment.clone().add(i, 'days');
    if (currentDate.day() !== 5 && currentDate.day() !== 6) {
      marginDays++;
    }
  }
  return marginDays !== 1 ? (marginDays+1) * 50 : width;
}

// Calculate the margin of a task for a week
export const calculateWeekTaskMarginLeft = (startDate, firstWeekStartDate) => {
  const startDateMoment = moment(startDate);
  const firstWeekStartDateMoment = moment(firstWeekStartDate).startOf('isoWeek').format('YYYY-MM-DD');
  let marginDays = 0;
  const totalDays = getDurationInDays(firstWeekStartDate, startDate);
  for (let i = 0; i < totalDays; i++) {
    const currentDate = startDateMoment.clone().subtract(i, 'days');
    if (currentDate.day() !== 5 && currentDate.day() !== 6) {
      marginDays++;
    }
    if (currentDate.format('YYYY-MM-DD') === firstWeekStartDateMoment) {
      marginDays--;
    }
  }
  const marginWithoutWeekends = marginDays * 51;
  return `${marginWithoutWeekends}`;
}

// Calculate the width of a task for a month
export const calculateMonthTaskWidth = (startDate, endDate, width) => {
  const startDateMoment = moment(startDate);
  const totalWeeks = getDurationInWeeks(startDate, endDate);
  const allWeeks = [];
  // calcul du nombre de mois dans la tâche
  const months = [];

  for (let i = 0; i < totalWeeks; i++) {
    const currentDate = startDateMoment.clone().add(i, 'weeks');
    allWeeks.push(currentDate.clone().startOf('week').format('YYYY-MM-DD'));
    let currentMonth = currentDate.format('YYYY-MM');
    if (currentDate <= moment(endDate)) {
      if (!months.includes(currentMonth)) {
        months.push(currentMonth);
      }
    } else {
      currentMonth = moment(endDate).format('YYYY-MM');
      if (!months.includes(currentMonth)) {
        months.push(currentMonth);
      }
    }

  }
  // trier les mois par ordre croissant
  months.sort((a, b) => moment(a).isBefore(b) ? -1 : 1);

  // pour chaque mois on calcul le nombre de semaine pour définir la taille d'une semaine
  // puis on multiplie cette taille par le nombre de semaine de cette tâche dans le mois
  let totalWidth = 0;

  for (let m = 0; m < months.length; m++) {
    let weeksInMonth = 0;
    let widthPerWeek = 0;
    const month = months[m];
    const monthWeeks = numberOfWeeksInMonth(moment(month));


    // Pour chaque semaine, vérifions si elle est dans le mois en cours
    for (let i = 0; i < allWeeks.length; i++) {
      if (moment(allWeeks[i]).format('YYYY-MM') === month) {
        weeksInMonth++;
      }
    }
    if (weeksInMonth >  monthWeeks) {
       widthPerWeek = width / weeksInMonth;
    } else {
       widthPerWeek = width / monthWeeks;
    }
    totalWidth += weeksInMonth * widthPerWeek;
  }


  // on ajoute 3px de marge entre chaque mois
  return totalWidth + ((months.length-1) * 3);
}

// Calculate the margin of a task for a month
export const calculateMonthTaskMarginLeft = (startDate, firstWeekStartDate, width) => {
  const timelineHeaderGap = window.getComputedStyle(document.querySelector('.gantt-container-section-timeline-header')).getPropertyValue('gap');
  const indexTaskFirstWeek = weekIndexInMonth(startDate);
  const numberOfMonth = moment(startDate).startOf('month').diff(moment(firstWeekStartDate).startOf('month'), 'months', true);
  const numberOfWeeks = numberOfWeeksInMonth(startDate);

  const marginPerWeek = width / numberOfWeeks;
  const monthWidth = numberOfMonth * (width + parseInt(timelineHeaderGap, 10));

  return monthWidth + ((indexTaskFirstWeek-1) * marginPerWeek);
}

// Check if a week has tasks
export const weekHaveTask = (users, startOfWeek, endOfWeek) => {
    users.some((user) =>
        user.tasks.some((task) =>
            moment(task.start).isBetween(startOfWeek, endOfWeek, null, "[]") ||
            moment(task.end).isBetween(startOfWeek, endOfWeek, null, "[]") ||
            moment(task.start).isBefore(startOfWeek) && (moment(task.end).isAfter(endOfWeek)) ||
            moment(task.start).isBefore(startOfWeek) && moment(task.end).isBetween(startOfWeek, endOfWeek, null, "[]") ||
            moment(task.start).isBetween(startOfWeek, endOfWeek, null, "[]") && moment(task.end).isAfter(endOfWeek)
        )
    );
}

// Check if a month has tasks
export const monthHaveTask = (users, startOfMonth, endOfMonth) => {
    users.some((user) =>
        user.tasks.some((task) =>
            moment(task.start).isBetween(startOfMonth, endOfMonth, null, "[]") ||
            moment(task.end).isBetween(startOfMonth, endOfMonth, null, "[]") ||
            moment(task.start).isBefore(startOfMonth) && (moment(task.end).isAfter(endOfMonth)) ||
            moment(task.start).isBefore(startOfMonth) && moment(task.end).isBetween(startOfMonth, endOfMonth, null, "[]") ||
            moment(task.start).isBetween(startOfMonth, endOfMonth, null, "[]") && moment(task.end).isAfter(endOfMonth)
        )
    );
}

// Get the list of weeks between the start and end date of the tasks
export const getWeekList = (users) => {
    const startDate = moment.min(
        users.map((user) =>
            user.tasks.map((task) =>
                moment(task.start)
            )
        ).flat()
    );

    const endDate = moment.max(
        users.flatMap((user) => {
          return user.tasks.map((task) => {
            return moment(task.end);
          });
        })
    );

    const weekList = [];
    let currentWeek = startDate.clone().startOf("isoWeek");
    while (currentWeek.isBefore(endDate)) {
      const endWeek = currentWeek.clone().add(4, "days");
      weekList.push({
        start: currentWeek.format("YYYY-MM-DD"),
        end: endWeek.format("YYYY-MM-DD"),
      });
      currentWeek.add(7, "days");
    }
    return weekList;
  };

// Sort projects by chronological order
export const sortProjectByChronologicalOrder = (projects) => {
    function getProjectDateRange(project) {
      const startDates = project.tasks.map(task => new Date(task.start).getTime());
      const endDates = project.tasks.map(task => new Date(task.end).getTime());
      const startDate = new Date(Math.min(...startDates));
      const endDate = new Date(Math.max(...endDates));
      return { startDate, endDate };
    }

    function compareProjects(a, b) {
      // if id of the project is allProjects, it should be at the start
      if (a.id === 'allProjects') return -1;
      if (b.id === 'allProjects') return 1;

      const dateRangeA = getProjectDateRange(a);
      const dateRangeB = getProjectDateRange(b);

      if (dateRangeA.startDate < dateRangeB.startDate) {
        return -1;
      } else if (dateRangeA.startDate > dateRangeB.startDate) {
        return 1;
      } else {
        // If start dates are the same, sort based on end date
        if (dateRangeA.endDate < dateRangeB.endDate) {
          return -1;
        } else if (dateRangeA.endDate > dateRangeB.endDate) {
          return 1;
        } else {
          return 0;
        }
      }
    }

    const sortedProjects = [...projects].sort(compareProjects);
    // Sort tasks within each project
    sortedProjects.forEach(project => {
      project.tasks.sort((a, b) => new Date(a.start) - new Date(b.start));
    });

    return sortedProjects;
  }

// Get all the projects of the users
export const getProjects = (users) => {
  const projectsMap = [];
  users.forEach((user) =>
      user.tasks.forEach((task) => {
        const project = task.project;
        const projectId = project.id;
        const taskId = task.id;
        const projectIndex = projectsMap.findIndex((p) => p.id === projectId);
        task.user = excludeAttribute(user, 'tasks');
        if (projectIndex === -1) {
          projectsMap.push({
            id: projectId,
            name: project.name,
            tasks: [task],
            users: [user]
          });
        } else {
          const taskIndex = projectsMap[projectIndex].tasks.findIndex((t) => t.id === taskId);
          const userIndex = projectsMap[projectIndex].users.findIndex((u) => u.id === user.id);
          if (taskIndex === -1) {
            projectsMap[projectIndex].tasks.push(task);
            if (userIndex === -1) {
                projectsMap[projectIndex].users.push(user);
            }
          }
        }
      })
  );
  return sortProjectByChronologicalOrder(projectsMap);
}

// Exclude an attribute from an object
export const excludeAttribute = (obj, attributeToExclude) => {
   const { [attributeToExclude]: excludedAttribute, ...rest } = obj;
   return rest;
}

// Create a project called "All Projects" that contains all the tasks of the user
export const createAllProject = (user) => {
user.tasks.forEach((task, index) => {
  const newTask = {
    id: user.tasks.length + index,
    name: task.project.name + ' - ' + task.name,
    start: task.start,
    end: task.end,
    description : task.description,
    taskImgUrl: task.taskImgUrl,
    project : {
      name : "All Projects",
      id : 'allProjects'
    }
  }
  user.tasks.push(newTask);
});
return user;
}

// Remove the project "All Projects" from the user's tasks
export const removeProjectAllProjects = (data) => {
  const users = data.users.map(user => {
    user.tasks = user.tasks.filter(task => task.project.id !== 'allProjects');
    return user;
  });
  return { users };
}

// Transform the users data to an other format where tasks are grouped by project
export const transformUsersData = (users) => {
  return users.map(user => {
    // Create a projects map to aggregate tasks under the same project
    const projectsMap = {};
    user.tasks.forEach(task => {
      const projectId = task.project.id;
      const projectName = task.project.name;
      if (!projectsMap[projectId]) {
        projectsMap[projectId] = {
          id: projectId,
          name: projectName,
          tasks: []
        };
      }
      projectsMap[projectId].tasks.push({
        id: task.id,
        name: task.name,
        start: task.start,
        end: task.end,
        description: task.description,
        taskImgUrl: task.taskImgUrl
      });
    });

    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      urlAvatar: user.urlAvatar,
      projects: Object.values(projectsMap)
    };
  });
};
