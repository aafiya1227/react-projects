/* eslint-disable no-eval */

import { useState } from "react";

import "./Calculator.css";

const CalcKey =
  (handler) =>
  ({ keyChar, ...props }) =>
    (
      <td>
        <button name={keyChar} {...props} onClick={handler}>
          {keyChar}
        </button>
      </td>
    );
const symbols = ["*", "+", "-", "/", "."];
const Calculator = () => {
  const [result, setResult] = useState("");

  const showHandler = ({ target: { name: currentChar } }) => {
    const isLastElementASymbol = symbols.includes(result[result.length - 1]);
    const isCurrentElementASymbol = symbols.includes(currentChar);

    if (currentChar === "." && result.includes(currentChar)) {
      return;
    }

    if (isCurrentElementASymbol && isLastElementASymbol) {
      return;
    }
    setResult(result.concat(currentChar));
  };

  const clear = () => {
    setResult(result.slice(0, -1));
  };
  const allClear = () => {
    setResult("");
  };

  const calculate = () => {
    setResult(eval(result).toString());
  };

  const percentage = () => {
    setResult(result / 100);
  };
  const plusMinus = () => {
    setResult("-" + result);
  };

  const AllClearKey = CalcKey(allClear);
  const ClearKey = CalcKey(clear);
  const PercentKey = CalcKey(percentage);
  const DisplayKey = CalcKey(showHandler);
  const PlusMinusKey = CalcKey(plusMinus);
  const CalculateKey = CalcKey(calculate);

  return (
    <div className="box">
      <input type="text" value={result} />

      <div className="Btns">
        <table>
          <tr>
            <AllClearKey keyChar="AC" />
            <ClearKey keyChar="C" />
            <PercentKey keyChar="%" />
            <DisplayKey keyChar="/" />
          </tr>
          <tr>
            <DisplayKey keyChar="7" />
            <DisplayKey keyChar="8" />
            <DisplayKey keyChar="9" />
            <DisplayKey keyChar="*" />
          </tr>

          <tr>
            <DisplayKey keyChar="4" />
            <DisplayKey keyChar="5" />
            <DisplayKey keyChar="6" />
            <DisplayKey keyChar="-" />
          </tr>
          <tr>
            <DisplayKey keyChar="1" />
            <DisplayKey keyChar="2" />
            <DisplayKey keyChar="3" />
            <DisplayKey keyChar="+" />
          </tr>
          <tr>
            <DisplayKey keyChar="0" />
            <DisplayKey keyChar="." />
            <PlusMinusKey keyChar="+/-" />
            <CalculateKey keyChar="=" />
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Calculator;
