export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}
