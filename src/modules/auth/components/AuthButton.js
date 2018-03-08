import React from "react";
import { View, Image, Platform } from "react-native";
import { RkText as Text, RkButton } from "react-native-ui-kitten";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles";

class AuthButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ paddingTop: 8 }}>
        <Icon.Button
          name={this.props.icon}
          backgroundColor={this.props.bgColor}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <Text
              style={{
                fontFamily: Platform.OS === "ios" ? "AlNile-Bold" : "notoserif",
                fontSize: 15,
                color: "#FFF"
              }}
            >
              Login with {this.props.text}
            </Text>
          </View>
        </Icon.Button>
      </View>
    );
  }
}
export default AuthButton;
