import React from 'react';
import { ScrollView, View, TouchableHighlight, Text } from 'react-native';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';
import BaseScreen from './BaseScreen';

var styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
};

export default class DefaultScreen extends BaseScreen {
  changeRate(rate) {
    this._playbackInstance.setStatusAsync({
      rate: rate,
      shouldCorrectPitch: true,
    });
  }

  render() {
    const RateButton = ({ rate }) => (
      <TouchableHighlight
        style={{
          marginLeft: 10,
          borderRadius: 5,
          padding: 5,
          borderWidth: 1,
          borderColor: 'black',
        }}
        onPress={this.changeRate.bind(this, rate)}>
        <Text>{rate + 'x'}</Text>
      </TouchableHighlight>
    );
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <VideoPlayer
            videoProps={{
              shouldPlay: true,
              resizeMode: Video.RESIZE_MODE_CONTAIN,
              source: {
                uri:
                  'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
              },
              isMuted: false,
              ref: component => {
                this._playbackInstance = component;
              },
            }}
            showControlsOnLoad={true}
            isPortrait={this.state.isPortrait}
            switchToLandscape={this.switchToLandscape.bind(this)}
            switchToPortrait={this.switchToPortrait.bind(this)}
            playFromPositionMillis={0}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text> Change Default Rate </Text>
            <RateButton rate={1} />
            <RateButton rate={2} />
            <RateButton rate={4} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
