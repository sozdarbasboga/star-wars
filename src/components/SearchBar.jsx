import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce ile arama
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim()) {
        onSearch(searchTerm.trim());
      } else if (searchTerm === '') {
        onSearch('');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="search-container">
      <div className="search-header">
        <div className="search-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </div>
        <h3>HoloNet Arama Sistemi</h3>
      </div>
      
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-group">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Yıldız gemisi adı veya modeli girin..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            <span className="button-text">Ara</span>
            <div className="button-glow"></div>
          </button>
        </div>
        {searchTerm && (
          <button type="button" onClick={handleClear} className="clear-button">
            <span>Veritabanını Temizle</span>
            <div className="clear-glow"></div>
          </button>
        )}
      </form>
      
      <div className="search-status">
        {searchTerm ? (
          <span className="status-text">"{searchTerm}" için arama yapılıyor...</span>
        ) : (
          <span className="status-text">Tüm yıldız gemileri listeleniyor</span>
        )}
      </div>
    </div>
  );
};

export default SearchBar; 