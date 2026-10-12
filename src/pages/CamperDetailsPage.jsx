import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../services/api";
import Features from "../components/Features";
import Reviews from "../components/Reviews";
import BookingForm from "../components/BookingForm";

export default function CamperDetailsPage() {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    const fetchCamperDetails = async () => {
      try {
        const response = await api.get(`/campers/${id}`);
        setCamper(response.data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCamperDetails();
  }, [id]);

  if (isLoading)
    return (
      <div className="container" style={{ padding: "40px" }}>
        Loading...
      </div>
    );
  if (!camper)
    return (
      <div className="container" style={{ padding: "40px" }}>
        Camper not found
      </div>
    );

  return (
    <div className="container" style={{ paddingBottom: "80px" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "8px" }}>{camper.name}</h2>
      <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
        <span style={{ textDecoration: "underline" }}>
          ★ {camper.rating} ({camper.reviews.length} Reviews)
        </span>
        <span>{camper.location}</span>
      </div>
      <p style={{ fontSize: "24px", fontWeight: "600", marginBottom: "24px" }}>
        €{camper.price.toFixed(2)}
      </p>

      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "24px",
          overflowX: "auto",
        }}
      >
        {camper.gallery.map((img, index) => (
          <img
            key={index}
            src={img.thumb}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "290px",
              height: "310px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>

      <p style={{ color: "var(--text-light)", marginBottom: "44px" }}>
        {camper.description}
      </p>

      <div
        style={{
          borderBottom: "1px solid var(--border-color)",
          marginBottom: "44px",
        }}
      >
        <button
          onClick={() => setActiveTab("features")}
          style={{
            padding: "0 0 24px 0",
            marginRight: "40px",
            background: "none",
            border: "none",
            borderBottom:
              activeTab === "features"
                ? "5px solid var(--primary-color)"
                : "5px solid transparent",
            fontSize: "20px",
            fontWeight: "600",
            cursor: "pointer",
            borderRadius: "0",
          }}
        >
          Features
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          style={{
            padding: "0 0 24px 0",
            background: "none",
            border: "none",
            borderBottom:
              activeTab === "reviews"
                ? "5px solid var(--primary-color)"
                : "5px solid transparent",
            fontSize: "20px",
            fontWeight: "600",
            cursor: "pointer",
            borderRadius: "0",
          }}
        >
          Reviews
        </button>
      </div>

      <div style={{ display: "flex", gap: "40px" }}>
        <div style={{ flex: 1 }}>
          {activeTab === "features" ? (
            <Features camper={camper} />
          ) : (
            <Reviews reviews={camper.reviews} />
          )}
        </div>
        <div style={{ width: "448px" }}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
