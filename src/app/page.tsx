import React from "react";
import MainContainer from "../components/main-container";
import Navbar from "@/components/navbar";
import { ModeToggle } from "@/components/mode-toggle";
import { LinkedInLogoIcon, TwitterLogoIcon, DiscordLogoIcon, InstagramLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Home: React.FC = () => {
	return (
    <>
    
			<ModeToggle />
		<MainContainer>
			<Navbar />
      
			<h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">Emir Baftiarovic</h1>
      <div className="flex justify-start">
        <DiscordLogoIcon className="h-8 w-8"/>
        <LinkedInLogoIcon className="h-8 w-8"/>
        <InstagramLogoIcon className="h-8 w-8"/>
        <GitHubLogoIcon className="h-8 w-8"/>
        <TwitterLogoIcon className="h-8 w-8"/>
        </div>
			<p className="text-xs md:text-sm lg:text-base text-glossy">
				Jeg er interessert i både front-end og back-end og jobber nå med å få
				bedre forståelse for back-end med frameworks som Next.js/Express.js og
				med UI frameworks som JoyUI, Radix og Shadcn/ui for front-end design.
			</p>
		</MainContainer>
    <div className="md:flex hidden justify-start align-top pt-4 pr-4"></div>
    </>
	);
};

export default Home;
