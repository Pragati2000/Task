export const StyledButton = ({ onClick }) => {
  return (
    <button
      style={{
        background: "red",
        padding: "10px",
        borderRadius: "5px",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      Add
    </button>
  );
};
