import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [shapes, setShapes] = useState([]);
  const [temp, setTemp] = useState('square');

  const storeShareFn = (e) => {
    console.log(e.target.value)
    setTemp(e.target.value);
  }

  const saveShareFn = () => {
    setShapes([...shapes, temp]);
  }

  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={storeShareFn}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>

        <button onClick={saveShareFn}>Add Shape</button>
        

      </div>
      <div id="shapes-holder">
        {
          shapes && shapes.map((item, index) => (
            <div className={item}>{index}</div>
          ))
        }
      </div>
    </div>
  )
}


export default App;
