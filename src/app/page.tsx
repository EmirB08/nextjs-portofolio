import React from "react";
import MainContainer from "../components/main-container";
import Navbar from "@/components/navbar";
import { ModeToggle } from "@/components/mode-toggle";
import Projects from "@/components/projects";
import { SkillsAccordion } from "@/components/accordion";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/contact-form";

const Home: React.FC = () => {
  return (
    <>
      <MainContainer>
        <div className="absolute top-1 right-1">
          <ModeToggle />
        </div>
        <Navbar />
        <h2
          id="about"
          className="text-4xl font-bold mb-1 bg-clip-text dark:text-teal-600 text-teal-800"
        >
          Emir Baftiarovic - Fullstack-utvikler
        </h2>
        <ul className="list-none p-0">
          <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 dark:before:bg-teal-600 before:bg-teal-800 before:rounded-sm">
            <a
              href="https://github.com/EmirB08"
              target="_blank"
              className="mx-1 relative hover:underline"
              style={{
                textDecorationThickness: "1px",
                textUnderlineOffset: "4px",
              }}
            >
              GitHub
            </a>
          </li>
          <li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 dark:before:bg-teal-600 before:bg-teal-800 before:rounded-sm">
            <a
              href="https://gitlab.com/emir9155412"
              target="_blank"
              className="mx-1 relative hover:underline"
              style={{
                textDecorationThickness: "1px",
                textUnderlineOffset: "4px",
              }}
            >
              GitLab
            </a>
          </li>
        </ul>
        <p className="text-sm md:text-sm lg:text-sm mt-1 text-gray-950 dark:text-gray-300 mb-12 font-light shadow-transparent">
          Fullstack-utvikler med interesse for å skape interaktive og effektive
          webapplikasjoner med moderne webteknologier. Jeg har fullført
          Kodehode, et intensivt kurs i frontend-utvikling, hvor jeg raskt fikk interesse for JavaScript og React. Etter kurset fikk jeg praksisplass hos Elfly i Bergen hvor jeg jobbet med fullstack-utvikling av webbaserte kartløsninger. Med denne erfaringen har jeg utviklet solid kompetanse innenfor både frontend-utvikling og backend-utvikling, og ser nå etter muligheter til å vokse videre som utvikler med fokus på kvalitet og innovasjon.
        </p>
        <h2
          id="skills"
          className="text-4xl text-glossy font-bold mb-1 bg-clip-text dark:text-teal-600 text-teal-800"
        >
          Ferdigheter
        </h2>
        <SkillsAccordion />

        <div className="mt-16">
          <h2
            id="projects"
            className="text-4xl text-glossy font-bold mt-12 bg-clip-text dark:text-teal-600 text-teal-800 mb-4"
          >
            Prosjekter
          </h2>
          <Projects />
        </div>
        <ContactForm />
      </MainContainer>
    </>
  );
};

export default Home;
