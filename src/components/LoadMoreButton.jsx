import React from 'react';
import './LoadMoreButton.css';

const LoadMoreButton = ({ onClick, loading, hasMore }) => {
  if (!hasMore) {
    return null;
  }

  return (
    <div className="load-more-container">
      <button 
        onClick={onClick} 
        className="load-more-button"
        disabled={loading}
      >
        {loading ? (
          <>
            <div className="spinner"></div>
            Yükleniyor...
          </>
        ) : (
          'Daha Fazla Yükle'
        )}
      </button>
    </div>
  );
};

export default LoadMoreButton; 