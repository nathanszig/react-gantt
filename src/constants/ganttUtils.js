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
  const marginWithoutWeekends = (marginDays / 5) * width;
  return `${marginWithoutWeekends}`;
}

export const calculateWidthAndMargin = (startDate, endDate, firstWeekStartDate, width) => {
  const durationInDays = getDurationInDays(startDate, endDate, firstWeekStartDate);
  const widthPercentage = (durationInDays * width) / 4;
  const taskMarginLeft = calculateTaskMarginLeft(startDate, firstWeekStartDate, width);
  return { widthPercentage, taskMarginLeft };
};

export const fakeData = {
    "users": [
        {
            "id": 1,
            "firstName" : "Nathan",
            "lastName": "szigeti",
            "urlAvatar": "",
            "tasks" : [
                {
                    "id": "MXP-1",
                    "project": {
                        "name": "projectTest",
                        "id": 1
                    },
                    "name": "test",
                    "start": "01/01/2024",
                    "end": "01/05/2024",
                    "description": "la tache de nathan",
                    "taskImgUrl": "",
                },
                {
                  "id": "MXP-2",
                  "project": {
                      "name": "projectTest",
                      "id": 1
                  },
                  "name": "test 2",
                  "start": "01/08/2024",
                  "end": "03/11/2024",
                  "description": "la tache de nathan 2",
                  "taskImgUrl": "",
                },
                {
                  "id": "MXP-3",
                  "project": {
                      "name": "project2",
                      "id": 2
                  },
                  "name": "test 3",
                  "start": "10/01/2023",
                  "end": "10/12/2023",
                  "description": "la tache de nathan 3",
                  "taskImgUrl": "",
                }
            ]
        }
    ]
}