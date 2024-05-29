import React, { useState } from 'react'

const ClickEvent = () => {
    const [count, setCount] = useState(0)

    const countIncrement = () => {
        setCount(count + 1)
    }
    const countDecrement = () => {
        if (count > 0){
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(0)
    } 

  return (
    <div>
        <h1>ClickEvent count : {count} <br/></h1>
        <button onClick={countIncrement}>Increment</button> {" "}
        <button onClick={countDecrement}>Decrement</button> {" "}
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default ClickEvent