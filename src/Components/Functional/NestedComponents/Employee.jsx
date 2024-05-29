import React from 'react'
import './Employee.css'

const Department = () => {
    return (
    <div>
        <h2> <center>Department Nested Component.</center></h2>
    </div>
    )
}

function Employee() {
  return (
    <div>
        <center>
            <h1>
                Employee Component <br/>
            </h1>
        </center>
        <Department />
    </div>
  )
}

export default Employee