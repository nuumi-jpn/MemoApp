import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';


const dateString = (date) => {
  const str = date.toDate().toISOString();
  return str.split('T')[0];
};

class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ memo: params.memo });
  }

  render() {
    const { memo } = this.state;
    return (
    <View style={styles.container}>
      <View>
        <View style={styles.memoHeader}>
          <View>
            <Text style={styles.memoHeaderTitle}>
              {memo.body.substring(0, 10)}
            </Text>
            <Text style={styles.memoHeaderDate}>
              {dateString(memo.createdOn)}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.memoContent}>
        <Text styles={styles.memoBody}>
          {memo.body}
        </Text>
      </View>
      <CircleButton
         name="pencil"
         color="white"
         style={styles.editButton}
         onPress={() => { this.props.navigation.navigate('MemoEdit', { memo }); }}
      />
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
    paddingLeft: 10,
    fontSize: 28,
    color: '#FFF',
    marginBottom: 4,
  },
  memoHeaderDate: {
    paddingLeft: 10,
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
  memoBody: {
    lineHeight : 10,
    fontSize: 15,
  }
});

export default MemoDetailScreen
