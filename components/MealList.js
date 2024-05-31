import MealItem from "./MealItem";
import { FlatList, View, StyleSheet } from "react-native";

export default function MealList({ meals, navigation }) {
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

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
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
