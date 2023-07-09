import { StyleSheet, View } from "react-native";
import Login from "../components/login"

export default function Page() {
  return (
    <View style={styles.main}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
});
