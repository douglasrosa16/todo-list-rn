import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

import Logo from '../../assets/logoTodoList.png';

import { theme } from '../../theme';
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

type HeaderProps = {
  task: string,
  onChangeText: (task: string) => void,
  onPress : () => void
}

export default function Header({ task, onChangeText, onPress} : HeaderProps) {

  return (
    <View style={styles.Headercontainer}>
      <Image
        style={styles.image}
        source={Logo}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={theme.colors.base.gray300}
          value={task}
          onChangeText={onChangeText}
        >

        </TextInput>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text>
            <MaterialCommunityIcons 
              name='plus-circle-outline'
              size={22}
              color={theme.colors.base.gray100}
            />
          </Text>
        </TouchableOpacity>
      </View>


    </View>
  );
}