import { StyleSheet, View } from "react-native";

import CryptoCurrency from "../components/CryptoCurrency"

const CryptoCurrencySelector = () => {

  return (
    <View style={styles.main}>
      <CryptoCurrency />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
});

export default CryptoCurrencySelector;