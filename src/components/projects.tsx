import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const projectList = [
  {
    id: 1,
    title: "Elfly/NEA Map Tool",
    description:
      "En kartløsning for Elfly og NEA for visualisering, analyse og kartlegging av potensielle markeder for elektrisk flygning.",
    imageSrc: "/media/MapTool-light.png",
    projectLink: "https://map.nordicnea.com/",
    githubLink: "https://gitlab.com/el-fly/map_web_app",
  },
  {
    id: 2,
    title: "Enhetsregisteret",
    description:
      "En gjenskapning av Brønnøysundregistrene sin API for enhetsregisteret laget med React.",
    imageSrc: "/media/Enhetsregisteret.png",
    projectLink: "https://bregisteret.vercel.app/",
    githubLink: "https://github.com/EmirB08/vite-react-project-3",
  },
  {
    id: 3,
    title: "Quiz Prosjekt",
    description:
      "Prosjektleder for en oppgave der vi utviklet en quiz med ulike temaer laget med JavaScript.",
    imageSrc: "/media/Quiz.png",
    projectLink: "https://emirb08.github.io/gruppeprosjekt-quiz/",
    githubLink: "https://github.com/EmirB08/gruppeprosjekt-quiz",
  },
];

const Projects = () => {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-4">
        {projectList.map((project, id) => {
          return (
            <Card
              key={id}
              className="h-full flex flex-col hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors duration-300 overflow-hidden ring-2 ring-gray-300 dark:ring-slate-600"
            >
              <Link href={project.projectLink} passHref target="_blank">
                <div className="relative flex aspect-square w-full group cursor-pointer justify-center items-center overflow-hidden">
                  <Image
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110 dark:brightness-75"
                    src={project.imageSrc}
                    layout="fill"
                    sizes="50%"
                  />
                </div>
              </Link>
              <Separator />
              <CardContent className="space-y-2 flex-grow mt-6">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <div className="flex space-x-2 p-4">
                {project.githubLink && (
                  <Link href={project.githubLink} passHref target="_blank">
                    <GitHubLogoIcon className="h-6 w-6 text-teal-800 dark:text-teal-600 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" />
                  </Link>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
