import React from 'react'

function Tab3(props) {
  return (
    <div>
        <textarea name="box" id="" cols="30" rows="10" onChange={(e)=>{props.setTab3(e.target.value)}} value={props.datas[2]} >{props.datas[2]}</textarea>
    </div>
  )
}

export default Tab3