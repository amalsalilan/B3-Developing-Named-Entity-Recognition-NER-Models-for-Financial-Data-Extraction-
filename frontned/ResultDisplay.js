import React from "react";

const ResultDisplay = ({ data }) => {
  return (
    <div className="result-container">
      <h3>Extraction Results</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ResultDisplay;
