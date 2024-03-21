import React, { useState } from 'react'

function Usestate() {
    const[val,setval] =  useState({name:"",email:""})
    const handleSubmit = (e)=>{
        e.preventDafault();
        console.log(val);
    }
  return (
    <div>
        <form action="" >
            <input onChange={(event)=>({...val,name:name.event.target})} type="text" placeholder='name' />
            <input  onChange={(event)=>({...val,email:email.event.target})} type="text" placeholder='email' />
            <input type="submit" />

        </form>
    </div>
  )
}

export default Usestate