import React from "react";
import { View, Text } from "react-native";

import styles from "../../styles";

import { DangerZone } from "expo";

let { Lottie } = DangerZone;

export default class LottieComponent extends React.Component {
  static navigationOptions = {
    title: "Fetching Credentials"
  };
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
      <View style={styles.animationContainer}>
        {this.state.animation && (
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={styles.lottie}
            source={require("../../../../../assets/lottie/loading.json")}
          />
        )}
      </View>
    );
  }
}
