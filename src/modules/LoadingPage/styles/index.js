import { RkStyleSheet } from "react-native-ui-kitten";
import { scale } from "../../../utils/scale";
import { Platform } from "react-native";

export default RkStyleSheet.create(theme => ({
  animationContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lottie: {
    width: scale(160),
    height: scale(160),
    backgroundColor: "transparent"
  }
}));
