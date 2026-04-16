import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Articles = lazy(() => import("../pages/Articles/Articles.jsx"));
const AddArticles = lazy(() => import("../pages/AddArticles/AddArticles.jsx"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound.jsx"));
const SingleArticle = lazy(
  () => import("../pages/SingleArticles/SingleArticles.jsx"),
);

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:articlesId" element={<SingleArticle />} />
        <Route path="/articles/add" element={<AddArticles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
