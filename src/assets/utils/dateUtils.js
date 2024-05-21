import moment from 'moment';

// fonction qui retourne le nombre de jours entre deux dates
export const getDurationInDays = (startAt, endAt) => {
  const startDate = new Date(startAt);
  const endDate = new Date(endAt);
  let differenceInTime = endDate.getTime() - startDate.getTime();
  return Math.round(differenceInTime / (1000 * 3600 * 24));
}

// fonction qui le nombre de semaine à partir de deux dates (semaine de début et fin compris et entre les deux dates)
export const getDurationInWeeks = (startAt, endAt) => {
  // Calculate the difference in weeks
  // Return the difference in weeks plus 1 to account for the ending week
  const startDate = moment(startAt).startOf("weeks");
  const endDate = moment(endAt).endOf("weeks");
  return endDate.diff(startDate, 'weeks') + 1;
}

// fonction qui retourne quel l'index de la semaine données dans son mois a partir d'une date moment
export const weekIndexInMonth = (date) => {
  const startOfMonth = moment(date).clone().startOf('month');
  // Calculate the number of days in the first week of the month
  const daysInFirstWeek = moment(date).clone().startOf('week').isoWeekday() - startOfMonth.isoWeekday() + 1;

  if (moment(date).endOf('week').year() > startOfMonth.year()) {
    return moment(date).isoWeeksInYear() - startOfMonth.isoWeek() + 1;
  }
  // Check if the first week has at least 3 days
  if (daysInFirstWeek < 3) {
    // If the first week has less than 3 days, consider the next week as the first week
    return moment(date).isoWeek() - startOfMonth.isoWeek();
  }

  // If the first week has 3 or more days, count it as the first week
  return moment(date).isoWeek() - startOfMonth.isoWeek() + 1;
}

export const numberOfWeeksInMonth = (date) => {
  return weekIndexInMonth(moment(date).clone().endOf('month').format('YYYY-MM-DD'));
}