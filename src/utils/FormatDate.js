const formatDate = (date) => {
  const newDate = new Date(date);
  const newMonth =
    newDate.getMonth() + 1 < 10
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1;
  const newDay =
    newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
  const newYear = newDate.getFullYear();
  return `${newMonth}/${newDay}/${newYear}`;
};

const deepDive = (date) => {
  const daysPassed = Math.floor((Date.now() - date) / 86400000);
  if (daysPassed < 1) {
    return `less than 1 day ago`;
  }
  if (daysPassed < 2) {
    return `1 day ago`;
  }
  if (daysPassed < 30) {
    return `${daysPassed} days ago`;
  }
  if (daysPassed < 60) {
    return `1 month ago`;
  }
  if (daysPassed < 365) {
    return `${Math.floor(daysPassed / 30)} months ago`;
  }
  return `over 1 year ago`;
};

export { formatDate, deepDive };
