import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, DatePickerIOSBase } from 'react-native';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
console.log("App executed");

  return (
  <WelcomeScreen></WelcomeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
