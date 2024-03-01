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
			<span className="fixed top-0 right-0">
				<ModeToggle />
			</span>
			<MainContainer>
				<Navbar />
				<h2 className="text-4xl font-bold mb-1 bg-clip-text text-pink-600">
					Emir Baftiarovic - Front End Developer
				</h2>
				<p className="text-xs md:text-sm lg:text-base mt-6 text-gray-800 dark:text-gray-300 mb-32 font-light">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					voluptatum consequatur saepe nesciunt eius distinctio voluptas
					assumenda eos fugit consectetur incidunt suscipit explicabo temporibus
					maiores laborum, quasi harum alias sapiente nemo itaque repudiandae
					voluptate quis. Id alias sunt velit molestias, porro soluta, corrupti
					reiciendis, quibusdam consequuntur laboriosam molestiae perspiciatis
					quasi.
				</p>
				<h2 className="text-4xl text-glossy font-bold mb-1 bg-clip-text text-pink-600">
					Skills
				</h2>
				<SkillsAccordion />

				<div className="mt-32">
					<h2 className="text-4xl text-glossy font-bold mt-32 bg-clip-text text-pink-600 mb-4">
						Projects
					</h2>
					<Projects />
				</div>
				<ContactForm />
			</MainContainer>
		</>
	);
};

export default Home;
