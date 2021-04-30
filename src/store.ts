import { configureStore, AnyAction, ThunkAction } from "@reduxjs/toolkit";
import pokemonOverviews from "./reducers/pokemonOverviewsSlice";
import pokemonDetails from "./reducers/pokemonDetailsSlice";

export const store = configureStore({
  reducer: {
    pokemonOverviews,
    pokemonDetails,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
