import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPage, SignInPage } from "/src/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
