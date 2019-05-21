export const fetchSongs = (albumId) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json`)
    .then(res=>([res.ok, res.json()]))
    .then(([ok, json])=>{
      if(!ok) throw 'error';
      return json;  
    });
};
