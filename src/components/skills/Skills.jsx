import React from "react";
import SkillsLevel from "./SkillsLevel";

const Skills = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="sm:order-2 font-bold relative">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black dark:text-gray-700">
              Skills
            </div>
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Compétences
            </h2>
          </div>
          <div className="text-slate-500 sm:order-1">
            <SkillsLevel skillsName="Maîtrise de la rédaction web" percentage={90} />
            <SkillsLevel skillsName="Optimisation SEO" percentage={80} />
            <SkillsLevel skillsName="Recherche d'informations" percentage={85} />
            <SkillsLevel skillsName="Adaptabilité du style de rédaction" percentage={75} />
            <SkillsLevel skillsName="Création de titres accrocheurs" percentage={85} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
