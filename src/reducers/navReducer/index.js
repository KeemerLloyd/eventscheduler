import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../../navigators/AppNavigator";

// Start with two routes: The Main screen, with the Login screen on top.

const firstAction = AppNavigator.router.getActionForPathAndParams(
  "LoadingPage"
);

const tempNavState = AppNavigator.router.getStateForAction(firstAction);
//const secondAction = AppNavigator.router.getActionForPathAndParams('Login');

const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState, //secondAction,
  tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case "Login":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Home" }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const initialAuthState = { isSigning: false };

function auth(state = initialAuthState, action) {
  switch (action.type) {
    case "SignIn":
      return { ...state, isSigning: true };
    case "Logout":
      return { ...state, isSigning: false };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth
});

export default AppReducer;
