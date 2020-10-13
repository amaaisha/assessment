import React, {FC, useState} from 'react';
import './NumberConverter.css';

const App:FC = () => {

  const [input, setInput] = useState();
  const [output, setOutput] = useState();

  //1-9
  let belowTwenty = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "Seventeen", "Eighteen", "Nineteen"];

  //20-90
  let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];


  //input is assumed to be a number
  const converter = (value:number) => {

    if (!isValid(value)) {
      //Confirm if input is a valid number
      return false;
    }

    //billion
    let billion = Math.floor(value / 1000000000);
    value -= billion * 1000000000;

    //million
    let million = Math.floor(value / 1000000);
    value -= million * 1000000;

    //thousand
    let thousand = Math.floor(value / 1000);
    value -= thousand * 1000;

    //hundred
    let hundred = Math.floor(value / 100);
    value = value % 100;

    //ten
    let ten = Math.floor(value / 10);

    //one
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

    if (ten > 0 || one > 0) {
      if (words !== "") {
        words += " and ";// Add 'and'

      }
      if (ten < 2) {
        words += belowTwenty[ten * 10 + one];
      } else {
        words += tens[ten];// Add a hyphen if double digit
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

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    converter(input)
  }

  return (
    <>
      <div  className={"number-converter"}>Number Converter</div>
      <div  className={"number-box"}>
      <input onChange={handleChange}/>
        <button className={"button"} onClick={handleClick}>Submit</button>
        {output && <p> {output}</p>}
      </div>
    </>
  );
}

export default App;