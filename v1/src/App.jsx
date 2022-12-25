import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPage, SignInPage, HomePage, AddNewGroupPage, ProtectRouterPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route element={<ProtectRouterPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddNewGroupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
