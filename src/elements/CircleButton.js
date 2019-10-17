import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, View, TouchableHighlight } from 'react-native';


import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf067',
  check: '\uf00c',
}, 'FontAwesome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
   }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwsome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, color, onPress } = this.props;

    let bgColor = '#E31676';
    let textColor = '#FFF';

    if (color === 'white') {
      bgColor = '#FFF';
      textColor = '#E31676';
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor='transparent'>
        <View style={[styles.CircleButton, { backgroundColor: bgColor }]}>
          {
        this.state.fontLoaded ? (
          <CustomIcon name={name} style={[styles.CircleButtonTitle, { color: textColor }]} />
        ) : null
      }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  CircleButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  CircleButtonTitle: {
    fontSize: 24,
    lineHeight: 24,
  },
});

export default CircleButton;
