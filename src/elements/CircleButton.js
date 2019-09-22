import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
  plus: '\uf004',
  check: '\uf00c'
}, 'FontAwesome');

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
   }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { name, style, color } = this.props;

    let bgColor = '#E31676';
    let textColor = '#FFF';

    if (color === 'white') {
      bgColor = '#b0c4de';
      textColor = '#E31676';
    }

    return (
      <View style={[styles.CircleButton, style, { backgroundColor: bgColor }]}>
        {
        this.state.fontLoaded ? (
          <CustomIcon name={name} style={[styles.CircleButtonTitle, { color: textColor }]} />
        ) : null
      }
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
  },
  CircleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
  },
});

export default CircleButton;
