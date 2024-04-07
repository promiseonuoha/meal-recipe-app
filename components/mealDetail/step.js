import { View, StyleSheet, Text } from "react-native";

export default function ({ data }) {
  return (
    <>
      {data.map((dataPoint) => {
        return (
          <View style={styles.container} key={dataPoint}>
            <Text style={styles.text}>{dataPoint}</Text>
          </View>
        );
      })}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e4b69a",
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 6,
  },
  text: {
    color: "#351401",
    fontFamily: "open-sans-regular",
  },
});
