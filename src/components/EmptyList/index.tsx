import { Text, View, Image } from 'react-native';

import { styles } from "./styles";

import Clipboard  from '../../assets/Clipboard.png';

export default function Home() {

  return (
    <View style={styles.container}>
      <Image 
        source={Clipboard}
        style={styles.image}
      />      
      <Text style={styles.textFirst}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textSecond}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}