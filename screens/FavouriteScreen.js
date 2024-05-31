import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

import { useSelector } from "react-redux";

export default function FavouriteScreen({ navigation }) {
  const favouriteMealsIds = useSelector((state) => state.favourite.mealIds);
  const favouriteMeals = MEALS.filter((item) =>
    favouriteMealsIds.includes(item.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favourite meal</Text>
      </View>
    );
  }

  return <MealList meals={favouriteMeals} navigation={navigation} />;
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
