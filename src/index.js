import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import AppReducer from "./reducers/navReducer";

import AppWithNavigationState from "./navigators/AppNavigator";
import { middleware } from "./utils/redux";

const store = createStore(AppReducer, applyMiddleware(middleware));

class InviteUsApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("InviteUs", () => InviteUsApp);

export default InviteUsApp;
