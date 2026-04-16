import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header.jsx";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Articles = lazy(() => import("../pages/Articles/Articles.jsx"));
const AddArticles = lazy(() => import("../pages/AddArticles/AddArticles.jsx"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.jsx"));
const SingleArticle = lazy(
  () => import("../pages/SingleArticles/SingleArticles.jsx"),
);
const Login = lazy(() => import("../pages/Login/Login.jsx"));
const Register = lazy(() => import("../pages/Register/Register.jsx"));

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:articlesId" element={<SingleArticle />} />
        <Route path="/articles/add" element={<AddArticles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
