import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPokemonDetails } from "../api/fetchPokemonDetails";
import { PokemonDetailsModel } from "../models/PokemonDetailsModel";
import type { AppThunk, RootState } from "../store";

interface PokemonDetailsState {
  loading: Record<string, boolean>;
  pokemonDetails: Record<string, PokemonDetailsModel | undefined>;
}

const initialState: PokemonDetailsState = {
  loading: {},
  pokemonDetails: {},
};

export const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  reducers: {
    setLoading: (
      state,
      action: PayloadAction<{ name: string; loading: boolean }>
    ) => ({
      ...state,
      loading: {
        ...state.loading,
        [action.payload.name]: action.payload.loading,
      },
    }),
    addPokemonDetails: (
      state,
      action: PayloadAction<{ name: string; details: PokemonDetailsModel }>
    ) => ({
      ...state,
      pokemonDetails: {
        ...state.pokemonDetails,
        [action.payload.name]: action.payload.details,
      },
    }),
  },
});

export const loadPokemonDetails = (name: string): AppThunk => async (
  dispatch,
  getState
) => {
  const loading = selectLoadingPokemonDetails(name)(getState());
  if (!loading) {
    dispatch(pokemonDetailsSlice.actions.setLoading({ name, loading: true }));
    const details = await fetchPokemonDetails({ name });
    dispatch(pokemonDetailsSlice.actions.addPokemonDetails({ name, details }));
  }
};

export const selectLoadingPokemonDetails = (name: string) => (
  state: RootState
) => state.pokemonDetails.loading[name];

export const selectPokemonDetails = (name: string) => (state: RootState) =>
  state.pokemonDetails.pokemonDetails[name];

export default pokemonDetailsSlice.reducer;
