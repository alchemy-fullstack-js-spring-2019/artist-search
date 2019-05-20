export const fetchArtists = (searchName) => {
  console.log('searchname', searchName);
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchName}&fmt=json&limit=25`)
    .then(res=>([res.ok, res.json()]))
    .then(([ok, json])=>{
      if(!ok) throw 'error';
      return json;  
    });
};
