import MovieCard from './MovieCard';

const MovieList = ({ movies, watchlist, onAdd, onRemove }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onAdd={onAdd}
          onRemove={onRemove}
          isInWatchlist={watchlist.some((m) => m.id === movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;
