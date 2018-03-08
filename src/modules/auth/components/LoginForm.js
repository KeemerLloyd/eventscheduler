import React from "react";
import { View } from "react-native";
import { TextInput as Input, Text } from "react-native";
import themes from "../themes";
import styles from "../styles";

const LoginForm = () => (
  <View style={{ flex: 1 }}>
    <View style={styles.input}>
      <Input
        style={{ fontSize: 16 }}
        placeholder="Email"
        blurOnSubmit={true}
        underlineColorAndroid={"transparent"}
      />
    </View>
    <View style={{ paddingTop: 8 }}>
      <View style={styles.input}>
        <Input
          style={{ fontSize: 16 }}
          placeholder="Password"
          blurOnSubmit={true}
          underlineColorAndroid={"transparent"}
        />
      </View>
    </View>
    <View style={styles.signuplogin}>
      <View style={{ flex: 1, flexDirection: "row", paddingTop: 8 }}>
        <Text style={{ color: "#f4edea" }}>No Account?</Text>
        <Text style={{ color: "#f4eded", paddingLeft: 2 }}> SignUp</Text>
      </View>
      <View style={styles.loginButton}>
        <Text style={{ color: "#f4eded" }}> Login </Text>
      </View>
    </View>
  </View>
);

export default LoginForm;
