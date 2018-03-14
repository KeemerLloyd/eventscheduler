import React from "react";
import Google from "./Google";
import LottieComponent from "../Lottie/Login";
import Twitter from "./Twitter";
import Facebook from "./Facebook";
import { View } from "react-native";
import styles from "./styles.js";

const SocialLogin = () => (
  <View style={styles.container}>
    <Facebook />
    <Google />
  </View>
);

export default SocialLogin;
