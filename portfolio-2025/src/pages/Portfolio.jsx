import React, { useEffect, useState, useRef  } from "react";
import Card from "../components/ui/card";
import ExperienceCard from "../components/ui/ExperienceCard";
import ProjectLayout from "../components/ui/ProjectLayout";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";


export default function Portfolio() {

  const [offsetY, setOffsetY] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [clicked, setClicked] = useState(false);

  const handleImageClick = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 1000); 
  };

  const aboutRef = useRef(null);
  const ae2iRef = useRef(null);
  const finderRef = useRef(null);
  const lolguessrRef = useRef(null);
  const contactRef = useRef(null);

  // Fonction pour scroller vers une section spécifique
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

    const body = document.body;
    
    body.addEventListener('mouseenter', () => {
      document.documentElement.style.setProperty('--scrollbar-opacity', '1');
    });
    
    body.addEventListener('mouseleave', () => {
      document.documentElement.style.setProperty('--scrollbar-opacity', '0');
    });

  const sections = [
    {
      id: "ae2i",
      title: "Site AE2I",
      description: "Le site web de l'AE2I, association étudiante de l'IUT d'Arles.",
      image: "/ae2i-logo_light.png",
      ref: ae2iRef,
      languages: ["flask", "mongodb", "javascript", "react", "nodejs", "css3", "docker", "git"],
    },
    {
      id: "finder",
      title: "Finder",
      description: "Le site web Finder, un projet de mise en relation entre particuliers proposant et recherhcant des services.",
      image: "/finder_logo_title.png",
      ref: finderRef,
      languages: ["javascript", "laravel", "git", "docker", "postgresql", "php", "css3"],
    },
    {
      id: "lolguessr",
      title: "LoLGuessr",
      description: "Un jeu web réalisé à l'aide de l'Api de Riot Games, permettant de tester ses connaissances sur le jeu League of Legends.",
      image: "/lolguessr-header.jpg",
      ref: lolguessrRef,
      languages: ["javascript", "react", "nodejs", "webpack", "css3"],
    }
  ];

  return (
    <div className="container">
      <section className="hero">
        <img src="/IMG-20241215-WA0002.jpg" alt="Paysage" className="background-image" />
        <div className="content">
          <h1>Mon Portfolio</h1>
          <h2>PAUGAM Lucas</h2>
          <p>
            Passionné par le développement web et les nouvelles technologies, je
            suis spécialisé en Développement backend et j'aime créer des expériences interactives.
          </p>
        </div>
      </section>

      {/* Section About me */}
      <section className="section">
        <div className="about-me-container">
          <div className="about-me-left">
            <ExperienceCard
              title="Serveur au Bar-Restaurant"
              date="Juillet 2024 - Aout 2024"
              location="Plounevez-Lochrist, France"
              company="Camping Ode Vraz"
              description="Travail saisonnier dans un camping, expérience dans le service client, gestion des commandes, et travail en équipe dans un environnement dynamique."
            />
            <ExperienceCard
              title="Stage Développeur Full Stack"
              date="Avril 2024 - Juillet 2024"
              location="Gouesnou, France"
              company="Groupe Asten"
              description="J'ai effectué ce stage de 3 mois chez Asten et ai travaillé sur une plateforme d'automatisation avec l'Équipe MCO, m'ayant appris des nouvelles tehcnologies et concepts comme FLask et API REST."
            />
            <ExperienceCard
              title="Livreur de Pizza"
              date="Mai 2022 - Aout 2024"
              location="Le Folgoët, France"
              company="Royal Pizz"
              description="Livreur de pizza et commis de cuisine, expérience dans la gestion des commandes, la relation client, et le travail en équipe."
            />
          </div>

          <div className="about-me-right">
            <div className="profile-card">
              <img id="profile-photo" src="/THTASME.jpg" alt="Photo de profil" className={clicked ? 'clicked' : ''} onClick={handleImageClick} />
              <h3>PAUGAM Lucas</h3>
              <p>Étudiant en troisième année de BUT Informatique, je suis passionné par le développement web et logiciel, avec une ambition de me spécialiser en IA. J’aime la création, les concepts originaux et relever des défis, que ce soit en programmation, en escalade ou à travers les jeux vidéo compétitifs. Toujours curieux, j’aime explorer et innover pour allier technique et imagination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section">
      <h2>Compétences Techniques</h2>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <h3>Langages de programmation</h3>
        <div className="icons">
          <i className="devicon-python-plain colored"></i>
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-cplusplus-plain colored"></i>
        </div>
      </div>

      <div>
        <h3>Frameworks & Bibliothèques</h3>
        <div className="icons">
          <i className="devicon-react-original colored"></i>
          <i className="devicon-laravel-plain colored"></i>
        </div>
      </div>

      <div>
        <h3>Outils & Technologies</h3>
        <div className="icons">
          <i className="devicon-git-plain colored"></i>
          <i className="devicon-docker-plain colored"></i>
        </div>
      </div>
      </section> */}

      {/* Section Sommaire avec Cartes */}
      <section className="section">
        <h1>Mes Créations</h1>
        <div className="cards">
          {sections.map((section) => (
            <div
              key={section.id}
              className="card-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Card
                image={section.image}
                title={section.title}
                description={section.description}
                languages={section.languages}
                onClick={() => scrollToSection(section.ref)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Sections détaillées */}
      <section
        key="ae2i"
        ref={ae2iRef}
        className="section"
        id="ae2i"
      >
        {/* <h2>Site web AE2I</h2> */}
        <ProjectLayout
          title="Site web AE2I"
          images={["/ae2i-pics/Capture d'écran 2025-02-14 114002.png", "/ae2i-pics/AE2I - .png"]}
          skills="Flask, MongoDB, React, CSS, API REST, architecture API FIRST, Docker, Git"
          summary="Le site web de l'AE2I, association étudiante de l'IUT d'Arles, créée sur mesure à leur demande. Cette application web est ma première avec l'architecture API First."
          details="Dans ce projet, je me suis principalement occupé de créer l'interface API via un backend géré par le framework flask ainsi qu'une base de données MongoDB. Je me suis d'abord occuppé de l'architecture du site, créant un docker, puis j'ai développé les routes et les modèles de données. Enfin, j'ai contribué à la création de l'interface utilisateur avec React et CSS."
        />
      </section>

      <section
        key="finder"
        ref={finderRef}
        className="section"
        id="finder"
      >
        {/* <h2>Finder</h2> */}
        <ProjectLayout
          title="Finder"
          images={["/finder-pics/Capture_decran_2024-01-11_161833.png", "/finder-pics/Capture_decran_2024-01-11_161952.png"]}
          skills="PHP, Laravel, blade, PostgreSQL, Docker, Git, CSS, Gestion bdd, scrum"
          summary="Finder est un site web réalisé en groupe, appliquant la méthode scrum tout au long de ce projet. Ce site vise à mettre en relation des particuliers proposant et recherchant des services."
          details="Dans ce projet j'ai pour la première fois entierement modelisé une base de données. J'ai également pu apprendre et m'entrainer davantage sur mes capacités de développement front-end."
        />
      </section>

      <section
        key="lolguessr"
        ref={lolguessrRef}
        className="section"
        id="lolguessr"
      >
        {/* <h2>LoLGuessr</h2> */}
        <ProjectLayout
          title="LoLGuessr"
          images={["/lolguessr-pics/image (8).png", "/lolguessr-pics/Capture d'écran 2025-02-14 114528.png"]}
          skills="React, JavaScript, Introduction API, CSS"
          summary="Le but de ce site était de s'exercer à l'utilisation de requetes API. Pour cela, j'ai utilisé react et webpack afin de créer un jeu web permettant de tester ses connaissances sur le jeu League of Legends."
          details="Afin de mener à bien ce projet, j'ai du acceder au site de developpeur du site Riot Games, éditeur du jeu League of Legends sur lequel se base le jeu."
        />
      </section>
      {/* {sections.map((section) => (
      ))} */}

      {/* Section Contact */}
      <section className="section">
        <h1>Me contacter</h1>
        <div className="contact-links">
        <a href="mailto:lucas.paugam@gmail.com" className="contact-item">
          <FaEnvelope className="icon" /> Email
        </a>
        <a href="tel:+33782546412" className="contact-item">
          <FaPhone className="icon" /> +33782546412
        </a>
        <a href="https://www.linkedin.com/in/lucas-paugam-8915712a1/" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaLinkedin className="icon" /> LinkedIn
        </a>
        <a href="https://github.com/Pogamos" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaGithub className="icon" /> GitHub
        </a>
      </div>
      </section>
    </div>
  );
}
