import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

export default function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (item) => item.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const screenTitle = CATEGORIES.find((item) => item.id === catId).title;

    navigation.setOptions({
      title: screenTitle,
    });
  }, [CATEGORIES, navigation]);

  return <MealList meals={displayedMeals} navigation={navigation} />;
}
