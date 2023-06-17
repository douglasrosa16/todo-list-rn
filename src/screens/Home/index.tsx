import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';

import Rocket from '../../images/rocket.png';

import { styles } from "./styles";

export default function Home() {

  return (
    <View style={styles.container}>

      <View style={styles.form}>

        <Image
          style={styles.image}
          source={Rocket}
        />

      </View>

    </View>
  );
}