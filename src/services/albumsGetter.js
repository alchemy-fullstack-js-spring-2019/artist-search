export default function albumsGetter(id, currentPage) {
  const offset = currentPage * 10;

  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&limit=10&offset=${offset}&fmt=json`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    });
}




