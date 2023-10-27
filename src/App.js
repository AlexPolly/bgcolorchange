import './App.css';
import React, { useState } from "react";

function App() {

    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  
    const changeColor = () => {
      const red = `red`;
      setBackgroundColor(red);
    };
    const changeColorblue = () => {
      const blue = `aqua`;
      setBackgroundColor(blue);
    };
    const changeColoryellow = () => {
      const blue = `yellow`;
      setBackgroundColor(blue);
    };
    const changeColorpink = () => {
      const blue = `pink`;
      setBackgroundColor(blue);
    };
    const changeColorgreen = () => {
      const blue = `lightgreen`;
      setBackgroundColor(blue);
    };
  return (
    <div className="App" style={{ backgroundColor }}>
      <h1>Background Color Change </h1><br />
     <div className='btns'>
        <button style={{backgroundColor:'red',color:'white',fontFamily:'cursive'}} onClick={changeColor}>Red</button>
        <button style={{backgroundColor:'aqua',color:'black',fontFamily:'cursive'}}  onClick={changeColorblue}>Blue</button>
        <button style={{backgroundColor:'yellow',color:'black',fontFamily:'cursive'}}  onClick={changeColoryellow}>Yellow</button>
        <button style={{backgroundColor:'pink',color:'white',fontFamily:'cursive'}} onClick={changeColorpink}>Pink</button>
        <button style={{backgroundColor:'lightgreen',color:'black',fontFamily:'cursive'}} onClick={changeColorgreen}>Green</button>
     </div>
    </div>
  );
}
export default App;
