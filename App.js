import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

// SCREENS
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import LoadingScreen from "./screens/LoadingScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFonts } from "expo-font";

const ScreenStack = createStackNavigator();

export default function App() {
  const [isFontsLoaded] = useFonts({
    "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!isFontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <ScreenStack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            headerTitleStyle: { fontFamily: "open-sans-bold" },
            headerShadowVisible: false,
          }}
        >
          <ScreenStack.Screen
            name="MealsCategory"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <ScreenStack.Screen name="MealsOverview" component={MealsOverview} />
          <ScreenStack.Screen name="MealDetails" component={MealDetails} />
        </ScreenStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
