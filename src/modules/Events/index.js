import React from "react";
//import styles from "./styles";
import { View, Text, Button } from "react-native";
import { NavigationActions } from "react-navigation";
import authLib from "../auth/auth.library";

export default class Events extends React.Component {
  static navigationOptions = {
    /* These values are used instead of the shared configuration! */
  };

  async componentDidMount() {
    console.log("Events");
    console.log(this.props);
    let value = await authLib.getToken();
    console.log("username");
    console.log(value);
    //authLib.setToken("keemerlloydfcobo2@gmail.com");
  }
  logout() {
    authLib.clearToken();
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    this.props.navigation.dispatch(resetAction);
    this.props.navigation.dispatch({ type: "Logout" });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>Home Page</Text>
        </View>
        <Button title={"logout"} onPress={() => authLib.clearToken()} />
      </View>
    );
  }
}
