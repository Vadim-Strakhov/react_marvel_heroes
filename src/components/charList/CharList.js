import { Component } from "react";

import "./charList.scss";

import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    // //_ чтобы убрать двойное монтирование, если нужно
    // if (this.fetchPromise) {
    //   return;
    // }

    // this.fetchPromise = fetch(
    //   this.marvelService
    //     .getAllCharacters()
    //     // .then(this.onCharListLoaded)
    //     .then((data) => {
    //       console.log("Данные, полученные в getAllCharacters():", data);
    //       this.onCharListLoaded(data);
    //     })
    //     .catch(this.onError)
    // );

    this.marvelService
      .getAllCharacters()
      .then(this.onCharListLoaded)
      .catch((error) => {
        console.log("Произошла ошибка при получении персонажей:", error); //_ чтобы увидеть ошибку
        this.onError();
      });
  }

  onCharListLoaded = (charList) => {
    this.setState({
      charList,
      loading: false,
    });
  };

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  renderItems(arr) {
    const items = arr.map((item) => {
      let imgStyle = { objectFit: "cover" };
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "contain" };
      }

      return (
        <li className="char__item" key={item.id}>
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });

    return <ul className="char__grid">{items}</ul>;
  }

  render() {
    const { charList, loading, error } = this.state;

    const items = this.renderItems(charList);

    const errorMessage = error ? <ErrorMessage /> : null; //_ если произошла ошибка
    const spinner = loading ? <Spinner /> : null; //_ спиннер загрузки
    const content = !(loading || error) ? items : null; //_ если все загрузилось
    return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
