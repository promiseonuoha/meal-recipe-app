import { useLayoutEffect } from "react";

import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

import { MEALS, CATEGORIES } from "../data/dummy-data";

export default function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0
  );

  const renderItem = (itemData) => {
    let item = itemData.item;
    let propsObject = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      onPress: () => {
        navigation.navigate("MealDetails", {
          mealId: item.id,
        });
      },
    };

    return <MealItem {...propsObject} />;
  };

  useLayoutEffect(() => {
    const screenTitle = CATEGORIES.find((item) => item.id === catId).title;

    navigation.setOptions({
      title: screenTitle,
    });
  }, [CATEGORIES, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#3f2f25",
  },
});
