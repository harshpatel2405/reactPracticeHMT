import React, { useEffect, useState } from 'react'

const USeEffectDemo2 = () => {
    const [upcount , setupCount ] = useState(0);
    const [downCount , setdowncount] = useState(0);
    useEffect(
        ()=>{
            console.log("Component Called " +  upcount)
        },
        [upcount]
    )
  return (
    <div>
        <h2>Count : {upcount}</h2>
        <h2>Count : {downCount}</h2>
      <button onClick={()=> setupCount(upcount+1)}>Increase Count</button>
      <button onClick={()=> setdowncount(downCount-1)}>Decrease Count</button>
    </div>
  )
}

export default USeEffectDemo2
