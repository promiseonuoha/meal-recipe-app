import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export default function FavouriteButton({ name, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.root, pressed ? { opacity: 0.5 } : null]}
    >
      <Ionicons name={name} size={20} color="white" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: { marginRight: 15 },
});
