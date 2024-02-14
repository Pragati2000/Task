import { useState, useEffect } from "react";
import { StyledButton } from "./components/button";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "10px",
      }}
    >
      <h1>{count}</h1>
      <StyledButton onClick={incrementCount} />
    </div>
  );
}

export default App;
