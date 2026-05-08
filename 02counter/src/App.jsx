import { useState } from 'react';
import './App.css';

function App() {
  const MAX_COUNT = 100;
  // useState component ki value yaad rakhta hai; setCounter call par re-render hota hai.
  const [counter, setCounter] = useState(MAX_COUNT / 2);

  const addValue = () => {
    // Functional update latest previous value se safe calculation karta hai.
    setCounter((prev) => Math.min(prev + 1, MAX_COUNT));
  };

  const removeValue = () => {
    setCounter((prev) => Math.max(prev - 1, 0));
  };

  const resetValue = () => {
    setCounter(0);
  };

  const progressPercentage = (counter / MAX_COUNT) * 100;

  return (
    <div className="app-wrapper">
      <div className="counter-card">
        
        {/* Header Section */}
        <div className="header">
          <h1>Counter</h1>
          <span className="badge">Limit: {MAX_COUNT}</span>
        </div>

        {/* Display Section */}
        <div className="display-section">
          <div className="counter-value">{counter}</div>
          <div className="progress-bar-container">
            {/* Inline style me JS expression se dynamic width set kar rahe hain. */}
            <div 
              className="progress-bar" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="controls">
          {/* Event handler click hone par state update karta hai. */}
          <button 
            className="btn btn-remove" 
            onClick={removeValue}
            disabled={counter === 0}
            aria-label="Decrease value"
          >
            −
          </button>

          <button 
            className="btn btn-reset" 
            onClick={resetValue}
            disabled={counter === 0}
            aria-label="Reset value"
          >
            ↺
          </button>

          <button 
            className="btn btn-add" 
            onClick={addValue}
            disabled={counter === MAX_COUNT}
            aria-label="Increase value"
          >
            +
          </button>
        </div>

        {/* Status Message */}
        <div className="status-message">
          {/* Conditional text: count ke hisaab se message change hota hai. */}
          {counter === 0 ? "Minimum reached" : counter === MAX_COUNT ? "Maximum reached" : ""}
        </div>

      </div>
    </div>
  );
}

export default App;
