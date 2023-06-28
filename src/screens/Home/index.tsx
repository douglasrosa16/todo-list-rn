import { TextInput, View } from 'react-native';
import { styles } from "./styles";

import Header from '../../components/Header';
import EmptyList from '../../components/EmptyList';

export default function Home() {

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.listTask}>
        <View style={styles.containerCriadas}>
          <TextInput style={styles.textCriadas}>
            Criadas
          </TextInput>
          <TextInput style={styles.textQntCriadas}>
            20
          </TextInput>
        </View>

        <View style={styles.containerConcluidas}>
          <TextInput style={styles.textConcluidas}>
            Concluídas 
          </TextInput>
          <TextInput style={styles.textQntConcluidas}>
            0
          </TextInput>
        </View>
      </View>
      <TextInput style={styles.line}>

      </TextInput>

      <EmptyList />
    </View>
  );
}