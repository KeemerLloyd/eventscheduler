import React from "react";

import Map from "../modules/Map";
import Auth from "../modules/auth";
import Events from "../modules/Events";
import Profile from "../modules/Profile";
import Loading from "../modules/LoadingPage";
import Notification from "../modules/Notification";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addListener } from "../utils/redux";

import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from "react-navigation";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const MainStack = TabNavigator(
  {
    Events: {
      screen: Events
    },
    Map: {
      screen: Map
    },
    Notification: { screen: Notification },
    Profile: { screen: Profile }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Events":
            iconName =
              Platform.OS === "ios"
                ? `ios-list-box${focused ? "" : "-outline"}`
                : "md-list-box";
            break;
          case "Notification":
            iconName =
              Platform.OS === "ios"
                ? `ios-notifications${focused ? "" : "-outline"}`
                : "md-notifications";
            break;
          case "Map":
            iconName =
              Platform.OS === "ios"
                ? `ios-map${focused ? "" : "-outline"}`
                : "md-map";
            break;
          case "Profile":
            iconName =
              Platform.OS === "ios"
                ? `ios-person${focused ? "" : "-outline"}`
                : "md-person";
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "#b4b2b2",
      showLabel: false
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: "top",
    animationEnabled: false,
    swipeEnabled: true
  }
);

export const AppNavigator = StackNavigator(
  {
    LoadingPage: { screen: Loading },
    Home: { screen: MainStack },
    Login: { screen: Auth }
  },
  {
    // mode: "modal",
    // headerMode: "none"
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  };
  componentDidMount() {}
  render() {
    const { dispatch, nav } = this.props;

    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
