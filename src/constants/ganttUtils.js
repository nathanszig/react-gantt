import moment from 'moment';

export const constants = {
  ExclamationIcon: '/images/pictos/warning.svg',
  ArrowLeft: '/images/pictos/arrowGanttLeft.svg',
  ArrowRight: '/images/pictos/arrowGanttRight.svg',
};

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
  const marginWithoutWeekends = marginDays * 50;
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

export const fakeData = {
    "users": [
        {
            "id": 1,
            "firstName" : "Benjamin",
            "lastName": "Burstein",
            "urlAvatar": "",
            "tasks" : [
                {
                    "id": 1,
                    "project": {
                        "name": "project1",
                        "id": 1
                    },
                    "name": "task3",
                    "start": "12/25/2024",
                    "end": "12/29/2024",
                    "description": "la tache de benji",
                    "taskImgUrl": "",
                },
                {
                    "id": 1,
                    "project": {
                        "name": "project2",
                        "id": 2
                    },
                    "name": "task3",
                    "start": "12/21/2023",
                    "end": "01/02/2024",
                    "description": "la tache de benji",
                    "taskImgUrl": "",
                },
            ]
        },
        {
            "id": 2,
            "firstName" : "Nathan",
            "lastName": "szigeti",
            "urlAvatar": "",
            "tasks" : [
                {
                    "id": 2,
                    "project": {
                        "name": "project1",
                        "id": 1
                    },
                    "name": "task1",
                    "start": "07/21/2024",
                    "end": "12/27/2024",
                    "description": "la mission de nathan",
                    "taskImgUrl": "",
                },
                {
                  "id": 2,
                  "project": {
                      "name": "project2",
                      "id": 2
                  },
                  "name": "task2",
                  "start": "12/29/2023",
                  "end": "05/15/2024",
                  "description": "la deuxième mission de nathan",
                  "taskImgUrl": "",
                },
            ]
        },
    ]
}