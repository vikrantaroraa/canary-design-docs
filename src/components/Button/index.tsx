import React from "react";
import { Button } from "canary-design";

const ExampleButton = () => {
  const buttonsContainerStyle: React.CSSProperties = {
    marginTop: "1rem",
    display: "flex",
    gap: "0.8rem",
    padding: 5,
  };

  return (
    <div style={buttonsContainerStyle}>
      <Button type="fill" onClick={() => alert("Canary Design is awesome!")}>
        Primary
      </Button>
      <Button onClick={() => alert("Canary Design is awesome!")}>
        Secondary
      </Button>
    </div>
  );
};

export { ExampleButton };
