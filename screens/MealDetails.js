import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import SubTitle from "../components/mealDetail/subTitle";
import Step from "../components/mealDetail/step";

export default function MealDetails({ route }) {
  const mealId = route.params.mealId;
  const mealItem = MEALS.find((item) => item.id === mealId);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={{ uri: mealItem.imageUrl }} />
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.title}>{mealItem.title}</Text>
        <View style={styles.descriptionRow}>
          <Text style={styles.descriptionTextStyle}>{mealItem.duration}m</Text>
          <Text style={styles.descriptionTextStyle}>
            {mealItem.complexity.toUpperCase()}
          </Text>
          <Text style={styles.descriptionTextStyle}>
            {mealItem.affordability.toUpperCase()}
          </Text>
        </View>
        <View>
          <SubTitle name={"INGREDIENTS"} />
          <Step data={mealItem.ingredients} />
          <SubTitle name={"STEPS"} />
          <Step data={mealItem.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },
  imageContainer: {
    width: "100%",
    height: 350,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  contentBox: {
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    marginBottom: 12,
  },
  descriptionRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 16,
  },
  descriptionTextStyle: {
    fontFamily: "open-sans-regular",
    color: "white",
  },
});
