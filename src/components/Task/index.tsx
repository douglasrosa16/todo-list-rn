import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import Circle from '../../assets/Circle.png';
import Garbage from '../../assets/Garbage.png';

export default function Task() {
  return (
    <View style={styles.containerTask}>
      <Image
        source={Circle}
      />
      <Text style={styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <Image
        source={Garbage}
      />
    </View>
  )
}