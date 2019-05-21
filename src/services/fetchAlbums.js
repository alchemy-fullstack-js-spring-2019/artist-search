export const fetchAlbums = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res=>([res.ok, res.json()]))
    .then(([ok, json])=>{
      if(!ok) throw 'error';
      return json;  
    });
};
