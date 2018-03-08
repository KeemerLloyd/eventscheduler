import React from "react";
import Facebook from "./Facebook";
import Google from "./Google";
import { View } from "react-native";

const SocialLogin = () => (
  <View style={{ flex: 1, paddingTop: 10 }}>
    <Facebook />
    <Google />
  </View>
);

export default SocialLogin;
