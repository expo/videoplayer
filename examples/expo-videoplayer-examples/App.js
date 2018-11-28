import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator,  createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import DefaultScreen from './screens/DefaultScreen';
import CustomScreen from './screens/CustomScreen';

const tintColor = '#2f95dc';

const Colors = {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff',
};

var styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
};

const MainTabNavigator = createMaterialTopTabNavigator(
  {
    Default: {
      screen: DefaultScreen,
    },
    Custom: {
      screen: CustomScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      header: null,
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Default':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Custom':
            iconName =
              Platform.OS === 'ios'
                ? `ios-link${focused ? '' : '-outline'}`
                : 'md-link';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    navigationOptions: () => ({
      header: 'none'
    }),
  }
);

const AppContainer =  createAppContainer(RootStackNavigator);


export default class App extends React.Component {
  state = {
    assetsAreLoaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}>
          <StatusBar hidden={true} />
          <AppContainer />
        </View>
      );
    }
  }

  async _loadAssetsAsync() {
    try {
      await Promise.all([
        Font.loadAsync({
          // This is the font that we are using for our tab bar
          ...Ionicons.font,
        }),
      ]);
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        'There was an error caching assets (see: App.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  }
}
