import React, { useState, useEffect } from 'react';
import { starWarsApi } from '../services/starWarsApi';
import './StarshipDetail.css';

const StarshipDetail = ({ starshipId, onBack }) => {
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await starWarsApi.getStarshipDetails(starshipId);
        setStarship(data);
      } catch (err) {
        console.error('Detay yükleme hatası:', err);
        setError('Yıldız gemisi detayları yüklenirken hata oluştu. Lütfen tekrar deneyin.');
      } finally {
        setLoading(false);
      }
    };

    if (starshipId) {
      fetchStarshipDetails();
    }
  }, [starshipId]);

  // Veri formatlama fonksiyonları
  const formatValue = (value) => {
    if (value === 'unknown' || value === 'n/a' || !value) return 'Bilinmiyor';
    return value;
  };

  const formatCredits = (credits) => {
    if (credits === 'unknown' || credits === 'n/a' || !credits) return 'Bilinmiyor';
    return `${parseInt(credits).toLocaleString()} kredi`;
  };

  const formatLength = (length) => {
    if (length === 'unknown' || length === 'n/a' || !length) return 'Bilinmiyor';
    return `${length} metre`;
  };

  const formatSpeed = (speed) => {
    if (speed === 'unknown' || speed === 'n/a' || !speed) return 'Bilinmiyor';
    return `${speed} km/h`;
  };

  if (loading) {
    return (
      <div className="detail-container">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Yıldız gemisi verileri yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="detail-container">
        <div className="error">
          <div className="error-icon">⚠️</div>
          <h3>Hata Oluştu</h3>
          <p>{error}</p>
          <button onClick={onBack} className="back-button">Ana Sayfaya Dön</button>
        </div>
      </div>
    );
  }

  if (!starship) {
    return (
      <div className="detail-container">
        <div className="error">
          <div className="error-icon">❌</div>
          <h3>Yıldız Gemisi Bulunamadı</h3>
          <p>Belirtilen ID ile yıldız gemisi bulunamadı.</p>
          <button onClick={onBack} className="back-button">Ana Sayfaya Dön</button>
        </div>
      </div>
    );
  }

  return (
    <div className="starship-detail-wrapper">
      <button onClick={onBack} className="detail-back-btn">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="54" y1="32" x2="16" y2="32" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
          <line x1="28" y1="20" x2="16" y2="32" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
          <line x1="28" y1="44" x2="16" y2="32" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
        </svg>
      </button>
      <div className="starship-detail-card">
        <div className="starship-detail-inner-card">
          <div className="starship-model-section">
            <span className="starship-model-name">{starship.model}</span>
            <div className="starship-model-underline"></div>
          </div>
          <img
            className="starship-detail-image"
            src={"/images.jpeg"}
            alt={starship.name}
          />
          <div className="starship-detail-info">
            <div><b>Model:</b> {formatValue(starship.model)}</div>
            <div><b>Hyperdrive Rating:</b> {formatValue(starship.hyperdrive_rating)}</div>
            <div><b>Passengers:</b> {formatValue(starship.passengers)}</div>
            <div><b>Max Atmosphering Speed:</b> {formatValue(starship.max_atmosphering_speed)}</div>
            <div><b>Manufacturer:</b> {formatValue(starship.manufacturer)}</div>
            <div><b>Crew:</b> {formatValue(starship.crew)}</div>
            <div><b>Cargo Capacity:</b> {formatValue(starship.cargo_capacity)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipDetail; 