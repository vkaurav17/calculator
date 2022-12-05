import React,{useState} from 'react';
import './App.css';
function App() {

    const [result,setResult]=useState("");
    const clearScreen=()=>{
      setResult("");
    }
    const backSpace=()=>{
      setResult(result.slice(0,-1));
    }
    const handleClick=(e)=>{
      setResult(result.concat(e.target.value));
    }
    const evaluate=()=>{
      try {
        // eslint-disable-next-line
        setResult(eval(result).toString());
        } catch (error) {
          setResult("error");
        }
      
    }
  return (
     <>
    <div className="container">
      <form >
            <input type="text" value={result}  readOnly /> 
      </form>
      <div className="keybutton">
        <button type="button" id='cleardisplay' onClick={clearScreen} className="btn btn-outline-light"><b>clear</b></button>
        <button type="button" id='backspace' onClick={backSpace} className="btn btn-outline-light"><b>C</b></button>
        <button type="button" value="+" onClick={handleClick} className="btn btn-outline-light"><b>+</b></button>
        <button type="button" value="9" onClick={handleClick} className="btn btn-outline-light"><b>9</b></button>
        <button type="button" value="8" onClick={handleClick} className="btn btn-outline-light"><b>8</b></button>
        <button type="button" value="7" onClick={handleClick} className="btn btn-outline-light"><b>7</b></button>
        <button type="button" value="*" onClick={handleClick} className="btn btn-outline-light"><b>&times;</b></button>
        <button type="button" value="6" onClick={handleClick} className="btn btn-outline-light"><b>6</b></button>
        <button type="button" value="5" onClick={handleClick} className="btn btn-outline-light"><b>5</b></button>
        <button type="button" value="4" onClick={handleClick} className="btn btn-outline-light"><b>4</b></button>
        <button type="button" value="/" onClick={handleClick} className="btn btn-outline-light"><b>&divide;</b></button>
        <button type="button" value="3" onClick={handleClick} className="btn btn-outline-light"><b>3</b></button>
        <button type="button" value="2" onClick={handleClick} className="btn btn-outline-light"><b>2</b></button>
        <button type="button" value="1" onClick={handleClick} className="btn btn-outline-light"><b>1</b></button>
        <button type="button" value="-" onClick={handleClick} className="btn btn-outline-light"><b>&ndash;</b></button>
        <button type="button" value="0" onClick={handleClick} className="btn btn-outline-light"><b>0</b></button>
        <button type="button" value="." onClick={handleClick} className="btn btn-outline-light"><b>.</b></button>
        <button type="button" id='evaluate' onClick={evaluate} className="btn btn-outline-light"><b>=</b></button>
      </div>
      </div>
    </>
      
  );
}

export default App;
