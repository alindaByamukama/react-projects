import React from 'react'
import { useState } from 'react'

const Content = () => {
  const [name, setName] = useState('Dave')
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave']
    const int = Math.floor(Math.random() * 3)
    setName(names[int])
  }
    
  const handleClick = () => {
    setCount(count + 1)
    setCount(count +1)
    console.log(count)
  }
  
  const handleClick2 = () => {
    console.log(count)
  }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
      </p>
      <button onClick={handleNameChange}>Chane Name</button>
      <button onClick={handleClick}>Click Me 2</button>
      <button onClick={handleClick2}>Click Me 3</button>
    </main>
  )
}

export default Content
