import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
  const handleNavigate = (id) => {
    navigation.navigate("MealsOverview", { categoryId: id });
  };

  return (
    <FlatList
      style={{ backgroundColor: "#3f2f25" }}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => handleNavigate(itemData.item.id)}
        />
      )}
      numColumns={2}
    />
  );
}
