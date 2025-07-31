import React, { createContext, useState } from 'react'
import ChildA from './components/ChildA';


const UserContext = createContext();

const App = () => {
  const [user,setUser] = useState('love');
  return (
    <UserContext.Provider value={user}>
      <ChildA />
    </UserContext.Provider>
  )
}

export default App;
export {UserContext};