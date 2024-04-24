import { useState } from 'react'


import Sidenav from './components/Sidenav'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        

        <Sidenav />
        <Main />
      </div>
    
  )
}

export default App
