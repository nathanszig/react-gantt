import moment from 'moment';

export const getDurationInDays = (startAt, endAt, firstWeekStartDate) => {
  const startDate = new Date(startAt);
  const endDate = new Date(endAt);
  let differenceInTime = endDate.getTime() - startDate.getTime();
  return Math.round(differenceInTime / (1000 * 3600 * 24));
}

export const calculateTaskMarginLeft = (startDate, firstWeekStartDate, width) => {
  const startDateMoment = moment(startDate);
  const firstWeekStartDateMoment = moment(firstWeekStartDate).startOf('isoWeek').format('YYYY-MM-DD');
  let marginDays = 0;
  const totalDays = getDurationInDays(firstWeekStartDate, startDate, firstWeekStartDate);
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

export const calculateWidthAndMargin = (startDate, endDate, firstWeekStartDate, width) => {
  const startDateMoment = moment(startDate);
  const durationInDays = getDurationInDays(startDate, endDate, firstWeekStartDate);
  // with moment.js calcul number of days between startDate and endDate without weekends
  let marginDays = 0;
  for (let i = 0; i < durationInDays; i++) {
    const currentDate = startDateMoment.clone().add(i, 'days');
    if (currentDate.day() !== 0 && currentDate.day() !== 6) {
      marginDays++;
    }
  }
  const widthPercentage = marginDays !== 1 ? (marginDays+1) * 50 : width;
  const taskMarginLeft = calculateTaskMarginLeft(startDate, firstWeekStartDate, width);
  return { widthPercentage, taskMarginLeft };
};

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