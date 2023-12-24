"use client";
import React, {useState , useTransition} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title : "Skills",
        id : "skills",
        content : (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Java Spring Boot</li>
                <li>Express JS</li>
                <li>MongoDB</li>
                <li>React JS</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title : "Education",
        id : "education",
        content : (
            <ul className='list-disc pl-2'>
                <li>{"CDAC | CDAC-PUNE"}</li>
                <li>{"BE | PUNE UNIVERSIY"}</li>
            </ul>
        )
    },
    {
        title : "Experience",
        id : "experience",
        content : (
            <ul className='list-disc pl-2'>
                <li>{"Full Stack Developer | Ataloud Technologies Pvt Ltd"}</li>
            </ul>
        )
    }
]


function AboutSection() {

    const [tab,setTab] = useState("skills");
    const [isPending , startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() =>{
            setTab(id);
        });
    }

  return (
    <section className='text-white' id='about'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" alt='about-image' width={500} height={500}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
                A full stack developer at Ataloud Technologies who has completed CDAC. I am a skilled professional with expertise in all layers of web application development, including front-end, back-end, and database management
            </p>
            <div className='flex flex-row justify-start mt-8'>
                <TabButton 
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}
                >
                    {" "}
                    Skills{" "}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"}
                >
                    {" "}
                    Education{" "}
                </TabButton>
                <TabButton 
                selectTab={() => handleTabChange("experience")} 
                active={tab === "experience"}
                >
                    {" "}
                    Experience{" "}
                </TabButton>
               
            </div>
            <div className='mt-8'>
                {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
        </div>
        </div>

    </section>
  )
}

export default AboutSection