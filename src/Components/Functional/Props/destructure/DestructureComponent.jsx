import React from 'react'
import './Desturcture.css'

const DestructureComponent = (props) => {
     const{name, age, surname, Address} = props.user;
  return (
    <div>
        DestructureComponent <br/>
        <table align='center'>
            <th>Name</th> 
            <th>Age</th>
            <th>Surname</th>
            <th>Address</th>
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{surname}</td>
                <td>{Address}</td>
            </tr>
        </table>
    </div>
  )
}

export default DestructureComponent