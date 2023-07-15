import { StyleSheet, SafeAreaView } from "react-native";
import { Stack } from 'expo-router';

import CryptoCurrency from "../components/CryptoCurrency"

const CryptoCurrencySelector = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Stack.Screen
        options={{
          title: 'Crypto Values',
        }}
      />
      <CryptoCurrency />
    </SafeAreaView>
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