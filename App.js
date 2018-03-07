import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Flatlist,
  Button
} from "react-native";

import styles from "./src/modules/auth/styles";
import { RkButton, RkText } from "react-native-ui-kitten";
import { DangerZone } from "expo";

let { Lottie } = DangerZone;
const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    animation: null
  };

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };
  _loadAnimationAsync = async () => {
    let result = await fetch(
      "https://cdn.rawgit.com/airbnb/lottie-react-native/635163550b9689529bfffb77e489e4174516f1c0/example/animations/Watermelon.json"
    );

    this.setState(
      { animation: JSON.parse(result._bodyText) },
      this._playAnimation
    );
  };
  componentWillMount() {
    this._playAnimation();
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require("./assets/images/loginbp.png")}
        />
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <RkText style={styles.titleText}>InviteUs</RkText>
            <RkText style={styles.subtitle_titleText}>
              Event Scheduler App
            </RkText>
          </View>
          <View style={styles.animationContainer}>
            {this.state.animation && (
              <Lottie
                ref={animation => {
                  this.animation = animation;
                }}
                style={styles.lottie}
                source={require("./assets/lottie/techno_penguin.json")}
              />
            )}
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <RkButton rkType="small">Login</RkButton>
          </View>
        </View>
      </View>
    );
  }
}
