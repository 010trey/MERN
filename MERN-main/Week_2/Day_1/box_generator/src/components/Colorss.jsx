import React, { useState } from  'react';


const Colorss = (props) => {
    const [newColor, setNewColor] = useState("");
    const [colors, setNewColors] = useState([])


const addColor = (e) => {
    e.preventDefault();
    setNewColors([...colors,newColor])
    console.log(colors)
  }


const returnStyle = (color) => {
  return {
    height: "100px",
    width:"100px",
    background:color
  }
}


  return (
    <div>
        <form onSubmit={ addColor }>
      Color <input type="text" onChange={ (e) => setNewColor(e.target.value) }></input>
      <button  >Add</button>
      </form>
      <br />
      {colors.map(function(color, i){
        return <div style={ returnStyle(color) }></div>
      })}
    </div>
  )

}

export default Colorss