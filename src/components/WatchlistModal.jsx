const WatchlistModal = ({ watchlist, onClose, onRemove }) => (
  <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded w-[90%] max-w-lg shadow-lg relative">
      <h2 className="text-xl font-bold mb-4">Mi Lista</h2>
      {watchlist.length === 0 ? (
        <p>No tienes películas guardadas.</p>
      ) : (
        <ul className="space-y-2">
          {watchlist.map(movie => (
            <li key={movie.id} className="flex items-center justify-between">
              <img src={movie.image} alt={movie.title} className="w-10 h-10 object-cover rounded mr-2" />
              <span className="flex-1">{movie.title}</span>
              <button onClick={() => onRemove(movie.id)} className="text-red-600">Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={onClose} className="mt-4 bg-gray-600 text-white px-4 py-2 rounded">
        Cerrar
      </button>
    </div>
  </div>
);

export default WatchlistModal;
