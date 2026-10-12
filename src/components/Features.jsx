export default function Features({ camper }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {camper.transmission && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            {camper.transmission}
          </span>
        )}
        {camper.engine && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            {camper.engine}
          </span>
        )}
        {camper.AC && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            AC
          </span>
        )}
        {camper.bathroom && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            Bathroom
          </span>
        )}
        {camper.kitchen && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            Kitchen
          </span>
        )}
        {camper.TV && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            TV
          </span>
        )}
        {camper.radio && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            Radio
          </span>
        )}
        {camper.refrigerator && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            Refrigerator
          </span>
        )}
        {camper.microwave && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            Microwave
          </span>
        )}
        {camper.gas && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            Gas
          </span>
        )}
        {camper.water && (
          <span
            style={{
              padding: "10px 15px",
              background: "#f2f4f7",
              borderRadius: "100px",
            }}
          >
            Water
          </span>
        )}
      </div>

      <h3>Vehicle details</h3>
      <hr
        style={{
          margin: "20px 0",
          border: "none",
          borderTop: "1px solid #ccc",
        }}
      />
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <span>Form</span> <span>{camper.form}</span>
        </li>
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <span>Length</span> <span>{camper.length}</span>
        </li>
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <span>Width</span> <span>{camper.width}</span>
        </li>
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <span>Height</span> <span>{camper.height}</span>
        </li>
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <span>Tank</span> <span>{camper.tank}</span>
        </li>
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <span>Consumption</span> <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
}
