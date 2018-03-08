import React from "react";
import styles from "./styles";
import { DangerZone } from "expo";
import LottieComponent from "./Lottie";
import MainTitle from "./components/MainTitle";
import SocialLogin from "./SocialAccount";
import EmailAccount from "./EmailAccount";
import { View, Dimensions, Image } from "react-native";

let { Lottie } = DangerZone;
let bg_img = "../../../assets/images/loginbp.png";
const { width, height } = Dimensions.get("window");

export default class Auth extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background} source={require(bg_img)} />
        <View style={styles.mainContainer}>
          <MainTitle />
          <LottieComponent />
          <EmailAccount />
          <SocialLogin />
        </View>
      </View>
    );
  }
}
