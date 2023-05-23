import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave']
        const int = Math.floor(Math.random() * 3)
        return names[int]
    }
    
  const handleClick = () => {
      console.log('You clicked the button')
  }
  
  const handleClick2 = (name) => {
    console.log(`${name} was called`)
  }

  const handleClick3= (e) => {
    console.log(e.target.innerText)
  }

  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {handleNameChange()}!
      </p>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => handleClick2('Dave')}>Click Me 2</button>
      <button onClick={(e) => handleClick3(e)}>Click Me 3</button>
    </main>
  )
}

export default Content
