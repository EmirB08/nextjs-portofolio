import React from "react";
import MainContainer from "../components/main-container";
import Navbar from "@/components/navbar";
import { ModeToggle } from "@/components/mode-toggle";
import {
	LinkedInLogoIcon,
	TwitterLogoIcon,
	DiscordLogoIcon,
	InstagramLogoIcon,
	GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { SkillsAccordion } from "@/components/accordion";

const Home: React.FC = () => {
	return (
		<>
    <span className="fixed top-6 right-6">
			<ModeToggle />
    </span>
			<MainContainer>
				<Navbar />

				<h2 className="text-4xl text-glossy font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
					Emir Baftiarovic - Front End Developer
				</h2>
				<div className="flex justify-start gap-2 mb-1">
					<DiscordLogoIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400  dark:group-hover:fill-zinc-300" />
					<LinkedInLogoIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400  dark:group-hover:fill-zinc-300" />
					<InstagramLogoIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400  dark:group-hover:fill-zinc-300" />
					<GitHubLogoIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400  dark:group-hover:fill-zinc-300" />
					<TwitterLogoIcon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400  dark:group-hover:fill-zinc-300" />
				</div>
				<p className="text-xs md:text-sm lg:text-base mt-6 text-zinc-600 dark:text-zinc-400 mb-32 font-light">
					Jeg er interessert i både front-end og back-end og jobber nå med å få
					bedre forståelse for back-end med frameworks som Next.js/Express.js og
					med UI frameworks som JoyUI, Radix og Shadcn/ui for front-end design.
				</p>

        <h2 className="text-4xl text-glossy font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
					Skills
				</h2>
        <SkillsAccordion />
        
        <div className="mt-32">
        <h2 className="text-4xl text-glossy font-bold mb-1 mt-32 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
					Projects
				</h2>
        </div>
			</MainContainer>
		</>
	);
};

export default Home;
