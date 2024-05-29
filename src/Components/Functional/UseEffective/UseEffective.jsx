import React, { useEffect, useState } from 'react'

const UseEffective = (props) => {
    const [name, SetName] = useState(0)
  return (
    <div>UseEffective Name: {name} <br/>
    </div>
  )
}

export default UseEffective