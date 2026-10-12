import { useDispatch, useSelector } from "react-redux";
import { setLocation, setForm, toggleFeature } from "../redux/filtersSlice";
import { fetchCampers } from "../redux/campersSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const handleSearch = () => {
    dispatch(fetchCampers(filters));
  };

  return (
    <div style={{ minWidth: "360px" }}>
      <div style={{ marginBottom: "32px" }}>
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            color: "var(--text-light)",
            fontWeight: "500",
          }}
        >
          Location
        </label>
        <input
          type="text"
          placeholder="City"
          value={filters.location}
          onChange={(e) => dispatch(setLocation(e.target.value))}
        />
      </div>

      <div style={{ marginBottom: "32px" }}>
        <p
          style={{
            color: "var(--text-light)",
            fontWeight: "500",
            marginBottom: "14px",
          }}
        >
          Filters
        </p>
        <h3
          style={{
            borderBottom: "1px solid var(--border-color)",
            paddingBottom: "24px",
            marginBottom: "24px",
            fontSize: "20px",
          }}
        >
          Vehicle equipment
        </h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["AC", "Automatic", "Kitchen", "TV", "Bathroom"].map((feat) => (
            <button
              key={feat}
              onClick={() => dispatch(toggleFeature(feat))}
              style={{
                padding: "17px",
                border: filters.features.includes(feat)
                  ? "1px solid var(--primary-color)"
                  : "1px solid var(--border-color)",
                backgroundColor: "transparent",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              {feat}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "64px" }}>
        <h3
          style={{
            borderBottom: "1px solid var(--border-color)",
            paddingBottom: "24px",
            marginBottom: "24px",
            fontSize: "20px",
          }}
        >
          Vehicle type
        </h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["panelTruck", "fullyIntegrated", "alcove"].map((type) => (
            <button
              key={type}
              onClick={() => dispatch(setForm(type))}
              style={{
                padding: "17px",
                border:
                  filters.form === type
                    ? "1px solid var(--primary-color)"
                    : "1px solid var(--border-color)",
                backgroundColor: "transparent",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleSearch}
        className="primary"
        style={{ width: "100%" }}
      >
        Search
      </button>
    </div>
  );
}
