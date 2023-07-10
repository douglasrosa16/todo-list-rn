import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../theme';

export default function Task() {
  return (
    <View style={styles.containerTask}>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="checkbox-blank-circle-outline"
          size={22}
          color={theme.colors.brand.purple}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.taskText}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.         
        </Text>
      </View>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color={theme.colors.base.gray300}
        />
      </TouchableOpacity>
    </View>
  )
}