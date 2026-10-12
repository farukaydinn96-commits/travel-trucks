import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFavorite } from "../redux/campersSlice";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);

  return (
    <div
      className="card"
      style={{ display: "flex", gap: "24px", marginBottom: "32px" }}
    >
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        style={{
          width: "290px",
          height: "310px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <h3 style={{ fontSize: "24px", margin: 0 }}>{camper.name}</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "24px", fontWeight: "600" }}>
              €{camper.price.toFixed(2)}
            </span>
            <button
              onClick={() => dispatch(toggleFavorite(camper.id))}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "24px",
                color: isFavorite ? "var(--primary-color)" : "var(--text-main)",
                padding: 0,
              }}
            >
              {isFavorite ? "♥" : "♡"}
            </button>
          </div>
        </div>

        <p style={{ marginBottom: "24px" }}>
          <span style={{ textDecoration: "underline" }}>
            ★ {camper.rating} ({camper.reviews.length} Reviews)
          </span>
          <span style={{ margin: "0 10px" }}>|</span>
          <span>{camper.location}</span>
        </p>

        <p
          style={{
            color: "var(--text-light)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "525px",
            marginBottom: "24px",
          }}
        >
          {camper.description}
        </p>

        <div
          style={{
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          {camper.transmission && (
            <span className="badge">{camper.transmission}</span>
          )}
          {camper.engine && <span className="badge">{camper.engine}</span>}
          {camper.AC && <span className="badge">AC</span>}
          {camper.kitchen && <span className="badge">Kitchen</span>}
        </div>

        {/* Yeni sekmede açılma (görev gereksinimi) ve orijinal buton tasarımı */}
        <Link
          to={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="primary">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
}
