import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const TASK_LIST = [
  {
    id: 1,
    title: 'Pray Fajr Prayer',
    completed: false,
  },
  {
    id: 2,
    title: 'Recite Surah Al Imran 3:190-200',
    completed: false,
  },
  {
    id: 3,
    title: 'Recite Surah Al Kahf',
    completed: false,
  },
  {
    id: 4,
    title: 'Pray Jumuah Prayer',
    completed: false,
  },
  {
    id: 5,
    title: 'Pray Asr Prayer',
    completed: false,
  },
  {
    id: 6,
    title: 'Pray Maghrib Prayer',
    completed: false,
  },
  {
    id: 7,
    title: 'Recite Surah Al Baqarah 2:285-286',
    completed: false,
  },
  {
    id: 8,
    title: 'Pray Isha Prayer',
    completed: false,
  },
  {
    id: 9,
    title: 'Recite Surah Al Mulk',
    completed: false,
  },
  {
    id: 10,
    title: 'Learn arabic alphabet',
    completed: false,
  },
  {
    id: 11,
    title: 'Learn and discuss about Islam with family',
    completed: false,
  },
];

const Task = ({ task }) => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        width: '90%',
      }}
    >
      <View
        style={{
          width: 24,
          height: 24,
          borderColor: '#00cc66',
          borderWidth: 2,
          borderRadius: 5,
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {task.completed && (
          <View
            style={{
              width: 12,
              height: 12,
              backgroundColor: '#00cc66',
              borderRadius: 5,
            }}
          />
        )}
      </View>
      <View
        style={{
          flex: 8,
          marginRight: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
          }}
        >
          {task.title}
        </Text>
      </View>
      <View
        style={{
          width: 24,
          height: 24,
          borderColor: '#00cc66',
          borderWidth: 2,
          borderRadius: 5,
          marginRight: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 16,
            color: '#000000',
          }}
        >
          {task.id}
        </Text>
      </View>
    </View>
  );
};

const WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export default function App() {
  const [taskList, setTaskList] = useState(TASK_LIST);
  const [completedCount, setCompletedCount] = useState(0);

  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();

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

  const getCompletePercentage = (completedCount) => {
    return (completedCount / taskList.length) * 100;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            marginVertical: 40,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: 24,
            }}
          >
            Welcome to Eternal Happiness!
          </Text>
          <Text
            style={{
              color: '#dc143c',
            }}
          >
            May you find peace and joy in your life!
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: '#8736c7',
              fontSize: 18,
              textAlign: 'center',
            }}
          >
            {WEEK_DAYS[dayOfWeek]} Obligation
          </Text>
          <Text
            style={{
              color: '#FFFFFF',
              marginVertical: 10,
              textAlign: 'center',
            }}
          >
            Today you have completed:{' '}
            {getCompletePercentage(completedCount)?.toFixed(0)}%
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            width: Dimensions.get('window').width,
          }}
        >
          {taskList
            .filter((item) => {
              if (item.id === 3 && new Date().getDay() === 5) {
                return item;
              }
              return item;
            })
            .map((task) => (
              <Pressable onPress={() => toggleTask(task.id)} key={task.id}>
                <Task task={task} toggleTask={toggleTask} />
              </Pressable>
            ))}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00cc66',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
