 import React from 'react'
import { useForm } from 'react-hook-form'
 
 function Hooooks() {
    const {register,handleSubmit} = useForm()
   return (
     <div>
        <form action="" onSubmit={handleSubmit(data => console.log(data))}>
                <input {...register('name')} type="text" placeholder='name' />
                <input {...register('email')} type="text" placeholder='email' />
                <input type="submit" />
            </form>
     </div>
   )
 }
 
 export default Hooooks