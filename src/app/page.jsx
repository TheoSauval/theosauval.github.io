import Image from 'next/image';
import Header from './components/header';
import DownloadButton from './components/downloadButtons';
import OriginalCard from './components/card';
import Footer from './components/footer';
import TimelineItem from './components/timelineItems';
import Contact from './components/contact';

export default function Page() {
  return (
    <>
      <div className="bg-site min-h-screen px-4">
        <Header />
        {/* Presentation */}
        <div id="about" className="m-auto py-10 lg:py-14 px-4 max-w-3xl w-full relative text-center">
          <div className="flex justify-center mt-6">
            <Image
              src="/images/image0.jpg" // Assurez-vous que le chemin est correct
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <h1 className="font-bold text-3xl text-white mt-4">Theo Sauval</h1>
          <h3 className="text-teal-600 mt-2">Développeur front-end | Développeur Junior</h3>
        </div>
        {/* À propos de moi */}
        <div className="m-auto py-10 lg:py-14 px-6 max-w-3xl w-full relative border-teal-600 border rounded-lg">
          <h2 className="font-bold text-2xl text-white">À propos de moi</h2>
          <p className="mt-4 text-teal-600">
            Je suis un développeur front-end débutant, animé par une véritable passion pour le développement web. En ce moment, je suis en formation à Lille Ynov Campus pour me spécialiser en tant que développeur web full-stack. La technologie et la programmation me passionnent profondément, et je prends un immense plaisir à concrétiser des idées en projets tangibles.
          </p>
        </div>
        <div className="m-auto max-w-3xl flex items-center justify-end py-5 px-4">
          <DownloadButton />
        </div>
        {/* Compétences */}
        <div id="skills" className="m-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-white">Mes compétences</h2>
          <p className="text-teal-600 pb-8">
            Voici les technologies que j'utilise pour créer des applications dynamiques et conviviales.
          </p>
        </div>
        <div className="m-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8 px-4">
          <OriginalCard text={<> Je me sers de <span className="font-bold">React</span> pour développer des interfaces utilisateur à la fois dynamiques et flexibles dans mes applications.</>} />
          <OriginalCard text={<> J'ai été immédiatement séduit par <span className="font-bold">TailwindCSS</span> et je crois que c'est l'outil idéal pour gérer le CSS.</>} />
          <OriginalCard text={<> J'utilise <span className="font-bold">JavaScript</span> par défaut pour mes projets car il permet de créer des applications web interactives et performantes.</>} />
          <OriginalCard text={<> Mon choix par défaut pour développer des projets web est <span className="font-bold">Next.js</span>, et je les déploie toujours sur <span className="font-bold">Vercel</span>.</>} />
          <OriginalCard text={<> Je maîtrise <span className="font-bold">Figma</span> pour la conception de prototypes et d'interfaces utilisateur intuitives et attrayantes.</>} />
          <OriginalCard text={<> Je possède également des compétences en <span className="font-bold">Java</span>, <span className="font-bold">PHP</span>, <span className="font-bold">SQL</span>, <span className="font-bold">HTML</span> et <span className="font-bold">CSS</span> pour le développement complet de solutions web.</>} />
        </div>
        <div id="projects" className="m-auto max-w-3xl px-4">
          <h2 className='text-2xl font-bold text-white'>Mes projets</h2>
          <p className='text-teal-600 pb-8'>Découvrez mes projets réalisés.</p>
        </div>
        {/* Project */}
        <div className="m-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 pb-8 px-4" id="projet">
          <OriginalCard text={<> <span className="font-bold">Portfolio</span> - Mon portfolio personnel, conçu pour présenter mes compétences et mes projets. <a href="" className="text-teal-600">Voir le projet</a></>} />
          <OriginalCard text={<> <span className="font-bold">Profitz</span> - Profitz est une plateforme en ligne qui propose des outils d'analyse financière pour aider les investisseurs à maximiser leurs profits en optimisant leurs stratégies d'investissement. <a href="https://app.profitz.fr/" className="text-teal-600" >Voir le projet</a></>} />
          <OriginalCard text={<> <span className="font-bold">Votre appart neuf</span> - Site de gestion pour une agence immobilière. <a href="https://www.votreappartneuf.com/" className="text-teal-600" target='_blanck'>Voir le projet</a></>} />
          <OriginalCard text={<> <span className="font-bold">Projet a venir</span> - En développement... <a href="" className="text-teal-600">Voir le projet</a></>} />
        </div>
        {/* Formation */}
        <div id="education" className="m-auto max-w-3xl px-4">
          <h2 className='text-2xl font-bold text-white'>Ma formation</h2>
          <p className='text-teal-600 pb-8'>Découvrez mon parcours de formation.</p>
        </div>
        <div className="m-auto max-w-3xl py-10 px-4">
          <div className="space-y-8">
            <TimelineItem
              title="B3 Informatique - Option Développement"
              institution="Lille Ynov Campus, Lille"
              duration="Sept. 2024 - En cours"
            />
            <TimelineItem
              title="B2 Informatique"
              institution="Lille Ynov Campus, Lille"
              duration="Sept. 2023 - Juil. 2024"
            />
            <TimelineItem
              title="B1 Informatique"
              institution="Lille Ynov Campus, Lille"
              duration="Sept. 2022 - Juil. 2023"
            />
            <TimelineItem
              title="Baccalauréat Technologique - STI2D (2022)"
              institution="Lycée Edouard Branly, Amiens"
              duration=""
            />
          </div>
        </div>
        {/* Contact */}
        <div id="contact" className="m-auto max-w-3xl px-4">
          <h2 className='text-2xl font-bold text-white'>Me contacter</h2>
          <p className='text-teal-600 pb-8'>N'hésitez pas à me contacter pour toute question ou proposition.</p>
        </div>
        <div className="m-auto max-w-3xl py-10 px-4">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}
