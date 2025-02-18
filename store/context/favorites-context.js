import { createContext } from "react";
import { useState } from "react";
const FavoritesContext = createContext({
  ids: [], // Danh sách ID yêu thích
  addFavorite: (id) => {}, // Hàm giả để tránh lỗi
  removeFavorite: (id) => {}, // Hàm giả để tránh lỗi
});
function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);
  function addFavorite(id) {
    setFavoriteMealIds((curentFavIds) => [...curentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteMealIds((curentFavIds) =>
      curentFavIds.filter((mealId) => mealId !== id)
    );
  }
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
export { FavoritesContext, FavoritesContextProvider };
