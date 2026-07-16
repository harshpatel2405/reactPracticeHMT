import React, { useState } from 'react'

const UseStateDemo1 = () => {

    // const [state , setState ] = useState(0)
    let [count , setcount ] = useState(0)

    function increaseCounter()
    {
        setcount(count+1)
        console.log(count)
    }

  return (
    <div>
        <h1>Count = {count}</h1>

        <button onClick={increaseCounter} type="button" class="btn btn-primary">Increase Count</button>
    </div>
  )
}

export default UseStateDemo1
