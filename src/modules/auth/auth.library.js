import { AsyncStorage } from "react-native";
export default {
  async setToken(token: String): Promise<boolean> {
    await AsyncStorage.setItem("email", token);
    return true;
  },

  async getToken(): Promise<string> {
    const value = await AsyncStorage.getItem("email");
    //console.log("value");
    //console.log(value);
    return value;
  },

  clearToken(): void {
    AsyncStorage.multiRemove(["email"]);
  }
};
