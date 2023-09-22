import { useEffect, useState } from 'react';
import { TASK_LIST } from '../model';
import { getDayOfWeek } from '../utils';

export const useTask = () => {
  const [taskList, setTaskList] = useState(TASK_LIST);
  const [completedCount, setCompletedCount] = useState(0);

  const dayOfWeek = getDayOfWeek();

  useEffect(() => {
    const filteredTasks = TASK_LIST.filter((task) => {
      return task.id !== 3 || dayOfWeek === 5;
    });

    if (dayOfWeek !== 5) {
      filteredTasks[2].title = 'Pray Juhur Prayer';
    }
    setTaskList(filteredTasks);
  }, [dayOfWeek]);

  const countCompletedTasks = (newTaskList) => {
    let count = 0;
    newTaskList.forEach((task) => {
      if (task.completed) {
        count++;
      }
    });
    setCompletedCount(count);
  };

  const toggleTask = (id) => {
    const newTaskList = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTaskList(newTaskList);
    countCompletedTasks(newTaskList);
  };
  return {
    taskList,
    toggleTask,
    completedCount,
    dayOfWeek,
  };
};
