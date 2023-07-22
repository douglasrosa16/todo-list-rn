import { useState, useRef } from 'react';
import { TextInput, View, Text, FlatList, Alert } from 'react-native';
import { styles } from "./styles";

import Task from '../../components/Task';
import Header from '../../components/Header';
import EmptyList from '../../components/EmptyList';
import { TaskDTO } from 'dtos/TaskDTO';
import { uuid } from '../../utils/uuid';

export default function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState('');
  const newTaskInputRef = useRef<TextInput>(null);


  function handleAddTask() {
    if (newTask !== '' && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isDone: false, title: newTask.trim() }
      ]);
      setNewTask('');

      newTaskInputRef.current?.blur()
    }
  }

  function handleTaskDone(id: string) {
    setTasks((task) =>
      task.map((task) => {
        task.id === id ? (task.isDone = !task.isDone) : null
        return task
      }),
    )
  }

  function handleTaskDelete(id: string) {
    Alert.alert('Excluir tarefa', 'Deseja excluir essa tarefa?', [
      {
        text: 'Sim',
        style: 'default',
        onPress: () =>
          setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  const totalTasksCreated = tasks.length;
  const totalTasksDone = tasks.filter(({ isDone }) => isDone).length;

  return (
    <View style={styles.container}>
      <Header
        inputRef={newTaskInputRef}
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleAddTask}
      />
      <View style={styles.tasksContainer}>
        <View style={styles.listTask}>
          <View style={styles.containerInfo}>
            <Text style={styles.textCriadas}>
              Criadas
            </Text>
            <View style={styles.countainerCounter}>
              <Text style={styles.counterText}>
                {totalTasksCreated}
              </Text>
            </View>

          </View>

          <View style={styles.containerInfo}>
            <Text style={styles.textConcluidas}>
              Concluídas
            </Text>
            <View style={styles.countainerCounter}>
              <Text style={styles.counterText}>
                {totalTasksDone}
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskDeleted={() => handleTaskDelete(item.id)}
              {...item} />
          )}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  );
}