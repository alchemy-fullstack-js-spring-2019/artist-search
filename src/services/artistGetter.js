export default function artistGetter(artist, currentPage) {
  const offset = currentPage * 10;

  return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&offset=${offset}&limit=10`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';

      return json;
    });
}
