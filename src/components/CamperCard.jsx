import React from "react";
import { Link } from "react-router-dom";

const CamperCard = ({ camper }) => {
  return (
    <div className="camper-card">
      {/* Karavan Görseli (Eğer API'den gelen görsel array ise ilkini alıyoruz) */}
      <img
        src={
          camper.gallery && camper.gallery.length > 0
            ? camper.gallery[0].thumb
            : "https://via.placeholder.com/300x200"
        }
        alt={camper.name}
        className="camper-img"
      />

      <div className="camper-details">
        <div className="camper-header">
          <h2>{camper.name}</h2>
          <p className="camper-price">€{camper.price.toFixed(2)}</p>
        </div>

        <div className="camper-rating-location">
          <span>
            ⭐ {camper.rating} ({camper.reviews ? camper.reviews.length : 0}{" "}
            Reviews)
          </span>
          <span>📍 {camper.location}</span>
        </div>

        <p className="camper-description">
          {camper.description && camper.description.substring(0, 60)}...
        </p>

        <div className="camper-features">
          {/* Projedeki standart özellikler (örnek olarak gösterilmiştir) */}
          {camper.adults > 0 && (
            <span className="feature-badge">👥 {camper.adults} adults</span>
          )}
          {camper.transmission && (
            <span className="feature-badge">⚙️ {camper.transmission}</span>
          )}
          {camper.engine && (
            <span className="feature-badge">⛽ {camper.engine}</span>
          )}
        </div>

        {/* 404 HATASINI ÇÖZEN KISIM: a etiketi veya button yerine Link kullanıyoruz */}
        <Link to={`/catalog/${camper.id}`} className="show-more-btn">
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
