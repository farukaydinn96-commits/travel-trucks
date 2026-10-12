import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking successful!");
    setFormData({ name: "", email: "", date: "", comment: "" });
  };

  return (
    <div className="card" style={{ padding: "44px 24px" }}>
      <h3 style={{ fontSize: "20px", marginBottom: "8px" }}>
        Book your campervan now
      </h3>
      <p style={{ color: "var(--text-light)", marginBottom: "24px" }}>
        Stay connected! We are always ready to help you.
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
        />
        <textarea
          name="comment"
          placeholder="Comment"
          rows="4"
          value={formData.comment}
          onChange={handleChange}
          style={{ resize: "none", height: "114px" }}
        ></textarea>

        <button
          type="submit"
          className="primary"
          style={{ width: "fit-content", marginTop: "10px" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}
