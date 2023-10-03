import React from 'react'

function Tab2(props) {
  return (
    <div>
        <textarea name="box" id="" cols="30" rows="10" onChange={(e)=>{props.setTab2(e.target.value)}} value={props.datas[1]} >{props.datas[1]}</textarea>
    </div>
  )
}

export default Tab2