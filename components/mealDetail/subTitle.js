import { View, StyleSheet, Text } from "react-native";

export default function SubTitle({ name }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    width: "100%",
    padding: 6,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#e4b69a",
    marginBottom: 12,
  },
  text: {
    color: "#e4b69a",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});
