import React, { useEffect, useState } from 'react'

const Resize = () => {
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(()=>{
    const handleSize = ()=>{
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize',handleSize);
    return ()=>{
        alert("component unmounted");
      window.removeEventListener('resize',handleSize);
    }
  },[]);
  return (
    <div>
        <h1>Window Width : {windowWidth}</h1>
    </div>
  )
}

export default Resize