import React, { useState, useEffect } from "react";
import useMarvelService from "../../services/MarvelService";

import "./randomChar.scss";

import Spinner from "../spinner/Spinner";
import mjolnir from "../../resources/img/mjolnir.png";
import ErrorMessage from "../errorMessage/ErrorMessage";

const RandomChar = () => {
  const [char, setChar] = useState(null);
  const { loading, error, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
    // const timerId = setInterval(updateChar, 60000);

    return () => {
      // clearInterval(timerId);
    };
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
  };

  //_ загрузка рандомного персонажа
  const updateChar = () => {
    clearError(); //_ для очистки ошибки и возобновления работы
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    //_ запрос на сервер
    getCharacter(id).then(onCharLoaded);
  };

  const errorMessage = error ? <ErrorMessage /> : null; //_ если произошла ошибка
  const spinner = loading ? <Spinner /> : null; //_ спиннер загрузки
  const content = !(loading || error || !char) ? <View char={char} /> : null; //_ если все загрузилось

  return (
    <div className="randomchar">
      {errorMessage}
      {spinner}
      {content}
      <div className="randomchar__static">
        <p className="randomchar__title">
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p className="randomchar__title">Or choose another one</p>
        <button onClick={updateChar} className="button button__main">
          <div className="inner">try it</div>
        </button>
        <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
      </div>
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;

  let imgStyle = { objectFit: "cover" };

  if (
    thumbnail ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ||
    thumbnail ===
      "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"
  ) {
    imgStyle = { objectFit: "contain" };
  }

  return (
    <div className="randomchar__block">
      <img
        src={thumbnail}
        alt="Random character"
        className="randomchar__img"
        style={imgStyle}
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a
            href={homepage}
            target="_blank"
            className="button button__main"
            rel="noreferrer"
          >
            <div className="inner">homepage</div>
          </a>
          <a
            href={wiki}
            target="_blank"
            className="button button__secondary"
            rel="noreferrer"
          >
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
