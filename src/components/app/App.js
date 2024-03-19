import React, { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import SingleComic from "../singleComic/SingleComic";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from "../appBanner/AppBanner";

import decoration from "../../resources/img/vision.png";

const App = () => {
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  };

  return (
    <div className="app">
      <AppHeader />
      <main>
        {/* // _ предохранитель для ошибок */}
        {/* <ErrorBoundary>
          <RandomChar />
        </ErrorBoundary> */}

        <div className="char__content">
          {/* <ErrorBoundary>
            <CharList onCharSelected={onCharSelected} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary> */}
          {/* <AppBanner /> */}
          <ComicsList />
          {/* <SingleComic /> */}
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
};

export default App;
