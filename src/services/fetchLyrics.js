export const fetchLyrics = (artistName, songName) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`)
    .then(res=>([res.ok, res.json()]))
    .then(([ok, json])=>{
      if(!ok) throw 'error';
      return json;  
    });
};
