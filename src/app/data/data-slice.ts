import { RootState } from '@food/state/store';
import { createSelector, createSlice } from '@reduxjs/toolkit';

export const DATA_KEY = 'data';

const initialState: {
  email: string;
  password: string;
  creatingUser: boolean;
  userCreated: boolean;
  error: boolean;
  loading: boolean;
  userLoggedIn: boolean;
} = {
  email: '',
  password: '',
  creatingUser: false,
  userCreated: false,
  error: false,
  loading: false,
  userLoggedIn: false,
};
export const dataSlice = createSlice({
  initialState: initialState,
  name: DATA_KEY,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setCreatingUser(state, action) {
      state.creatingUser = action.payload;
    },
    setUserCreated(state, action) {
      state.userCreated = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setUserLoggedIn(state, action) {
      state.userLoggedIn = action.payload;
    },
  },
});

export const dataReducer = dataSlice.reducer;

export const {
  setEmail,
  setPassword,
  setCreatingUser,
  setUserCreated,
  setError,
  setLoading,
  setUserLoggedIn,
} = dataSlice.actions;

export const getDataState = (rootState: RootState) => rootState.rootReducer;

export const getEmail = createSelector(getDataState, (state) => state.email);
export const getPassword = createSelector(
  getDataState,
  (state) => state.password,
);
export const getCreatingUser = createSelector(
  getDataState,
  (state) => state.creatingUser,
);
export const getUserCreated = createSelector(
  getDataState,
  (state) => state.userCreated,
);
export const getError = createSelector(getDataState, (state) => state.error);
export const getLoading = createSelector(
  getDataState,
  (state) => state.loading,
);
export const getUserLoggedIn = createSelector(
  getDataState,
  (state) => state.userLoggedIn,
);
