const API_KEY = 'AIzaSyDnYtwOHrb6nG4RIEHk4Sy6IkZZ77UGDfk';

function setParamsSearch(key, q, part, maxResults){
  let url = new URL("https://www.googleapis.com/youtube/v3/search");
  let params = { key, q, part, maxResults };
  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key])
  });
  return url
}

export const searchVideos = (text) => {
  let url = setParamsSearch(API_KEY, text, 'snippet', 20);
  return new Promise(function(resolve, reject) {
    fetch(url)
      .then((response) => { return response.json() })
      .then((data) => {
        let videos = data.items;
        resolve(videos);
      })
  });
}

export const hola = (text) => {
  console.log(text);
}
