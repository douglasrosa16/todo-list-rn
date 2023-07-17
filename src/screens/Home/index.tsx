import { useState } from 'react';
import { TextInput, View, Text, FlatList } from 'react-native';
import { styles } from "./styles";

import Task from '../../components/Task';
import Header from '../../components/Header';
import EmptyList from '../../components/EmptyList';
import { TaskDTO } from 'dtos/TaskDTO';

export default function Home() {
  const [tasks, setTasks] = useState<TaskDTO[]>([
    // { id: '1', isDone: true, title: 'Estudar Javascript' },
    // { id: '2', isDone: false, title: 'Estudar Delphi' },
    // { id: '3', isDone: false, title: 'Estudar React' },
    // { id: '4', isDone: true, title: 'Estudar Programação' },
  ]);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.listTask}>
        <View style={styles.containerInfo}>
          <Text style={styles.textCriadas}>
            Criadas
          </Text>
          <View style={styles.countainerCounter}>
            <Text style={styles.counterText}>
              21
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
        keyExtractor={(tasks) => tasks.id!}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            isDone={item.isDone}
            title={item.title} />
        )}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
}