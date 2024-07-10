import moment from 'moment';

// function that returns the number of days between two dates
export const getDurationInDays = (startAt, endAt) => {
  const startDate = new Date(startAt);
  const endDate = new Date(endAt);
  let differenceInTime = endDate.getTime() - startDate.getTime();
  return Math.round(differenceInTime / (1000 * 3600 * 24));
}

// function that returns the number of weeks between two dates
export const getDurationInWeeks = (startAt, endAt) => {
  const startDate = moment(startAt).startOf("weeks");
  const endDate = moment(endAt).endOf("weeks");
  return endDate.diff(startDate, 'weeks') + 1;
}

// function that return the index of the week in his month based on the date
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

// function that returns the number of weeks in a month based on the date
// For that call weekIndexInMonth with the last day of the month to know the week index of the last day so the number of weeks in the month
export const numberOfWeeksInMonth = (date) => {
  return weekIndexInMonth(moment(date).clone().endOf('month').format('YYYY-MM-DD'));
}
