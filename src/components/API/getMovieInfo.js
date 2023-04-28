export function getGenres({ genres }) {
  if (!genres) return;
  return genres.map(genre => genre.name).join(', ');
}
export function getMovieYearInfo({ release_date }) {
  return new Date(release_date).getFullYear();
}
export function getUserScore({ vote_average }) {
  return (Number(vote_average) * 10).toFixed(0) + '%';
}
