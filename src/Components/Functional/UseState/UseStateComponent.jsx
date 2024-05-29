import React from 'react'
import { useState } from 'react'
import './UseState.css'

function UseStateComponent(props) {
    console.log(props);
    const [name, setName] = useState(props.user.name)
    console.log(name);
  return (
    <div>
      UseState Name : {name} <br/>
    </div>
    
  )
}

export default UseStateComponent