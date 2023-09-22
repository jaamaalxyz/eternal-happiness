export const getCompletePercentage = (completedCount, taskList) => {
  return (completedCount / taskList.length) * 100;
};

export const getDayOfWeek = () => {
  return new Date().getDay();
};
