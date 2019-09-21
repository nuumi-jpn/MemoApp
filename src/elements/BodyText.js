import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BodyText from './src/elements/BodyText';

class BodyText extends React.Component {
  render() {
    return (
      <View style= {styles.text}>
        <View style={styles.appbar}>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
    backgroundColor: '#eee',
  },

});

export default BodyText;
