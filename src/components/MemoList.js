import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class MemoList extends React.Component {
  render() {
    console.log(this.props.memoList);
    return (
      <View style={styles.memoList}>
        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoData}>2019/09/17</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoData}>2019/09/17</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => {this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイテム</Text>
            <Text style={styles.memoData}>2019/09/17</Text>
          </View>
        </TouchableHighlight>

      </View>
  );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#FFF',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoData: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
