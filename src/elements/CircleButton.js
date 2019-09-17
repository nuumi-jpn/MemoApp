import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleButton extends React.Component {
  render(){
    return (
      <View style={styles.CircleButton}>
        <Text style={styles.CircleButtonTitle}>
          {this.props.children}
        </Text>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  CircleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E31676',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowCollor: '#FFF',
    shadowOffset: {width: 0,height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 0,
  },
  CircleButtonTitle: {
    fontSize: 32,
    color: '#FFF',
    lineHeight: 32,
  },
});

export default CircleButton;
