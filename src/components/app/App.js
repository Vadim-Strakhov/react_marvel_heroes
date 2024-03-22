import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage } from "../pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/react_marvel_heroes" element={<MainPage />} />
            <Route
              path="/react_marvel_heroes/comics"
              element={<ComicsPage />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
