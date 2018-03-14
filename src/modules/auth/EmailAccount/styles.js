import { RkStyleSheet } from "react-native-ui-kitten";
import { scale } from "../../../utils/scale";

export default RkStyleSheet.create(theme => ({
  container: {
    flex: scale(0.8),
    paddingBottom: scale(10),
    backgroundColor: "transparent",
    justifyContent: "flex-start"
  }
}));
