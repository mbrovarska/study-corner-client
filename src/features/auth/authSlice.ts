import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { signIn, signUp } from "./authApi";
import type {
  AuthResponse,
  AuthState,
  SignInPayload,
  SignUpPayload,
} from "./types";

// import type { RootState } from "../../app/store";

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem("token"),
};

export const signInUser = createAsyncThunk<
  AuthResponse,
  SignInPayload,
  { rejectValue: string }
>("auth/signInUser", async (payload, thunkAPI) => {
  try {
    return await signIn(payload);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Sign in failed";
    return thunkAPI.rejectWithValue(message);
  }
});

export const signUpUser = createAsyncThunk<
  AuthResponse,
  SignUpPayload,
  { rejectValue: string }
>("auth/signUpUser", async (payload, thunkAPI) => {
  try {
    return await signUp(payload);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Sign up failed";
    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem("token");
    },
    clearAuthError(state) {
      state.error = null;
    },
    restoreSession(
      state,
      action: PayloadAction<{ token: string; user: AuthResponse["user"] }>,
    ) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Sign In failed";
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Sign up failed";
      });
  },
});

export const { logout, clearAuthError, restoreSession } = authSlice.actions;
export default authSlice.reducer;
