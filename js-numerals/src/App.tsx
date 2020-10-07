import React, {FC, useState} from 'react';
import './App.css';


const App: FC<{}> = () => {


  const [value, setValue] = useState<number>(0)
  const [submit, setSubmit] = useState<boolean>(false)

  const handleChange = (event: any)  => {
    setValue(event.target.value)
  };

  const handleSubmit = () => {
    setSubmit(true)

  };

  return (
    <>
      <div>Number Converter</div>
      <br/>
      <div>
        <input type={'text'} placeholder={'Number'} onChange={handleChange} />
        <button onClick={handleSubmit} type={'submit'}>Submit</button>
        <br/>
        <br/>

        {submit &&
        <input type={'text'} value={value} />
        }

      </div>
    </>
  );
}

export default App;
