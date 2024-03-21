import React, { useRef } from 'react'

function Useref() {
    const name =  useRef(null);
    const age =  useRef(null);
    const handleClick = (event)=>{
         event.preventDefault()
         console.log(name.current.value,age.current.value);
    }
  return (
    <>
        <form action="" onSubmit={handleClick}>
            <input ref={name} type="text" placeholder='name'/>
            <input ref={age} type="text" placeholder='age' />
            <input type="submit"  />
        </form>
    </>
  )
}

export default Useref