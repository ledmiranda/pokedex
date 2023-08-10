import { createSlice } from '@reduxjs/toolkit';

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

const LoadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const loadingActions = LoadingSlice.actions;

export default LoadingSlice;
