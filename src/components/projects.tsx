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
		title: "Enhetsregisteret",
		description:
			"En gjenskapning av Brønnøysundregistrene sin API for enhetsregisteret laget med React/Vite og JoyUI.",
		imageSrc: "/media/Enhetsregisteret.png",
		projectLink: "https://cool-gumption-a40c50.netlify.app/",
		githubLink: "https://github.com/EmirB08/vite-react-project-3",
	},
	{
		id: 2,
		title: "Blogg Galleri",
		description: "Et blogg galleri eksempel laget med React/Vite og MUI.",
		imageSrc: "/media/Blog.png",
		projectLink: "https://ornate-puppy-da5e48.netlify.app/",
		githubLink: "https://github.com/EmirB08/vite-react-project-1",
	},
	{
		id: 3,
		title: "API Prosjekt - TV",
		description:
			"Prosjektleder for en oppgave hvor vi laget en nettside for TV programmer ved bruk av TVMaze API.",
		imageSrc: "/media/API.png",
		projectLink: "https://emirb08.github.io/gruppeprosjekt-api/",
		githubLink: "https://github.com/EmirB08/gruppeprosjekt-api",
	},
	{
		id: 4,
		title: "Quiz Prosjekt",
		description:
			"Prosjektleder for en oppgave hvor vi laget en quiz med ulike tema som HTML/CSS/JS.",
		imageSrc: "/media/Quiz.png",
		projectLink: "https://emirb08.github.io/gruppeprosjekt-quiz/",
		githubLink: "https://github.com/EmirB08/gruppeprosjekt-quiz",
	},
	{
		id: 5,
		title: "API Prosjekt - Nyheter",
		description:
			"Prosjektleder på en nettside hvor vi designet en nyhetsside ved bruk av en API for å vise Google News.",
		imageSrc: "/media/News.png",
		projectLink: "https://emirb08.github.io/gruppeprosjekt-mini/",
		githubLink: "https://github.com/EmirB08/gruppeprosjekt-mini",
	},
	{
		id: 6,
		title: "Soundboard",
		description: "Et soundboard eksempel laget med JavaScript med mulighet for å laste ned de ulike lydene.",
		imageSrc: "/media/RMP.png",
		projectLink: "https://emirb08.github.io/RMP/",
		githubLink: "https://github.com/EmirB08/RMP",
	},
];

const Projects = () => {
	return (
		<main>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 sm:gap-4">
				{projectList.map((project, id) => (
					<Card
						key={id}
						className="h-full flex flex-col hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors duration-300 overflow-hidden">
						<Link href={project.projectLink} passHref target="_blank">
							<div className="relative flex aspect-square w-full group cursor-pointer justify-center items-center overflow-hidden">
								<Image
									alt={project.title}
									className="object-fit w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110 dark:brightness-75"
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
				))}
			</div>
		</main>
	);
};

export default Projects;
