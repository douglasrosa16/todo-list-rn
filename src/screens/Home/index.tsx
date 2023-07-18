import { useState } from 'react';
import { TextInput, View, Text, FlatList } from 'react-native';
import { styles } from "./styles";

import Task from '../../components/Task';
import Header from '../../components/Header';
import EmptyList from '../../components/EmptyList';
import { TaskDTO } from 'dtos/TaskDTO';
import { uuid } from '../../utils/uuid';

export default function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([]);
  const [newTask, setNewTask] = useState('');

  function handleAddTask() {
    if (newTask !== '' && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isDone: false, title: newTask.trim() }
      ]);
      setNewTask('');
    }    
  }

  function handleTaskDone(id: string){
    console.log(`Tarefa ${id} marcada`)
  }

  function handleTaskDelete(id : string){
    console.log(`Tarefa ${id} excluída`)
  }

  return (
    <View style={styles.container}>
      <Header
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleAddTask}
      />

      <View style={styles.listTask}>
        <View style={styles.containerInfo}>
          <Text style={styles.textCriadas}>
            Criadas
          </Text>
          <View style={styles.countainerCounter}>
            <Text style={styles.counterText}>
              0
            </Text>
          </View>

        </View>

        <View style={styles.containerInfo}>
          <Text style={styles.textConcluidas}>
            Concluídas
          </Text>
          <View style={styles.countainerCounter}>
            <Text style={styles.counterText}>
              0
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
  );
}