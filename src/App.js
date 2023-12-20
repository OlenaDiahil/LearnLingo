import { Navigate, Route, Routes } from "react-router-dom";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import TeachersPage from "./pages/TeachersPage/TeachersPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

export default App;