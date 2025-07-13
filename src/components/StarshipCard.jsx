import React, { useEffect, useState } from 'react';
import { starWarsApi } from '../services/starWarsApi';
import './StarshipCard.css';

const STARSHIP_PLACEHOLDER = '/images.jpeg';

const StarshipCard = ({ starship, onClick }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // ID çıkarımı
  const getIdFromUrl = (url) => {
    if (starship.uid) {
      return starship.uid;
    }
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  useEffect(() => {
    let isMounted = true;
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const id = getIdFromUrl(starship.url);
        const data = await starWarsApi.getStarshipDetails(id);
        if (isMounted) setDetails(data);
      } catch (e) {
        if (isMounted) setDetails(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    fetchDetails();
    return () => { isMounted = false; };
    // eslint-disable-next-line
  }, [starship.uid, starship.url]);

  const handleClick = () => {
    const id = getIdFromUrl(starship.url);
    onClick(id);
  };

  // Detayları formatla
  const format = (val) => {
    if (loading) return 'Yükleniyor...';
    if (!val || val === 'unknown' || val === 'n/a') return 'Bilinmiyor';
    return val;
  };

  return (
    <div className="starship-card-grid" onClick={handleClick}>
      <img
        className="starship-card-image"
        src={STARSHIP_PLACEHOLDER}
        alt={starship.name}
      />
      <div className="starship-card-content">
        <div className="starship-card-title">{starship.name}</div>
        <div className="starship-card-info">
          <div>
            <span className="starship-card-label">Model: </span>
            <span className="starship-card-value">{format(details?.model)}</span>
          </div>
          <div>
            <span className="starship-card-label">Hyperdrive Rating: </span>
            <span className="starship-card-value">{format(details?.hyperdrive_rating)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipCard; 