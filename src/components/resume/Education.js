import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="College Diploma In Computer Programming "
            subTitle="La Cité - College of Applied Arts and Technology, Ottawa  January 2022 — Present"
            result="8"
            des="Connaissances en Programmation Informatique"
          />
          <ResumeCard
            title=" Bachelor&apos;s Degree In Mathematics And Computer Science"
            subTitle=" Mouloud Mammeri University, Tizi Ouzou, ALGERIA 2019 — August 2021"
            result="94.20% "
          />
           <ResumeCard
            title="  High school degree in Mathematics"
            subTitle="  Diouani-Md-Said, Tizi Ouzou, ALGERIA -  September 2018 — June 2019"
            result="15,29/20"
          />
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">April 2021 — July 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
            <ResumeCard
            title="JAVA programming Certificate"
            subTitle="Higher Shool of Tizi-Ouzou, ALGERIA April 2021 — July 2021"
            result="88%"
            des=" Connaissances de base sur le language de programmation JAVA "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education