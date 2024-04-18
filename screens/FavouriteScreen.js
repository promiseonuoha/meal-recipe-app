import { Text, View, StyleSheet } from "react-native";

export default function FavouriteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>COMING SOON...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3f2f25",
    justifyContent: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 18,
  },
});
