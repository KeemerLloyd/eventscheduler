import React from "react";
import LoginForm from "../components/LoginForm";
import SocialLogin from "../SocialAccount";
import { View } from "react-native";

const EmailAccount = () => (
  <View style={{ flex: 1, paddingBottom: 10 }}>
    <LoginForm />
  </View>
);

export default EmailAccount;
