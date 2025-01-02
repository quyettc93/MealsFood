import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGirdTile from "../components/CategoryGirdTile";

//{ navigation } tu dong dc cung cap khi CategoriesScreen laf con cua 1 NAVIGATION
function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandle() {
      navigation.navigate("MealsOverView", {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      });
    }
    return (
      <CategoryGirdTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandle}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
