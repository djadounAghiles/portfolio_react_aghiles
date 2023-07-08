import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo,} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="Co-Luggage"
          des=" Our company is an innovative online platform that connects travelers and shippers to simplify and reduce the costs of international shipping. We enable users to find reliable travelers, negotiate delivery details, and track their packages in real-time. Our goal is to transform the shipping experience by providing a user-friendly and cost-effective alternative to traditional shipping services, while delivering a personalized and reliable experience."
          src={projectOne}
         

        />
        <ProjectsCard
          title="THALA"
          des="  Thala Artisanal Canning Company offers a range of high-quality food preserves prepared using traditional artisanal methods. Our products showcase the authentic flavors of the Thala region, using fresh, seasonal ingredients. We are committed to providing delicious preserves without any additives or artificial preservatives, catering to both traditional cuisine enthusiasts and adventurous food lovers seeking new flavors."
          src={projectTwo}
         
        />
       
      </div>
    </section>
  );
}

export default Projects