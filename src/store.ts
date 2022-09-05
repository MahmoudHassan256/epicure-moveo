import { configureStore } from "@reduxjs/toolkit";
import ChefsSlice from "./Slicers/ChefsSlice";
import DishesSlice from "./Slicers/DishesSlice";
import RestaurantsSlice from "./Slicers/RestaurantsSlice";
import  SelectedDishSlice  from "./Slicers/SelectedDishSlice";


export default configureStore({
    reducer:{
        restaurants:RestaurantsSlice,
        dishes:DishesSlice,
        chefs:ChefsSlice,
        selecteddish:SelectedDishSlice,
    },
})
