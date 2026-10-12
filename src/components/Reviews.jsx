export default function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {reviews.map((review, index) => (
        <div key={index}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "var(--bg-light)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "600",
                color: "var(--primary-color)",
              }}
            >
              {review.reviewer_name.charAt(0)}
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
                {review.reviewer_name}
              </h4>
              <div style={{ color: "var(--rating-color)" }}>
                {"★".repeat(review.reviewer_rating)}
                {"☆".repeat(5 - review.reviewer_rating)}
              </div>
            </div>
          </div>
          <p style={{ margin: 0, color: "var(--text-light)" }}>
            {review.comment}
          </p>
        </div>
      ))}
    </div>
  );
}
