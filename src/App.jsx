import { useState } from "react";
import "./App.css";
import { Button } from "./assets/components/Button";
import { ClearButton } from "./assets/components/ClearButton";
import { Screen } from "./assets/components/Screen";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState(" ");

  const addInput = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please enter values to perform the operation");
    }
  };

  return (
    <div className="App">
      <section className="calculator-container">
        <Screen input={input} />
        <div className="file">
          <Button addInput={addInput}>1</Button>
          <Button addInput={addInput}>2</Button>
          <Button addInput={addInput}>3</Button>
          <Button addInput={addInput}>+</Button>
        </div>
        <div className="file">
          <Button addInput={addInput}>4</Button>
          <Button addInput={addInput}>5</Button>
          <Button addInput={addInput}>6</Button>
          <Button addInput={addInput}>-</Button>
        </div>
        <div className="file">
          <Button addInput={addInput}>7</Button>
          <Button addInput={addInput}>8</Button>
          <Button addInput={addInput}>9</Button>
          <Button addInput={addInput}>*</Button>
        </div>
        <div className="file">
          <Button addInput={calculateResult}>=</Button>
          <Button addInput={addInput}>0</Button>
          <Button addInput={addInput}>.</Button>
          <Button addInput={addInput}>/</Button>
        </div>
        <div className="file">
          <ClearButton handleClick={() => setInput("")} />
        </div>
      </section>
    </div>
  );
}

export default App;
