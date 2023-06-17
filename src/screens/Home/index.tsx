import { TextInput, View } from 'react-native';
import { styles } from "./styles";

import Header from '../../components/Header';
import EmptyList from '../../components/EmptyList';

export default function Home() {

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.listTask}>
        <TextInput style={styles.textCriadas}>
          Criadas
        </TextInput>
        <TextInput style={styles.textConcluidas}>
          Concluídas
        </TextInput>
      </View>
      <TextInput style={styles.line}>
        
      </TextInput>

      <EmptyList />
    </View>
  );
}