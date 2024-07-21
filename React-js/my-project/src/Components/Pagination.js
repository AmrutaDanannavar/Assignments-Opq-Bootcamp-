import React from 'react'

const Pagination = (props) => {
    let {pagenumber} = props
  return (
    <div className='flex justify-center space-x-5'>
        <div className='border-2 border-blue-400 bg-violet-400 text-white rounded-2xl w-28'>
            Previous
        </div>
        <div className='border-2 border-blue-400 bg-violet-400 text-white  rounded-2xl w-10'>
            {pagenumber}
        </div>
        <div className='border-2 border-blue-400 bg-violet-400 text-white  rounded-2xl w-28'>
            Next
        </div>
      
    </div>
  )
}

export default Pagination
