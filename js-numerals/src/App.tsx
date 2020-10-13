import React, {FC, useState} from 'react';

const App:FC = () => {
  const [input, setInput] = useState();
  const [output, setOutput] = useState();

  const converter = (value:number) => {

    if (!isValid(value)) {
      return false;
    }

    let billion = Math.floor(value / 1000000000);
    value -= billion * 1000000000;

    let million = Math.floor(value / 1000000);
    value -= million * 1000000;

    let thousand = Math.floor(value / 1000);
    value -= thousand * 1000;

    let hundred = Math.floor(value / 100);
    value = value % 100;

    let ten = Math.floor(value / 10);

    let one = Math.floor(value % 10);

    let words = "";

    if (billion > 0) {
      words += (converter(billion) + " billion");
    }

    if (million > 0) {
      words += (((words === "") ? "" : " ") + converter(million) + " million");
    }

    if (thousand > 0) {
      words += (((words === "") ? "" : " ") + converter(thousand) + " thousand");
    }

    if (hundred) {
      words += (((words === "") ? "" : " ") + converter(hundred) + " hundred");
    }

    let belowTwenty = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "Seventeen", "Eighteen", "Nineteen"];
    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (ten > 0 || one > 0) {
      if (words !== "") {
        words += " and ";
      }
      if (ten < 2) {
        words += belowTwenty[ten * 10 + one];
      } else {
        words += tens[ten];
        if (one > 0) {
          words += ("-" + belowTwenty[one]);
        }
      }
    }

    setOutput(words)
    return words;
  }

  const isValid = (value: string | number) =>{
    if (!value || value === '' || value < 0 || value > 1000000000 || isNaN(value as number)) {
      setOutput(`Input '${value}' must be a number greater than 0 or less than a billion`)
      return false;
    }
    return true
  }

  return (
    <>
      <div  className={"number-converter"}>Number Converter</div>
      <div  className={"number-box"}>
      <input onChange={(e) => setInput(e.target.value)}/>
        <button onClick={() => converter(input)}>Submit</button>
        {output && <p>Output: {output}</p>}
      </div>
    </>
  );
}

export default App;