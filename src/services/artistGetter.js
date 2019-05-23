export default function artistGetter(artist, currentPage) {
  const offset = currentPage * 10;

  return fetch(`https://musicbrainz.org/ws/2/artist?query=${artist}&offset=${offset}&limit=10&fmt=json`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';

      return json;
    });
}
