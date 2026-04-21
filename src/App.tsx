import { Routes, Route } from "react-router";
import "./App.css";
import HomePage from "./pages/home-page";
import SignUpPage from "./pages/sign-up";
import SignInPage from "./pages/sign-in";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </>
  );
}

export default App;
