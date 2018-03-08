import React from "react";
import Facebook from "./Facebook";
import Google from "./Google";
import Twitter from "./Twitter";
import { View } from "react-native";
import Lottie from "../Lottie";

const SocialLogin = () => (
  <View style={{ flex: 1, paddingTop: 10 }}>
    <Facebook />
    <Google />
    <Lottie />
  </View>
);

export default SocialLogin;
