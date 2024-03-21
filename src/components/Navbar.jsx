import React from 'react'

function Navbar({ values }) {
  return (
    <>
    <div className='w-full  px-4 py-3 flex items-center justify-between'>
        <h3>Facebook</h3>
        <div className='px-3 py-2 bg-blue-500 text-white rounded-lg font-semiBold'>
            <h3>No. of Friends</h3>
            <h4>{values.filter(item => item.added).length}</h4>
        </div>
    </div>
    </>
  )
}

export default Navbar