// Exemplos genéricos de função fetch assíncrona para fazer chamadas de API's

const fetchExemplo = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(url);
    const planets = await response.json();
    return planets.results;
  };
  
// export default fetchExemplo;

const getMusics = async (id) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const requestJson = await request.json();
  return requestJson.results;
};

// export default getMusics;
