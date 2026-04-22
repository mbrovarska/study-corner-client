import type { AuthResponse, SignInPayload, SignUpPayload } from "./types";

const API_BASE_URL = "http://localhost:8080";

async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      data?.message ||
      data?.error ||
      `Request failed with status ${response.status}`;

    throw new Error(message);
  }

  return data as T;
}

export async function signIn(payload: SignInPayload): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse<AuthResponse>(response);
}

export async function signUp(payload: SignUpPayload): Promise<AuthResponse> {
  const response = await fetch(`${API_BASE_URL}/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return handleResponse<AuthResponse>(response);
}
