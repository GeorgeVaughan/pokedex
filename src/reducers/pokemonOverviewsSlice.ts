import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonOverviews } from "../api/fetchPokemonOverviews";
import { PokemonOverviewModel } from "../models/PokemonOverviewModel";
import type { AppThunk, RootState } from "../store";

interface PokemonOverviewsState {
  loading: boolean;
  pokemonOverviews: PokemonOverviewModel[];
}

const initialState: PokemonOverviewsState = {
  loading: false,
  pokemonOverviews: [],
};

export const pokemonOverviewsSlice = createSlice({
  name: "pokemonOverviews",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload,
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
  const { loading } = getState().pokemonOverviews;
  if (!loading) {
    dispatch(pokemonOverviewsSlice.actions.setLoading(true));
    const overviews = await fetchPokemonOverviews();
    dispatch(pokemonOverviewsSlice.actions.setPokemonOverviews(overviews));
  }
};

export const selectPokemonOverviews = (state: RootState) =>
  state.pokemonOverviews.pokemonOverviews;

export default pokemonOverviewsSlice.reducer;
