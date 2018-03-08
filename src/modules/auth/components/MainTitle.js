import React from "react";
import { View } from "react-native";
import { RkText as Text } from "react-native-ui-kitten";
import styles from "../styles";

const MainTitle = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.titleText}>InviteUs</Text>
    <Text style={styles.subtitle_titleText}>Event Scheduler App</Text>
  </View>
);

export default MainTitle;
