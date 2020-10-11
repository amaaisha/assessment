import React, {useState} from 'react';


const App = () => {
  //Define state of values and submit
  const [value, setValue] = useState('')
  const [submit, setSubmit] = useState(false)
  const [result, setResult] = useState('')


  //1-19
  const oneToNineteen = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ',
      'eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '
  ];

  const num = [''];
  num.splice(1, 1, value);

  const words = num[1] !== "0" && oneToNineteen[Number(num[1])];


  //Event handler for values
  const handleChange = (event)  => {
    setValue(event.target.value)
  };

  //Event handler for submit
  const handleSubmit = () => {
    setSubmit(true)
    setResult(words)


  };

  return (
    <>
      <div  className={"number-converter"}>Number Converter</div>
      <div  className={"number-box"}>
        <input type={'text'} placeholder={'Number'} onChange={handleChange} />
        <button className={"button"} onClick={handleSubmit} type={'submit'}>Submit</button>

        {/*To show submit result*/}
        {submit &&
        <p placeholder={'Words'}>{result}</p>
        }
      </div>
    </>
  );
}

export default App;
