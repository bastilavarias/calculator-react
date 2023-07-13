import { useState } from "react";
import "../App.css";
import "./Calculator.css";

function Calculator() {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const onPseudoButtonClick = (value) => {
    const _textFieldValue = textFieldValue;
    const regularNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const specialNumbers = ["00"];
    if (regularNumbers.includes(value)) {
      setTextFieldValue(textFieldValue + value);
    } else if (specialNumbers.includes(value)) {
      setTextFieldValue(textFieldValue + value);
    } else if (value === "." && !_textFieldValue.split("").includes(".")) {
      setTextFieldValue(textFieldValue + value);
    }
  };

  const setValues = (value) => {
    if (firstNumber) {
      setSecondNumber(value);
    } else {
      setFirstNumber(value);
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input
          type="text"
          className="value"
          readOnly
          name="txt"
          value={textFieldValue}
        />
        <span className="num clear" onClick={() => () => {}}>
          <i>C</i>
        </span>
        <span className="num" onClick={() => () => {}}>
          <i>/</i>
        </span>
        <span className="num" onClick={() => () => {}}>
          <i>*</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(7)}>
          <i>7</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(8)}>
          <i>8</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(9)}>
          <i>9</i>
        </span>
        <span className="num" onClick={() => () => {}}>
          <i>-</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(4)}>
          <i>4</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(5)}>
          <i>5</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(6)}>
          <i>6</i>
        </span>
        <span className="num plus" onClick={() => () => {}}>
          <i>+</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(1)}>
          <i>1</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(2)}>
          <i>2</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(3)}>
          <i>3</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(0)}>
          <i>0</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick("00")}>
          <i>00</i>
        </span>
        <span className="num" onClick={() => onPseudoButtonClick(".")}>
          <i>.</i>
        </span>

        <span className="num equal" onClick={() => () => {}}>
          <i>=</i>
        </span>
      </div>
    </div>
  );
}

export default Calculator;
