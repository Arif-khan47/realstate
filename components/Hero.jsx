import React from 'react'
import Header from './Shared/Header'
import Image from 'next/image'

function Hero() {
  return (
    <>

      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div className="video-docker absolute top-0 left-0 w-full h-full">
        <video className="min-w-full min-h-full absolute object-cover" src="/img/home.mp4" type="video/mp4" autoPlay muted loop></video>
    <div className="video-content space-y-2">
      <Header/>
    </div>
    </div>
</section>
    </>
  )
}

export default Hero
