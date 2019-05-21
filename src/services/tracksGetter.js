export default function tracksGetter(albumId) {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json`)
    .then(res => {
      return ([res.ok, res.json()]);
    })
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';
      return json;
    })
    .then(res => res.recordings);
}
