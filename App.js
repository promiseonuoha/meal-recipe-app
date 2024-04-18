import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

// SCREENS
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";
import MealDetails from "./screens/MealDetails";
import LoadingScreen from "./screens/LoadingScreen";
import FavouriteScreen from "./screens/FavouriteScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const ScreenStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Categories() {
  return (
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
  );
}

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
        <BottomTabs.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: "#351401",
              borderBlockColor: "#351401",
            },
            tabBarInactiveTintColor: "white",
            tabBarActiveTintColor: "#e48752",
          }}
        >
          <BottomTabs.Screen
            name="Categories"
            component={Categories}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Ionicons name="list" color={color} size={17} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="Favourites"
            component={FavouriteScreen}
            options={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              headerTitleStyle: { fontFamily: "open-sans-bold" },
              headerShadowVisible: false,
              tabBarIcon: ({ color }) => (
                <Ionicons name="star" color={color} size={17} />
              ),
            }}
          />
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
