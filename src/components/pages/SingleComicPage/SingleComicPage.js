import { useParams, Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

import useMarvelService from "../../../services/MarvelService";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Spinner from "../../spinner/Spinner";

import "./singleComicPage.scss";

const SingleComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);

  const { loading, error, getComic, clearError } = useMarvelService();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const updateComic = () => {
    //_ очистка ошибки
    clearError();
    //_ запрос на сервер
    getComic(comicId).then(onComicLoaded);
  };

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const errorMessage = error ? <ErrorMessage /> : null; //_ если произошла ошибка
  const spinner = loading ? <Spinner /> : null; //_ спиннер загрузки
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null; //_ если все загрузилось

  return (
    <>
      {errorMessage}
      {spinner}
      {content}
    </>
  );
};

const View = ({ comic }) => {
  const { title, description, pageCount, thumbnail, language, price } = comic;

  return (
    <div className="single-comic">
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__descr">{pageCount}</p>
        <p className="single-comic__descr">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to="/react_marvel_heroes/comics" className="single-comic__back">
        Back to all
      </Link>
    </div>
  );
};

export default SingleComicPage;
