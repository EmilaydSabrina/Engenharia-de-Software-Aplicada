import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { PrivateLayout } from "./layouts/PrivateLayout";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <Routes>
      <Route path="/*" element={<DefaultLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
