import { Suspense, lazy } from "react";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicPage = lazy(() =>
  import("../pages/SingleComicPage/SingleComicPage")
);

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/react_marvel_heroes" element={<MainPage />} />
              <Route
                path="/react_marvel_heroes/comics"
                element={<ComicsPage />}
              />
              <Route
                path="/react_marvel_heroes/comics/:comicId"
                element={<SingleComicPage />}
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
