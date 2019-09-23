import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';


class MemoDetailScreen extends React.Component {
  render () {
    return (
    <View style={styles.container}>
      <View>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>講座のアイディア</Text>
            <Text style={styles.memoHeaderDate}>2019/09/18</Text>
          </View>
        </View>
      </View>

      <View style={styles.memoContent}>
        <Text>
          講座のアイディアです!!
        </Text>
      </View>
      <CircleButton name="pencil" color="white" style={styles.editButton} onPress={() => { this.props.navigation.navigate('MemoEdit'); }} />
    </View>
    );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoHeader: {
    height: 150,
    backgroundColor: '#17313C',
    justifyContent: 'center',
  },
  memoHeaderTitle: {
    fontSize: 28,
    color: '#FFF',
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: '#FFF',
  },
  memoContent: {
    paddingTop: 30,
    paddingRight: 20,
    paddingBottom: 30,
    paddingLeft: 20,
    backgroundColor: '#ddd',
    flex: 1,
  },
  editButton: {
    top: 125,

  },
});

export default MemoDetailScreen
