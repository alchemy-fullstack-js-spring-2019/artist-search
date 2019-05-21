export const getArtists = (search, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=10&offset=${(page - 1) * 10}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get artists';

      return json;
    })
    .then(({ artists, count }) => ({
      totalPages: Math.ceil(count / 10),
      artists: artists.map(artist => ({
        name: artist.name,
        id: artist.id
      }))
    }));
};

export const getReleases = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to get releases';

      return json.releases;
    })
    .then(releases => releases.map(release => ({
      title: release.title,
      id: release.id,
      date: release.date,
      coverArt: release['cover-art-archive'].front
    })));
};
