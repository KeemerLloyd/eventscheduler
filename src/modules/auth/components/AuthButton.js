import React from "react";
import styles from "../styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Platform, TouchableOpacity, Alert } from "react-native";
import { RkText as Text, RkButton } from "react-native-ui-kitten";

class AuthButton extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    let { loginScreen, navigation } = this.props;
    return (
      <TouchableOpacity style={{ paddingTop: 8 }} onPress={loginScreen}>
        <View
          style={{
            flexDirection: "row",
            padding: 6,
            backgroundColor: this.props.bgColor
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: this.props.bgColor
            }}
          >
            <Icon
              name={this.props.icon}
              size={26}
              color="#900"
              style={styles.subtitle_titleText}
            />
          </View>
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
        </View>
      </TouchableOpacity>
    );
  }
}

AuthButton.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginScreen: () => {
    dispatch(NavigationActions.navigate({ routeName: "LoadingPage" }));
    dispatch({ type: "SignIn" });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
