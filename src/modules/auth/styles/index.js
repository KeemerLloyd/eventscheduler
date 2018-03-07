import { RkStyleSheet } from "react-native-ui-kitten";
import { scale } from "../../../utils/scale";
import { Platform } from "react-native";

export default RkStyleSheet.create(theme => ({
  lottie: {
    width: scale(200),
    height: scale(200),
    backgroundColor: "transparent"
  },
  animationContainer: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  buttonContainer: {
    paddingTop: 20
  },
  titleContainer: {
    flex: 2,
    paddingVertical: scale(10),
    justifyContent: "center",
    alignItems: "center"
  },
  titleText: {
    fontFamily: Platform.OS === "ios" ? "AlNile-Bold" : "notoserif",
    color: "#fc4312",
    fontSize: scale(58),
    fontWeight: "bold",
    padding: scale(5)
  },
  subtitle_titleText: {
    fontFamily: "monospace",
    color: "#fff",
    fontSize: scale(16)
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  background: {
    flex: 1,
    height: "auto",
    width: "100%",
    zIndex: -1
  },
  mainContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    padding: scale(15)
  }
}));
