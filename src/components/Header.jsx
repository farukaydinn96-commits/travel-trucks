import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="container"
      style={{
        padding: "24px 20px",
        borderBottom: "1px solid var(--border-color)",
        marginBottom: "40px",
      }}
    >
      <nav style={{ display: "flex", gap: "30px" }}>
        <NavLink to="/" style={{ fontWeight: "500" }}>
          Home
        </NavLink>
        <NavLink to="/catalog" style={{ fontWeight: "500" }}>
          Catalog
        </NavLink>
      </nav>
    </header>
  );
}
