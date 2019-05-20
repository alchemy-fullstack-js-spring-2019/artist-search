export const getArtists = (search) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get artists';

      return json;
    })
    .then(({ artists }) => artists.map(artist => ({
      name: artist.name
    })));
};
