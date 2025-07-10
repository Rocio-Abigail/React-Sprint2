const MovieCard = ({ movie, onAdd, onRemove, isInWatchlist }) => {
  return (
    <div className="border rounded p-4">
      <img src={movie.image} alt={movie.title} className="mb-2" />
      <h3 className="text-lg font-bold">{movie.title}</h3>
      {isInWatchlist ? (
        <button onClick={() => onRemove(movie.id)} className="text-red-500">Quitar</button>
      ) : (
        <button onClick={() => onAdd(movie)} className="text-blue-500">Agregar a mi lista</button>
      )}
    </div>
  );
};

export default MovieCard;

