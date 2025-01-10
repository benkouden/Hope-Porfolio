import React from "react";
import personImg from "../../assets/person2.png";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase">Bonjour</p>
              <p className="text-3xl md:text-5xl text-center font-bold text-black/80 dark:text-white">
                Je suis Espoir SOSSAMEVI
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Rédacteur web 
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                J'aide les entreprises et les entrepreneurs à transformer leurs idées en contenus captivants et optimisés pour le web. Articles de blog, pages de site, fiches produits ou newsletters : mes mots racontent votre histoire et renforcent ainsi votre présence en ligne.
              </p>
              <a href="#contact" className="inline-block primary-btn !my-3">
                Contactez-moi
              </a>
            </div>
          </div>
          {/* image section */}
          {/* <div
            className={`bg-[url("https://source.unsplash.com/random")] bg-no-repeat bg-center bg-cover `}
          > */}
          <div>
            <img
              src={personImg}
              className="w-full md:max-w-lg mx-auto backdrop-blur-sm"
              alt="person"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
