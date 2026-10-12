import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section
      className="container"
      style={{ textAlign: "center", marginTop: "100px" }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
        Campers of your dreams
      </h1>
      <p style={{ fontSize: "24px", marginBottom: "40px" }}>
        You can find everything you want in our catalog
      </p>
      <Link to="/catalog">
        <button type="button" className="primary">
          View Now
        </button>
      </Link>
    </section>
  );
}
