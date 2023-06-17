import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import Home from './src/screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
