import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

import Logo from '../../assets/logoTodoList.png';

import { theme } from '../../theme';
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons';

type HeaderProps = {
  task: string,
  inputRef: React.RefObject<TextInput>
  onChangeText: (task: string) => void,
  onPress : () => void
}

export default function Header({ task, inputRef, onChangeText, onPress} : HeaderProps) {

  return (
    <View style={styles.Headercontainer}>
      <Image
        style={styles.image}
        source={Logo}
      />
      <View style={styles.form}>
        <TextInput
          style={[styles.input, inputRef.current?.isFocused() && task ? styles.inputBorder : null]}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={theme.colors.base.gray300}
          value={task}
          onChangeText={onChangeText}
          ref={inputRef}
          autoCorrect={false}
          onSubmitEditing={onPress}
          returnKeyType='done'
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