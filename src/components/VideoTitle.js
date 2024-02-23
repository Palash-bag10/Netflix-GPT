import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute aspect-video w-full bg-gradient-to-r from-black pl-6 pt-[15%] md:pl-16'>
      <div className='space-y-2 text-white flex flex-col'>
        <h2 className='mb-4 text-5xl font-bold'> {title} </h2>
        <p className=' w-1/4 text-lg'> {overview} </p>
        <div className=' flex mt-5 space-x-4'>
          <button className=' bg-zinc-300 text-zinc-800 font-semibold text-xl px-10 py-2 rounded-md'> Play </button>
          <button className=' bg-zinc-200 text-white font-semibold text-xl px-10 py-2 rounded-md bg-opacity-20'> More Info </button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle
