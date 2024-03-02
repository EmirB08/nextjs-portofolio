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
		description: "A recreation of Enhetsregisteret API created with React/Vite and JoyUI.",
		imageSrc: "/media/Enhetsregisteret.png",
		projectLink: "https://cool-gumption-a40c50.netlify.app/",
		githubLink: "https://github.com/EmirB08/vite-react-project-3",
	},
    {   
        id: 2,
		title: "Blog Gallery",
		description: "A blog gallery example created with React/Vite and MUI.",
		imageSrc: "/media/Blog.png",
		projectLink: "https://ornate-puppy-da5e48.netlify.app/",
		githubLink: "https://github.com/EmirB08/vite-react-project-1",
	},
	{   
        id: 3,
		title: "API Project - TV",
		description: "Project leader on a project where we created a TV shows database using the TVMaze API.",
		imageSrc: "/media/API.png",
        projectLink: "https://emirb08.github.io/gruppeprosjekt-api/",
		githubLink: "https://github.com/EmirB08/gruppeprosjekt-api",
		
	},
    {   
        id: 4,
		title: "Quiz Project",
		description: "Project leader on a project where we created a HTML/CSS/JS quiz.",
		imageSrc: "/media/Quiz.png",
		projectLink: "https://emirb08.github.io/gruppeprosjekt-quiz/",
		githubLink: "https://github.com/EmirB08/gruppeprosjekt-quiz",
	},
    {   
        id: 5,
		title: "API Project - News",
		description: "Project leader on a webpage where we designed a news site using an API to display Google News.",
		imageSrc: "/media/News.png",
		projectLink: "https://emirb08.github.io/gruppeprosjekt-mini/",
		githubLink: "https://github.com/EmirB08/gruppeprosjekt-mini",
	},
    {   
        id: 6,
		title: "Soundboard",
		description: "A soundboard made with JavaScript.",
		imageSrc: "/media/RMP.png",
		projectLink: "https://emirb08.github.io/RMP/",
		githubLink: "https://github.com/EmirB08/RMP",
	},
    
	
];

const Projects = () => {
	return (
		<main>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
						<CardContent className="space-y-2 flex-grow mt-4">
							<CardTitle>{project.title}</CardTitle>
							<CardDescription>{project.description}</CardDescription>
						</CardContent>
						<div className="flex space-x-2 p-4">
							{project.githubLink && (
								<Link href={project.githubLink} passHref target="_blank">
									<GitHubLogoIcon className="h-6 w-6 text-teal-600 dark:text-teal-600 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110" />
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
