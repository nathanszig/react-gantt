import moment from 'moment';

export const constants = {
  ExclamationIcon: '/images/pictos/warning.svg',
  ArrowLeft: '/images/pictos/arrowGanttLeft.svg',
  ArrowRight: '/images/pictos/arrowGanttRight.svg',
};


export const getDurationInDays = (startAt, endAt, firstWeekStartDate) => {
  const startDate = moment(startAt, 'YYYY-MM-DD');
  const endDate = moment(endAt, 'YYYY-MM-DD');
  let durationInDays = 0;
  const totalDays = endDate.diff(startDate, 'days') + 1;
  
  for (let i = 0; i < totalDays; i++) {
    const currentDate = startDate.clone().add(i, 'days');
    
    if (i === 0 && (currentDate.day() !== 0 && currentDate.day() !== 6)) {
      durationInDays--;
    } 
  
    if (currentDate.format('YYYY-MM-DD') === firstWeekStartDate) {
      durationInDays++;
    }    

    if (currentDate.day() !== 0 && currentDate.day() !== 6) {
      durationInDays++;
    }
  }

  if (durationInDays <= 0) {
    durationInDays = 1;
  }
  return durationInDays;
}

export const calculateTaskMarginLeft = (startDate, firstWeekStartDate, width) => {
  const startDateMoment = moment(startDate, 'YYYY-MM-DD');
  const firstWeekStartDateMoment = moment(firstWeekStartDate).startOf('isoWeek').format('YYYY-MM-DD');
  let marginDays = 0;
  const totalDays = startDateMoment.diff(firstWeekStartDateMoment, 'days') + 1;
  for (let i = 0; i < totalDays; i++) {
    const currentDate = startDateMoment.clone().subtract(i, 'days');
    if (currentDate.day() !== 0 && currentDate.day() !== 6) {
      marginDays++;
    }
    if (currentDate.format('YYYY-MM-DD') === firstWeekStartDateMoment) {
      marginDays--;
    }
  }
  const marginWithoutWeekends = (marginDays * width) / 5;
  return `${marginWithoutWeekends}`;
}

export const calculateWidthAndMargin = (startDate, endDate, firstWeekStartDate, width) => {
  const durationInDays = getDurationInDays(startDate, endDate, firstWeekStartDate);
  const widthPercentage = (durationInDays * width) / 5;
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
                    "project": {
                        "name": "projectTest",
                        "id": 1
                    },
                    "name": "test",
                    "start": "01/01/2024",
                    "end": "04/01/2024",
                    "description": "la tache de nathan",
                    "taskImgUrl": "",
                }
            ]
        }
    ]
}