export const fetchArtists = (searchName, offset = 1) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchName}&fmt=json&limit=25&offset=${offset}`)
    .then(res=>([res.ok, res.json()]))
    .then(([ok, json])=>{
      if(!ok) throw 'error';
      return json;  
    });
};
