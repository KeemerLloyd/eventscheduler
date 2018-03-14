import React from "react";
import LoginForm from "../components/LoginForm";
import SocialLogin from "../SocialAccount";
import { View } from "react-native";
import styles from "./styles";

const EmailAccount = () => (
  <View style={styles.container}>
    <LoginForm />
  </View>
);

export default EmailAccount;
