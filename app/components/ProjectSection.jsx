"use client";
import React,{useState,useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData  = [
    {
     id : 1,
     title : "Portfolio Website",
     description : "Portfolio website create using Next.js and React.js",
     image : '/images/projects/1.png',
     tag : ["All","Web"],
     gitUrl : 'https://github.com/sanket-agrawal/portfolio',
     previewUrl : 'https://portfolio-orpin-six-93.vercel.app/'
    },
    {
        id : 2,
        title : "Email Sender",
        description : "Full customizable and automation oriented email sender using Express.js and Node.js",
        image : '/images/projects/api.png',
        tag : ["All","Backend"],
        gitUrl : 'https://github.com/sanket-agrawal/email-sender',
        previewUrl : 'https://github.com/sanket-agrawal/email-sender'
    },
    {
        id : 3,
        title : "Thala for a reason",
        description : "A hobby project to follow internet trend using React.js",
        image : '/images/projects/dhoni.png',
        tag : ["All","Backend"],
        gitUrl : 'https://github.com/sanket-agrawal/thala-7-fe',
        previewUrl : 'https://thala-for-a-reason-one.vercel.app/'
    },
    {
        id : 4,
        title : " Dad Jokes",
        description : "Chrome Extension using jokes API to respond Dada Jokes",
        image : '/images/projects/api.png',
        tag : ["All"],
        gitUrl : 'https://github.com/sanket-agrawal/chrome_extension',
        previewUrl : 'https://github.com/sanket-agrawal/chrome_extension'
    },
    {
        id : 5,
        title : " JoinMyRide FE",
        description : "CDAC Study project of Bike Pooling application using React as Frontend , Java Spring Boot as Backend and MySQL as Database",
        image : '/images/projects/5.jpg',
        tag : ["All","Web"],
        gitUrl : 'https://github.com/sanket-agrawal/join_my_ride/tree/master/react-frontend',
        previewUrl : 'https://github.com/sanket-agrawal/join_my_ride/tree/master/react-frontend'
    },
    {
        id : 6,
        title : " JoinMyRide BE",
        description : "CDAC Study project of Bike Pooling application using React as Frontend , Java Spring Boot as Backend and MySQL as Database",
        image : '/images/projects/api.png',
        tag : ["All","Web"],
        gitUrl : 'https://github.com/sanket-agrawal/join_my_ride/tree/master/spring-backend',
        previewUrl : 'https://github.com/sanket-agrawal/join_my_ride/tree/master/spring-backend'
    },
]

function ProjectSection() {

    const [tag,setTag] = useState('All');

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project)=>
        project.tag.includes(tag)
    );

  return (
    <section id='projects'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
           <ProjectTag 
            onClick={handleTagChange}
            name="All" 
            isSelected={tag === 'All'}
            />
            <ProjectTag 
            onClick={handleTagChange}
            name="Backend" 
            isSelected={tag === 'Backend'}
            />
            {/* <ProjectTag 
            onClick={handleTagChange}
            name="Frontend" 
            isSelected={tag === 'Frontend'}
            /> */}
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{
        filteredProjects.map((project) => (
        <ProjectCard
         key={project.id}
         title={project.title}
         description={project.description} 
         imgUrl={project.image}
         gitUrl={project.gitUrl}
         previewUrl={project.previewUrl}
         />)
          )}</div>
    </section>
  )
}

export default ProjectSection