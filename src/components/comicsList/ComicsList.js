import "./comicsList.scss";

import React, { useState, useEffect } from "react";
import useMarvelService from "../../services/MarvelService";
import { Link } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

const setContent = (process, Component, newItemLoading) => {
  switch (process) {
    case "waiting":
      return <Spinner />;
    case "loading":
      return newItemLoading ? <Component /> : <Spinner />;
    case "confirmed":
      return <Component />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Unexpected process state");
  }
};

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(100);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { getAllComics, process, setProcess } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true);
    getAllComics(offset)
      .then(onComicsListLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length > 8) {
      ended = true;
    }
    setComicsList([...comicsList, ...newComicsList]);
    setNewItemLoading(false);
    setOffset(offset + 8);
    setComicsEnded(ended);
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      return (
        <CSSTransition key={item.id} timeout={500} classNames="comics__item">
          <li key={item.id + i} className="comics__item">
            <Link to={`/react_marvel_heroes/comics/${item.id}`}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="comics__item-img"
              />
              <div className="comics__item-name">{item.title}</div>
              <div className="comics__item-price">{item.price}</div>
            </Link>
          </li>
        </CSSTransition>
      );
    });

    return (
      <ul className="comics__grid">
        <TransitionGroup component={null}>{items}</TransitionGroup>
      </ul>
    );
  }

  return (
    <div className="comics__list">
      {setContent(process, () => renderItems(comicsList), newItemLoading)}
      <button
        disabled={newItemLoading}
        style={{ display: comicsEnded ? "none" : "block" }}
        className="button button__main button__long"
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
