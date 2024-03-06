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
					className="text-4xl font-bold mb-1 bg-clip-text dark:text-teal-600 text-teal-800">
					Emir Baftiarovic - Front-End Developer
				</h2>
				<p className="text-sm md:text-sm lg:text-base mt-2 text-gray-950 dark:text-gray-300 mb-32 font-light shadow-transparent">
					Front-end developer working towards full-stack development.
					Focused on modern and efficient solutions to web development in both design and code.
				</p>
				<h2
					id="skills"
					className="text-4xl text-glossy font-bold mb-1 bg-clip-text dark:text-teal-600 text-teal-800">
					Skills
				</h2>
				<SkillsAccordion />

				<div className="mt-32">
					<h2
						id="projects"
						className="text-4xl text-glossy font-bold mt-32 bg-clip-text dark:text-teal-600 text-teal-800 mb-4">
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
