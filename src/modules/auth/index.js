import React from "react";
import styles from "./styles";
import { DangerZone } from "expo";
import LottieComponent from "./Lottie/Login";
import MainTitle from "./components/MainTitle";
import SocialLogin from "./SocialAccount";
import EmailAccount from "./EmailAccount";
import { View, Dimensions, Image } from "react-native";
import authLib from "./auth.library";

let { Lottie } = DangerZone;
let bg_img = "../../../assets/images/loginbp.png";
const { width, height } = Dimensions.get("window");

export default class Auth extends React.Component {
  static navigationOptions = {
    mode: "modal",
    header: null
  };
  async componentDidMount() {
    console.log("Auth Page");
    console.log(this.props);
    const myemail = await authLib.getToken();
    console.log(myemail);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={require(bg_img)} />

        <View style={styles.mainContainer}>
          <MainTitle />
          <EmailAccount />
          <SocialLogin />
        </View>
      </View>
    );
  }
}
