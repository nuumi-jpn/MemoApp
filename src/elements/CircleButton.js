import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CircleButton extends React.Component {
  render(){
    const {style, color} = this.props;

    let bgcolor = '#E31676';
    let textColor = '#FFF';

    if(color === 'white') {
      bgcolor ='#FFF';
      textColor = '#E31676';
    }


    return (
      <View style={[styles.CircleButton, style , {backgroundColor: bgcolor}]}>
        <Text style={[styles.CircleButtonTitle , {color: textColor}]}>
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
