import { useState } from 'react';
import { movies } from '../data/movies';
import MovieList from '../components/MovieList';
import WatchlistModal from '../components/WatchlistModal';
import { useWatchlist } from '../hooks/useWatchlist';

const Home = () => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4">
        <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">🎬 Watchlist</h1>
        <button onClick={() => setIsModalOpen(true)} className="bg-green-600 text-white px-4 py-2 rounded">
          Ver mi lista ({watchlist.length})
        </button>
      </header>
      <MovieList
        movies={movies}
        watchlist={watchlist}
        onAdd={addToWatchlist}
        onRemove={removeFromWatchlist}
      />
      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onClose={() => setIsModalOpen(false)}
          onRemove={removeFromWatchlist}
        />
      )}
    </div>
  );
};

export default Home;
