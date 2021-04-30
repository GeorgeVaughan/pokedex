import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonOverviews } from "../api/fetchPokemonOverviews";
import { PokemonOverviewModel } from "../models/PokemonOverviewModel";
import type { AppThunk, RootState } from "../store";

type LoadState = "pending" | "in-progress" | "complete";

interface PokemonOverviewsState {
  loadState: LoadState;
  pokemonOverviews: PokemonOverviewModel[];
}

const initialState: PokemonOverviewsState = {
  loadState: "pending",
  pokemonOverviews: [],
};

export const pokemonOverviewsSlice = createSlice({
  name: "pokemonOverviews",
  initialState,
  reducers: {
    setLoadState: (state, action: PayloadAction<LoadState>) => ({
      ...state,
      loadState: action.payload,
    }),
    setPokemonOverviews: (
      state,
      action: PayloadAction<PokemonOverviewModel[]>
    ) => ({
      ...state,
      pokemonOverviews: action.payload,
    }),
  },
});

export const loadPokemonOverviews = (): AppThunk => async (
  dispatch,
  getState
) => {
  const loadState = selectPokemonOverviewsLoadState(getState());
  if (loadState === "pending") {
    dispatch(pokemonOverviewsSlice.actions.setLoadState("in-progress"));
    const overviews = await fetchPokemonOverviews();
    dispatch(pokemonOverviewsSlice.actions.setPokemonOverviews(overviews));
    dispatch(pokemonOverviewsSlice.actions.setLoadState("complete"));
  }
};

export const selectPokemonOverviewsLoadState = (state: RootState) =>
  state.pokemonOverviews.loadState;

export const selectPokemonOverviews = (state: RootState) =>
  state.pokemonOverviews.pokemonOverviews;

export default pokemonOverviewsSlice.reducer;
