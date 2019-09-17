import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Appbar from './src/components/Appbar';
import MemoListScreens from './src/screens/MemoListScreens';

export default class App extends React.Component {
  render() {
  return (
    <View style={styles.container}>
      <Appbar />
      <MemoListScreens />
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
