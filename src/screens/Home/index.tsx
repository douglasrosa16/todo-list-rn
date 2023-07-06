import { TextInput, View, Text } from 'react-native';
import { styles } from "./styles";

import Header from '../../components/Header';
import EmptyList from '../../components/EmptyList';

export default function Home() {

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.listTask}>
        <View style={styles.containerCriadas}>
          <Text style={styles.textCriadas}>
            Criadas
          </Text>
          <View style={styles.countainerCounter}>
            <Text style={styles.counterText}>
              20
            </Text>
          </View>

        </View>

        <View style={styles.containerConcluidas}>
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

      <EmptyList />
    </View>
  );
}