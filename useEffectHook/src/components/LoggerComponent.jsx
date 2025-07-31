import React, { useEffect, useState } from 'react'

const LoggerComponent = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log('Component rendered or count changed : ',count);
    });
    function handleClick(){
        setCount(count+1);
    }
  return (
    <div>
        <h1>
            Count : {count}
        </h1>
        <button onClick={handleClick}>Increment Count</button>
    </div>
  )
}

export default LoggerComponent