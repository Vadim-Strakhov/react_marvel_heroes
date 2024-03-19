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

  const getAllComics = async (offset = baseOffset) => {
    const res = await request(
      `${apiBase}comics?limit=8&offset=${offset}&${apiKey}`
    );
    // console.log(res.data.results);
    return res.data.results;
  };

  return {
    loading,
    error,
    clearError,
    getAllCharacters,
    getCharacter,
    getAllComics,
  };
};

export default useMarvelService;
