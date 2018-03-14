import React from "react";
import styles from "./styles";
import { View, Text } from "react-native";
import LottieComponent from "./Lottie/Loading";
import authLib from "../auth/auth.library";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";

class Loading extends React.Component {
  static navigationOptions = {
    mode: "modal",
    header: null
  };

  async componentDidMount() {
    console.log("LoadingPage");

    let { auth } = this.props;
    console.log("isSigning");
    console.log(auth.isSigning);
    if (auth.isSigning == true) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "Home" })]
      });
      this.props.navigation.dispatch(resetAction);
      authLib.setToken("keemerlloydfcobo2");
    } else {
      let check = await authLib.getToken();
      console.log("check");
      console.log(check);
      if (check) {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Home" })]
        });
        this.props.navigation.dispatch(resetAction);
      } else {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Login" })]
        });

        this.props.navigation.dispatch(resetAction);
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <LottieComponent />
      </View>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth });

const mapDispatchToProps = dispatch => ({
  loginScreen: () => dispatch(NavigationActions.navigate({ routeName: "Home" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
