import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomIcon from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
   render() {
     return (
       <View style={styles.container}>
         <View style={styles.memoEditInput}>
          <Text>Hi!</Text>
        </View>
         <CustomIcon name={check} style={[styles.CircleButtonTitle, { color: textColor }]} />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
  },
});


export default MemoEditScreen;
