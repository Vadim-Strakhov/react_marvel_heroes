import "./charInfo.scss";

import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

import useMarvelService from "../../services/MarvelService";
import setContent from "../../utils/setContent";

const CharInfo = (props) => {
  const [char, setChar] = useState(null);

  const { getCharacter, clearError, process, setProcess } = useMarvelService();

  useEffect(() => {
    updateChar();
  }, [props.charId]);

  const updateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }

    //_ очистка ошибки
    clearError();
    //_ запрос на сервер
    getCharacter(charId)
      .then(onCharLoaded)
      .then(() => setProcess("confirmed"));
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  return <div className="char__info">{setContent(process, View, char)}</div>;
};

const View = ({ data }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = data;

  let imgStyle = { objectFit: "cover" };
  if (
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    imgStyle = { objectFit: "contain" };
  }

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt={name} style={imgStyle} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
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
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">
        {comics.length > 0 ? null : "There is no comics with this character"}
        {comics.map((item, i) => {
          if (i > 9) return; //_ для ограничения числа комиксов в информации о персонаже
          return (
            <li key={i} className="char__comics-item">
              {item.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

CharInfo.propTypes = {
  charId: PropTypes.number,
};

export default CharInfo;
