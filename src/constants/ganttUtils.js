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

export const fakeData = {
    "projects": [
        {
            "id": 1,
            "name": "projectTest",
            "users": [
                {
                    "id": 1,
                    "firstName": "Nathan",
                    "lastName": "szigeti",
                    "urlAvatar": "",
                    "tasks": [
                        {
                            "id": "MXP-1",
                            "name": "test",
                            "start": "12/01/2024",
                            "end": "01/05/2025",
                            "description": "la tache de nathan",
                            "taskImgUrl": ""
                        },
                        {
                            "id": "MXP-2",
                            "name": "test 2",
                            "start": "01/15/2024",
                            "end": "03/02/2024",
                            "description": "la tache de nathan 2",
                            "taskImgUrl": ""
                        }
                    ]
                }
            ]
        },
        {
            "id": 2,
            "name": "project2",
            "users": [
                {
                    "id": 1,
                    "firstName": "Nathan",
                    "lastName": "szigeti",
                    "urlAvatar": "",
                    "tasks": [
                        {
                            "id": "MXP-3",
                            "name": "test 3",
                            "start": "12/01/2023",
                            "end": "12/14/2023",
                            "description": "la tache de nathan 3",
                            "taskImgUrl": ""
                        }
                    ]
                },
                {
                    "id": 2,
                    "firstName": "Benjamin",
                    "lastName": "Burstein",
                    "urlAvatar": "",
                    "tasks": [
                        {
                            "id": "MXP-4",
                            "name": "test 4",
                            "start": "01/01/2024",
                            "end": "01/15/2024",
                            "description": "la tache de benjamin 1",
                            "taskImgUrl": ""
                        }
                    ]
                }
            ]
        },
        {
            "id": 3,
            "name": "project3",
            "users": [
                {
                    "id": 1,
                    "firstName": "Nathan",
                    "lastName": "szigeti",
                    "urlAvatar": "",
                    "tasks": [
                        {
                            "id": "MXP-5",
                            "name": "test 5",
                            "start": "02/01/2024",
                            "end": "02/15/2024",
                            "description": "la tache de nathan 4",
                            "taskImgUrl": ""
                        }
                    ]
                },
                {
                    "id": 2,
                    "firstName": "Benjamin",
                    "lastName": "Burstein",
                    "urlAvatar": "",
                    "tasks": [
                        {
                            "id": "MXP-6",
                            "name": "test 6",
                            "start": "03/01/2024",
                            "end": "03/15/2024",
                            "description": "la tache de benjamin 2",
                            "taskImgUrl": ""
                        }
                    ]
                }
            ]
        }
    ]
}