import { useEffect, useState } from "react";
import "../App.css";
import "./Calculator.css";

function Calculator() {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operation, setOperation] = useState("");

  const onNumberButtonClick = (value) => {
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

  const onOperationButtonClick = (value) => {
    const arithmeticSymbols = ["+", "-", "*", "/"];
    if (arithmeticSymbols.includes(value)) {
      setOperation(value);
      setFirstNumber(parseFloat(textFieldValue) || 0);
      setTextFieldValue("");
    }
  };

  const onEqualsButtonClick = () => {
    if (!firstNumber) {
      setTextFieldValue("NaN");
      return;
    }
    setSecondNumber(parseFloat(textFieldValue) || 0);
  };

  const onClearButtonClick = () => {
    setTextFieldValue("");
    setFirstNumber(0);
    setSecondNumber(0);
    setOperation("");
  };

  useEffect(() => {
    if (operation === "+") {
      setTextFieldValue(`${firstNumber + secondNumber}`);
    } else if (operation === "-") {
      setTextFieldValue(`${firstNumber - secondNumber}`);
    } else if (operation === "*") {
      setTextFieldValue(`${firstNumber * secondNumber}`);
    } else if (operation === "/") {
      setTextFieldValue(`${firstNumber / secondNumber}`);
    }
  }, [secondNumber]);

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
        <span className="num clear" onClick={() => onClearButtonClick()}>
          <i>C</i>
        </span>
        <span className="num" onClick={() => onOperationButtonClick("/")}>
          <i>/</i>
        </span>
        <span className="num" onClick={() => onOperationButtonClick("*")}>
          <i>*</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(7)}>
          <i>7</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(8)}>
          <i>8</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(9)}>
          <i>9</i>
        </span>
        <span className="num" onClick={() => onOperationButtonClick("-")}>
          <i>-</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(4)}>
          <i>4</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(5)}>
          <i>5</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(6)}>
          <i>6</i>
        </span>
        <span className="num plus" onClick={() => onOperationButtonClick("+")}>
          <i>+</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(1)}>
          <i>1</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(2)}>
          <i>2</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(3)}>
          <i>3</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(0)}>
          <i>0</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick("00")}>
          <i>00</i>
        </span>
        <span className="num" onClick={() => onNumberButtonClick(".")}>
          <i>.</i>
        </span>

        <span className="num equal" onClick={() => onEqualsButtonClick()}>
          <i>=</i>
        </span>
      </div>
    </div>
  );
}

export default Calculator;
