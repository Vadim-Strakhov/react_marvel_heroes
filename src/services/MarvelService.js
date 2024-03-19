import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const apiBase = "https://gateway.marvel.com:443/v1/public/";
  const apiKey = "apikey=b860ae4f50120b46e53bb6d38bbb7db4";
  const baseOffset = 180;

  //_ получение всех персонажей
  const getAllCharacters = async (offset = baseOffset) => {
    const res = await request(
      `${apiBase}characters?limit=9&offset=${offset}&${apiKey}`
    );
    // console.log(res);
    // console.log("Current offset:", offset);
    return res.data.results.map(transformCharacter);
  };
  //_ получение персонажа по id
  const getCharacter = async (id) => {
    const res = await request(`${apiBase}/characters/${id}?&${apiKey}`);
    // console.log(res);
    return transformCharacter(res.data.results[0]);
  };

  const transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  const getAllComics = async (offset = 0) => {
    const res = await request(
      `${apiBase}comics?limit=8&offset=${offset}&${apiKey}`
    );
    // console.log(res.data.results.map(transformComics));
    return res.data.results.map(transformComics);
  };

  const getComics = async (id) => {
    const res = await request(`${apiBase}comics/${id}?${apiKey}`);
    // console.log(transformComics(res.data.results[0]));
    return res;
  };

  const transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || "There is no description",
      pageCount: comics.pageCount
        ? `${comics.pageCount} p.`
        : "No information about the number of pages",
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      language: comics.textObjects[0]?.language || "en-us",
      price: comics.prices[0].price
        ? `${comics.prices[0].price}$`
        : "not available",
      url: comics.urls[0].url,
    };
  };

  return {
    loading,
    error,
    clearError,
    getAllCharacters,
    getCharacter,
    getAllComics,
    getComics,
  };
};

export default useMarvelService;
