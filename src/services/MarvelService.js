class MarvelService {
  apiBase = "https://gateway.marvel.com:443/v1/public/";
  apiKey = "apikey=b860ae4f50120b46e53bb6d38bbb7db4";

  //_ отправка запроса
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  //_ получение всех персонажей
  getAllCharacters = async () => {
    const res = await this.getResource(
      `${this.apiBase}characters?limit=9&offset=210&${this.apiKey}`
    );
    // console.log(res);
    return res.data.results.map(this.transformCharacter);
  };
  //_ получение персонажа по id
  getCharacter = async (id) => {
    const res = await this.getResource(
      `${this.apiBase}/characters/${id}?&${this.apiKey}`
    );
    // console.log(res);
    return this.transformCharacter(res.data.results[0]);
  };

  transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    };
  };
}

export default MarvelService;
