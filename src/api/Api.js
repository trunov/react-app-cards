class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  search(query) { 
    return fetch(`${this._url}/search/photos?page=1&query=${query}`, {
      headers: {
        Authorization: `Client-ID ${this._token}`
      }
    }).then((res) => res.json());
  }
}

const token = 'gmzc5JfFWg7EgSOzTugrXseFz_d1t5Npl-vPHwrmkuA';
const api =  new Api('https://api.unsplash.com', token);

export default api;