import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../redux/campersSlice";
import CamperCard from "../components/CamperCard";
import Filter from "../components/Filter";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.campers);
  const filters = useSelector((state) => state.filters);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const filteredItems = items?.filter((camper) => {
    if (
      filters.location &&
      !camper.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    if (filters.form && camper.form !== filters.form) {
      return false;
    }

    if (filters.features && filters.features.length > 0) {
      const hasAllFeatures = filters.features.every((feat) => {
        if (feat === "Automatic") return camper.transmission === "automatic";
        return camper[feat] === true;
      });
      if (!hasAllFeatures) return false;
    }

    return true;
  });

  return (
    <div className="container" style={{ display: "flex", gap: "64px" }}>
      <aside>
        <Filter />
      </aside>

      <main style={{ flex: 1 }}>
        {isLoading && (!items || items.length === 0) && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}

        <div>
          {filteredItems?.slice(0, visibleCount).map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))}

          {filteredItems?.length === 0 && !isLoading && (
            <div
              style={{
                marginTop: "20px",
                fontSize: "18px",
                color: "var(--text-light)",
              }}
            >
              No campers found matching your filters.
            </div>
          )}
        </div>

        {filteredItems && filteredItems.length > visibleCount && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="outline"
            style={{ display: "block", margin: "40px auto 0" }}
          >
            Load More
          </button>
        )}
      </main>
    </div>
  );
}
