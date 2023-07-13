import { TextInput, View, Text } from 'react-native';
import { styles } from "./styles";

import Task from '../../components/Task';
import Header from '../../components/Header';
import EmptyList from '../../components/EmptyList';

export default function Home() {

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
      <Text style={styles.line}>

      </Text>
      <Task title='Estudar React Native' isDone />
      <Task title='Estudar Programação' isDone={false} />
      <Task title='Estudar Deploy Expo' isDone />
      
    </View>
  );
}