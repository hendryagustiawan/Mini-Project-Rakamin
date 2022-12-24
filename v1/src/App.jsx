import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPage, SignInPage, HomePage } from "/src/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
