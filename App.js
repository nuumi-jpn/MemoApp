import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './src/components/Appbar';
import SingupScreen from './src/screens/SingupScreen';

export default class App extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Appbar />
      <SingupScreen />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});
