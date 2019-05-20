export default function artworkGetter(id) {
  return fetch(`http://coverartarchive.org/release/${id}/front`)
    .then(res => res);
}
