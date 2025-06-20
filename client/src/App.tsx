import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./_root/rootLayout";
import Home from "./_root/Home";
import AuthLayout from "./_auth/authLayout";
import Login from "./_auth/Login";
import Register from "./_auth/Register";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
