"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';


const handleDownloadCV = () => {
    
    const cvUrl = '/resume/sanket_agrawal_resume.pdf';

    window.open(cvUrl, '_blank');
};

function HeroSection() {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
               <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                {"Hello, I'm"}{" "}
                </span>
                <br/>
                <TypeAnimation
                    sequence={[
                        'Sanket',
                        1000, 
                        'Full Stack Developer',
                        1000,
                        'CDAC Certified',
                        1000,
                        'Data Enthusiast',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            A full stack developer and skilled professional with expertise in all layers of web application development, including front-end, back-end, and database management. 
            </p>
            <div>
                <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me</button>
                <button
                 className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'
                 onClick={handleDownloadCV}
                 >
               
                    <span className='block bg-[#121212]  hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                </button>
            </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                <Image
                src="/images/hero-image.png"  
                alt="hero-image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
                style={{ borderRadius: '50%' }}
            />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection