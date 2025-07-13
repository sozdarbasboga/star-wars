import React, { useState, useEffect } from 'react';
import { starWarsApi } from './services/starWarsApi';
import SearchBar from './components/SearchBar';
import StarshipCard from './components/StarshipCard';
import StarshipDetail from './components/StarshipDetail';
import './App.css';

function App() {
  const [allStarships, setAllStarships] = useState([]); // Tüm gemiler
  const [filteredStarships, setFilteredStarships] = useState([]); // Filtrelenmiş gemiler
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedStarshipId, setSelectedStarshipId] = useState(null);

  useEffect(() => {
    fetchStarships();
  }, []);

  const fetchStarships = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await starWarsApi.getStarships(1);
      setAllStarships(data.results);
      setFilteredStarships(data.results); // İlk yüklemede tüm gemileri göster
    } catch (err) {
      setError('Yıldız gemileri yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      // Boş arama ise tüm gemileri göster
      setFilteredStarships(allStarships);
    } else {
      // Arama yapılıyorsa filtrele
      const filtered = allStarships.filter(starship => 
        starship.name.toLowerCase().includes(query.toLowerCase()) ||
        (starship.model && starship.model.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredStarships(filtered);
    }
  };

  return (
    <div className="app">
      {!selectedStarshipId && (
        <header className="app-header">
          <div className="header-content">
            <div className="logo-section">
              <img src="/starwars-title.png" alt="Star Wars" className="starwars-title-img" />
            </div>
            <form className="custom-search-bar" onSubmit={e => { e.preventDefault(); handleSearch(searchValue); }}>
              <span className="custom-search-label">Name / Model</span>
              <input
                type="text"
                placeholder="Name / Model"
                className="custom-search-input"
                value={searchValue}
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
            {filteredStarships.length === 0 && !loading && searchValue && (
              <div className="no-results">
                "{searchValue}" için sonuç bulunamadı
              </div>
            )}
            <div className="starships-grid">
              {filteredStarships.map((starship, index) => (
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
