import React, { useState, useEffect } from "react";
import useMarvelService from "../../services/MarvelService";

import "./comicsList.scss";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [offset, setOffset] = useState(180);

  const { getAllComics } = useMarvelService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    getAllComics(offset).then(onComicsListLoaded);
  };

  const onComicsListLoaded = (newList) => {
    setComicsList([...comicsList, ...newList]);
    setOffset(offset + 9);
  };

  return (
    <div className="comics__list">
      <ul className="comics__grid">
        {comicsList &&
          comicsList.map(function (comic, index) {
            return (
              <li key={comic.id + index} className="comics__item">
                <a href={comic.urls[0]["url"]} target="_blank" rel="noreferrer">
                  <img
                    src={
                      comic.thumbnail["path"] +
                      "." +
                      comic.thumbnail["extension"]
                    }
                    alt="ultimate war"
                    className="comics__item-img"
                  />
                  <div className="comics__item-name">{comic.title}</div>
                  <div className="comics__item-price">
                    {comic.prices[0]["price"] + "$"}
                  </div>
                </a>
              </li>
            );
          })}
      </ul>
      <button
        className="button button__main button__long"
        onClick={() => onRequest()}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
