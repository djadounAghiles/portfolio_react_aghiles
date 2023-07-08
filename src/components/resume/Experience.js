import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - present</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Taste Wonderlust  Import-Export Company&apos;s owner"
            subTitle="( February 2023 — Present)"
            result="Ottawa"
            des="Developing and implementing business strategies to drive growth and profitability.
            Identifying and establishing relationships with international suppliers and buyers.
            Conducting market research to identify potential product opportunities and target markets.
            Negotiating contracts and agreements with suppliers and clients.
            Managing the logistics of importing and exporting goods, including shipping, customs, and documentation."
          />
          <ResumeCard
            title=" Customer Service Representative at Petro Canada"
            subTitle="( May 2023 — Present)"
            result="Gatineau"
            des="Greeting and assisting customers in a friendly and professional manner.
            Providing product information, recommendations, and assistance to customers.
            Processing customer transactions accurately and efficiently.
            Handling customer inquiries, concerns, and complaints, and resolving them promptly.
            Maintaining a clean and organized store environment.
            Restocking shelves and ensuring product availability.
            Promoting special offers and upselling products to customers."
          />
          <ResumeCard
            title="Store Manager, Ottawa "
            subTitle=" (September 2021 — April 2023)"
            result="Ottawa"
            des="Overseeing the overall operations and performance of the store.
            Developing and implementing strategies to maximize sales and profitability.
             Setting sales targets and motivating the team to achieve them.
            Managing inventory levels and ensuring proper stock management.
            Recruiting, training, and supervising store staff."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
