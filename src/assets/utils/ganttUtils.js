import moment from 'moment';
import {getDurationInDays, getDurationInWeeks, numberOfWeeksInMonth, weekIndexInMonth} from './dateUtils';

export const PROJECT = "project";
export const PERSO = "perso";
export const USERS = "users";

export const calculateWidthAndMargin = (startDate, endDate, firstWeekStartDate, width, modeMonth) => {
  return modeMonth
    ? calculateMonthWidthAndMargin(startDate, endDate, firstWeekStartDate, width)
    : calculateWeekWidthAndMargin(startDate, endDate, firstWeekStartDate, width);
}

export const calculateWeekWidthAndMargin = (startDate, endDate, firstWeekStartDate, width) => {
  const widthPercentage = calculateWeekTaskWidth(startDate, endDate, width);
  const taskMarginLeft = calculateWeekTaskMarginLeft(startDate, firstWeekStartDate, width);
  return { widthPercentage, taskMarginLeft };
};

export const calculateMonthWidthAndMargin = (startDate, endDate, firstWeekStartDate, width) => {
  const widthPercentage = calculateMonthTaskWidth(startDate, endDate, width);
  const taskMarginLeft = calculateMonthTaskMarginLeft(startDate, firstWeekStartDate, width);
  return { widthPercentage, taskMarginLeft };
};

export const calculateWeekTaskWidth = (startDate, endDate, width) => {
  const startDateMoment = moment(startDate);
  const durationInDays = getDurationInDays(startDate, endDate);
  // with moment.js calcul number of days between startDate and endDate without weekends
  let marginDays = 0;
  for (let i = 0; i < durationInDays; i++) {
    const currentDate = startDateMoment.clone().add(i, 'days');
    if (currentDate.day() !== 0 && currentDate.day() !== 6) {
      marginDays++;
    }
  }
  return marginDays !== 1 ? (marginDays+1) * 50 : width;
}

export const calculateWeekTaskMarginLeft = (startDate, firstWeekStartDate) => {
  const startDateMoment = moment(startDate);
  const firstWeekStartDateMoment = moment(firstWeekStartDate).startOf('isoWeek').format('YYYY-MM-DD');
  let marginDays = 0;
  const totalDays = getDurationInDays(firstWeekStartDate, startDate);
  for (let i = 0; i < totalDays; i++) {
    const currentDate = startDateMoment.clone().subtract(i, 'days');
    if (currentDate.day() !== 0 && currentDate.day() !== 6) {
      marginDays++;
    }
    if (currentDate.format('YYYY-MM-DD') === firstWeekStartDateMoment) {
      marginDays--;
    }
  }
  const marginWithoutWeekends = marginDays * 51;
  return `${marginWithoutWeekends}`;
}

export const calculateMonthTaskWidth = (startDate, endDate, width) => {
  const startDateMoment = moment(startDate);
  const totalWeeks = getDurationInWeeks(startDate, endDate);

  // calcul du nombre de mois dans la tâche
  const months = [];
  for (let i = 0; i < totalWeeks; i++) {
    const currentDate = startDateMoment.clone().add(i, 'weeks');
    const currentMonth = currentDate.format('YYYY-MM');
    if (!months.includes(currentMonth)) {
      months.push(currentMonth);
    }
  }

  // pour chaque mois on calcul le nombre de semaine pour définir la taille d'une semaine
  // puis on multiplie cette taille par le nombre de semaine de cette tâche dans le mois
  let totalWidth = 0;
  for (let m = 0; m < months.length; m++) {
    const month = months[m];
    const monthWeeks = numberOfWeeksInMonth(moment(month));
    const widthPerWeek = width / monthWeeks;
    const weeksInMonth = [];
    for (let w = 0; w < totalWeeks; w++) {
      const week = startDateMoment.clone().add(w, 'weeks');
      if (week.format('YYYY-MM') === month) {
        weeksInMonth.push(week);
      }
    }
    /*if (startDate === '12/25/2024') {
      // console log de months et months.length + widthPerWeek + width + monthWeeks + totalWidth avec leur label respectif
      console.log('totalWeek', totalWeeks);
      console.log('months', months);
      console.log('months.length', months.length);
      console.log('widthPerWeek', widthPerWeek);
      console.log('width', width);
      console.log('monthWeeks', monthWeeks);
      console.log('totalWidth', totalWidth);
    }*/
    totalWidth += weeksInMonth.length * widthPerWeek;
  }


  // on ajoute 3px de marge entre chaque mois
  return totalWidth + (months.length-1) * 3;
}

export const calculateMonthTaskMarginLeft = (startDate, firstWeekStartDate, width) => {
  const timelineHeaderGap = window.getComputedStyle(document.querySelector('.gantt-container-section-timeline-header')).getPropertyValue('gap');
  const indexTaskFirstWeek = weekIndexInMonth(startDate);
  const numberOfMonth = moment(startDate).startOf('month').diff(moment(firstWeekStartDate).startOf('month'), 'months', true);
  const numberOfWeeks = numberOfWeeksInMonth(startDate);

  const marginPerWeek = width / numberOfWeeks;
  const monthWidth = numberOfMonth * (width + parseInt(timelineHeaderGap, 10));

  return monthWidth + ((indexTaskFirstWeek-1) * marginPerWeek);
}

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

  export const excludeAttribute = (obj, attributeToExclude) => {
     const { [attributeToExclude]: excludedAttribute, ...rest } = obj;
     return rest;
  }

  export const removeProjectAllProjects = (data) => {
    const users = data.users.map(user => {
      user.tasks = user.tasks.filter(task => task.project.id !== 'allProjects');
      return user;
    });
    return { users };
  }

