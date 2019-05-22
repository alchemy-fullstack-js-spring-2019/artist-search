export default function getLyrics(artistName, songTitle) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${artistName}&q_track=${songTitle}&page_size=1&page=1&s_track_rating=desc&apikey=e59201c8c9953029add9f459b0817af3`)
    .then(res => res.json())
    .then(song => song.message.body.track_list[0].track.track_id)
    .then(songId => {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${songId}&apikey=e59201c8c9953029add9f459b0817af3`);
    })
    .then(res => res.json())
    .then(res => res.message.body.lyrics.lyrics_body);
}
