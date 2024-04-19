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
            "urlAvatar": 'https://imgs.search.brave.com/t4L94ou3SfcKiE_0WyoTVv5QuhOCRaI5DDe29Lg75Oc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNDA3Mi8xNDA3/MjY1Ni5wbmc',
            "tasks" : [
                {
                    "id": 1,
                    "project": {
                        "name": "project1",
                        "id": 1
                    },
                    "name": "task1",
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
                    "name": "task2",
                    "start": "12/29/2023",
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
            "urlAvatar": 'https://imgs.search.brave.com/t4L94ou3SfcKiE_0WyoTVv5QuhOCRaI5DDe29Lg75Oc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8xNDA3Mi8xNDA3/MjY1Ni5wbmc',
            "tasks" : [
                {
                    "id": 2,
                    "project": {
                        "name": "project1",
                        "id": 1
                    },
                    "name": "task3",
                    "start": "07/21/2024",
                    "end": "01/05/2025",
                    "description": "la mission de nathan",
                    "taskImgUrl": "",
                },
                {
                    "id": 2,
                    "project": {
                        "name": "project2",
                        "id": 2
                    },
                    "name": "task4",
                    "start": "12/21/2023",
                    "end": "05/15/2024",
                    "description": "la deuxième mission de nathan",
                    "taskImgUrl": "",
                },
            ]
        },
    ]
}