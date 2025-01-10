import React from "react";
import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdCode, MdTrendingUp } from "react-icons/md";
import { FaRegFileCode ,FaRegNewspaper , FaCube } from 'react-icons/fa';

const Services = [
  {
    name: "Redaction de fiche produits",
    description:
      "Création de descriptions captivantes et optimisées pour le SEO, mettant en valeur les caractéristiques et avantages des produits. Ce service aide à attirer l'attention des consommateurs, améliorer la visibilité sur les moteurs de recherche et encourager les décisions d'achat sur les sites e-commerce.",
    image: "https://picsum.photos/200/300",
    icon: <FaCube className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "Rédaction d'articles optimisé pour le web",
    description:
      "Création de contenus informatifs et engageants, optimisés pour le SEO avec des titres pertinents et des mots-clés stratégiques. Ce service améliore la visibilité sur les moteurs de recherche et aide à captiver l’audience tout en boostant le positionnement des pages.",
    image: "",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Optimisation avec 1.fr",
    description:
      "Optimisation des contenus pour le SEO grâce à 1.fr, un outil qui améliore la sémantique des textes en enrichissant les articles avec des mots-clés pertinents. Cette approche permet de mieux répondre aux attentes des moteurs de recherche, d'améliorer le positionnement et de rendre les contenus plus engageants et naturels pour l'audience.",
    image: "https://picsum.photos/200/302",
    icon: <MdTrendingUp className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Rédaction d'articles de blog ",
    description:
      "Création d'articles de blog engageants, informatifs et optimisés pour le SEO. Chaque texte est conçu pour captiver l'audience, renforcer l'autorité de la marque et améliorer la visibilité sur les moteurs de recherche grâce à une utilisation stratégique des mots-clés et d'une structure claire.",
    image: "https://picsum.photos/200/303",
    icon: <FaRegNewspaper  className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
  {
    name: "Pages de sites web",
    description:
      "Conception de pages web visuellement attrayantes et optimisées pour l'expérience utilisateur. Chaque page est structurée pour offrir une navigation fluide, tout en étant adaptée aux objectifs SEO et à la conversion, garantissant ainsi une meilleure performance et visibilité.",
    image: "https://picsum.photos/200/303",
    icon: <FaRegFileCode  className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Balises meta",
    description:
      "Optimisation des balises Meta (titre, description, etc.) pour améliorer le référencement naturel d’un site web. Ces balises sont essentielles pour la visibilité sur les moteurs de recherche et jouent un rôle clé dans l'augmentation du taux de clics (CTR) en offrant des aperçus attractifs dans les résultats de recherche.",
    image: "https://picsum.photos/200/303",
    icon: <MdCode  className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            className={` ${bgColor} rounded-xl  bg-blue-500/70 text-white  bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;
