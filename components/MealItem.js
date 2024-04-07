import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  Image,
  Text,
} from "react-native";

export default function MealItem({
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
  onPress,
}) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <View style={styles.contentBox}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.descriptionRow}>
              <Text style={styles.descriptionTextStyle}>{duration}m</Text>
              <Text style={styles.descriptionTextStyle}>
                {complexity.toUpperCase()}
              </Text>
              <Text style={styles.descriptionTextStyle}>
                {affordability.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    margin: 14,
    height: 280,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 16,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    height: 190,
    width: "100%",
  },
  contentBox: {
    width: "100%",
    height: 90,
    alignItems: "center",
    paddingTop: 15,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginBottom: 12,
  },
  descriptionRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  descriptionTextStyle: {
    fontFamily: "open-sans-regular",
  },
});
