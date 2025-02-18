import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  // loc ra neu categoryIds cua 1 item nao do co index >= 0 (khi ko tim that ra thi tra ve -1 nen retun la dieu kien loc)
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  //dungf useLayoutEffect  de thay doi title cua navigation (layout de muot hon)
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    console.log("categoryTitle: ", categoryTitle);
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealList items={displayedMeals} />;
}
export default MealsOverviewScreen;
