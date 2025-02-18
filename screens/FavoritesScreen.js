import { View, Text, StyleSheet } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import MealList from "../components/MealList/MealList";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  //loc ra nhung mon an ma trong mang favoriteMeal chua id cua meal tong
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text>Ko co muc nao yeu thich</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
