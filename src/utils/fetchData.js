export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": 'fad138752bmshc4756e5328cb5dep1cddc4jsn47529eb6465a',
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'fad138752bmshc4756e5328cb5dep1cddc4jsn47529eb6465a',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
