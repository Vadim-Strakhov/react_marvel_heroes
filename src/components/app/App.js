import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicLayout = lazy(() =>
  import("../pages/SingleComicLayout/SingleComicLayout")
);
const SingleCharacterLayout = lazy(() =>
  import("../pages/SingleCharacterLayout/SingleCharacterLayout")
);
const SinglePage = lazy(() => import("../pages/SinglePage"));

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
                path="/react_marvel_heroes/comics/:id"
                element={
                  <SinglePage dataType="comic" Component={SingleComicLayout} />
                }
              ></Route>
              <Route
                path="/react_marvel_heroes/characters/:id"
                element={
                  <SinglePage
                    dataType="character"
                    Component={SingleCharacterLayout}
                  />
                }
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
