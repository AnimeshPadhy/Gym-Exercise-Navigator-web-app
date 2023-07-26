export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7a3186a769msh7aed6ed7d0bffcdp114d26jsn0eafed7d639b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '7a3186a769msh7aed6ed7d0bffcdp114d26jsn0eafed7d639b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
