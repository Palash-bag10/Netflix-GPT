import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-[15%] pl-16'>
      <div className='space-y-2'>
        <h2 className=' text-5xl font-bold'> {title} </h2>
        <p className=' w-1/4 text-lg'> {overview} </p>
      </div>
      <div className=' flex mt-5 space-x-4'>
        <button className=' bg-zinc-300 font-semibold text-xl px-10 py-2 rounded-md'> Play </button>
        <button className=' bg-zinc-200 text-white font-semibold text-xl px-10 py-2 rounded-md'> More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
