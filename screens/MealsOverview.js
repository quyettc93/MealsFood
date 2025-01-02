import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverview({ route }) {
  const catId = route.params.categoryId;
  // loc ra neu categoryIds cua 1 item nao do co index >= 0 (khi ko tim that ra thi tra ve -1 nen retun la dieu kien loc)
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsOverview;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
