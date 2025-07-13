import React, { useState, useEffect } from 'react';
import { starWarsApi } from './services/starWarsApi';
import SearchBar from './components/SearchBar';
import StarshipCard from './components/StarshipCard';
import StarshipDetail from './components/StarshipDetail';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedStarshipId, setSelectedStarshipId] = useState(null);

  useEffect(() => {
    fetchStarships();
  }, []);

  const fetchStarships = async (query = '') => {
    try {
      setLoading(true);
      setError(null);
      let data;
      if (query) {
        data = await starWarsApi.searchStarships(query);
      } else {
        data = await starWarsApi.getStarships(1);
      }
      setStarships(data.results);
    } catch (err) {
      setError('Yıldız gemileri yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchStarships(query);
  };

  return (
    <div className="app">
      {!selectedStarshipId && (
        <header className="app-header">
          <div className="header-content">
            <div className="logo-section">
              <img src="public/starwars-title.png" alt="Star Wars" className="starwars-title-img" />
            </div>
            <form className="custom-search-bar" onSubmit={e => { e.preventDefault(); handleSearch(searchValue); }}>
              <span className="custom-search-label">Name / Model</span>
              <input
                type="text"
                placeholder="Name / Model"
                className="custom-search-input"
                value={searchValue || ''}
                onChange={e => setSearchValue(e.target.value)}
              />
              <button type="submit" className="custom-search-button">Filter</button>
            </form>
            <div className="custom-search-underline"></div>
          </div>
          <div className="header-background">
            <div className="stars"></div>
          </div>
        </header>
      )}
      <main className="app-main">
        {selectedStarshipId ? (
          <StarshipDetail starshipId={selectedStarshipId} onBack={() => setSelectedStarshipId(null)} />
        ) : (
          <>
            {error && <div className="error-message">{error}</div>}
            {loading && <div className="loading-message">Yükleniyor...</div>}
            <div className="starships-grid">
              {starships.map((starship, index) => (
                <StarshipCard
                  key={`${starship.name}-${index}`}
                  starship={starship}
                  onClick={id => setSelectedStarshipId(id)}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
