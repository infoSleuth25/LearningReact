import React, { useEffect, useState } from 'react'
import LoggerComponent from './components/LoggerComponent'
import Resize from './components/Resize'

const App = () => {
  // const [count,setCount] = useState(0);
  // const [count2,setCount2] = useState(0);
  // function handleClick(){
  //   setCount(count+1);
  // }

  // function handleClick2(){
  //   setCount2(count2+1);
  // }

  // // variation 1
  // useEffect(()=>{
  //   alert('I will run on each render');
  // });

  // // variation 2
  // useEffect(()=>{
  //   alert('Runs on first render');
  // },[]);

  // // variation 3
  // useEffect(()=>{
  //   alert('Runs when count is updated');
  // },[count]);

  // // variation 4 Multiple Dependancy
  // useEffect(()=>{
  //   alert('Runs when anyone count is updated');
  // },[count,count2]);

  // // variation 5 - clean up function
  // useEffect(()=>{
  //   alert('Count is updated');
  //   return ()=>{
  //     alert('Count is unmounted from the UI');
  //   }
  // },[count]);

  
  
  return (
    <div>
      {/* <button onClick={handleClick}>Click me 1</button>
      <p>current count1 = {count}</p>
      <button onClick={handleClick2}>Click me 2 </button>
      <p>current count 2 = {count2}</p> */}

      {/* <LoggerComponent /> */}
      {/* <Resize /> */}
    </div>
  )
}

export default App