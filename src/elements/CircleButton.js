import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import font from 'expo';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

class CircleButton extends React.Component {
  state = { fontLoaded: false, }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color } = this.props;

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
          <Text style={[styles.circleButtonTitle, { color: textColor }]}>
            {'\uf303'}
          </Text>
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
    shadowCollor: '#FFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 0,
  },
  CircleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 32,
    color: '#FFF',
    lineHeight: 32,
  },
});

export default CircleButton;
