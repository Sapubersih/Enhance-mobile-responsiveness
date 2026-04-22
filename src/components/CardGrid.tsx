const items = Array.from({ length: 8 }, (_, i) => `Item ${i + 1}`);

const CardGrid = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "15px",
        marginTop: "20px",
      }}
    >
      {items.map((item) => (
        <div
          key={item}
          style={{
            padding: "20px",
            background: "#f5f5f5",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
