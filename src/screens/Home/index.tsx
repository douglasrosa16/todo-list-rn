import { View, TouchableOpacity, Text, TextInput} from 'react-native';

import Rocket from '../../images/rocket.png';

import { styles } from "./styles";



export default function Home() {

  return (
    <View style={styles.container}>
      
      <View style={styles.form}>   
        
        <TextInput 
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor="#6B6B6B"
        >

        </TextInput>

        <TouchableOpacity style={styles.button}>
          <Text>
            +
          </Text>
        </TouchableOpacity>          
      
      </View>
      
    </View>
  );
}