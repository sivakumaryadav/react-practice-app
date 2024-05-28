import React from 'react'
import './Props.css'
import DestructureComponent from './destructure/DestructureComponent'

const FirstComponent = (props) => {
    //console.log(props)
  return (
    <div>
        FirstComponent props user Details : <br/>
        Name : {props.user.name} {" "}
        age  : {props.user.age}{" "}
        surname: {props.user.surname}{" "}
        Address : {props.user.Address}
        <br/>
        <br/>
        <DestructureComponent user = {props.user}/>
        <br/>
        <br/>
    </div>
  )
}


export default FirstComponent