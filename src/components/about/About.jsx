import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[90%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              À PROPOS
            </div>
            <h1 className="absolute  whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              À propos de moi
            </h1>
          </div>
          <div className="text-slate-500">
            <p>
              Rédacteur web professionnel avec 3 ans d’expérience dans la création de contenus engageants et optimisés pour le web.
            </p>
            <p>
              Mon objectif ? Aider les marques et les entreprises à captiver leur audience, améliorer leur visibilité en ligne et atteindre leurs objectifs grâce à des contenus sur-mesure. Articles de blog, pages web, fiches produits ou newsletters : chaque mot que je choisis est pensé pour informer, séduire et convertir.
            </p>
            <p>
              Fort de ces années d’expérience, j’allie créativité, stratégie et rigueur pour offrir des contenus de qualité adaptés à vos besoins.
            </p>
            <p>
              Envie de collaborer ? Parlons de votre projet.
            </p>
            <div className="">
              <a
                href="#services"
                className="primary-btn my-6 mr-6 inline-block"
              >
                Mes Services
              </a>
              <a
                href="#contact"
                className="outline-btn my-6"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
