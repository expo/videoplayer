import React from 'react';
import { Dimensions } from 'react-native';
import { ScreenOrientation } from 'expo';

export default class BaseScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    tabBarVisible:
      navigation.state.params && navigation.state.params.tabBarHidden
        ? false
        : true,
  });

  state = {
    isPortrait: true,
  };

  componentDidMount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
    Dimensions.addEventListener(
      'change',
      this.orientationChangeHandler.bind(this)
    );
  }

  componentWillUnmount() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
    Dimensions.removeEventListener('change', this.orientationChangeHandler);
  }

  orientationChangeHandler(dims) {
    const { width, height } = dims.window;
    const isLandscape = width > height;
    this.setState({ isPortrait: !isLandscape });
    this.props.navigation.setParams({ tabBarHidden: isLandscape });
    ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
  }

  switchToLandscape() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE);
  }

  switchToPortrait() {
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
  }
}
