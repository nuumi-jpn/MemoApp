import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
   render() {
     return (
       <View style={styles.container}>
         <TextInput style={styles.memoEditInput} multiline value="HI!" />
         <CircleButton>
           {'\uf00c'}
         </CircleButton>
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
