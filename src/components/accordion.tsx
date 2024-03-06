import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const SkillsAccordion = () => (
	<Accordion type="single" collapsible className="w-full">
		<AccordionItem value="item-1" className="text-sm">
			<AccordionTrigger>Front-end</AccordionTrigger>
			<AccordionContent>
				<p className="text-gray-900 dark:text-gray-300 font-light text-md">
					Experienced with{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						JavaScript/TypeScript
					</span>{" "}
					and building web applications using{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						React/Vite
					</span>{" "}
					and{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						Next.js
					</span>
					. For UX/UI I have focused on learning component libraries like{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						MUI
					</span>
					,{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						JoyUI
					</span>
					, and{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						shadcn/ui
					</span>{" "}
					for minimalist & responsive web design and{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						Tailwind CSS
					</span>{" "}
					for CSS-in-JS.
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2" className="text-sm">
			<AccordionTrigger>Back-end</AccordionTrigger>
			<AccordionContent>
				<p className="text-gray-900 dark:text-gray-300 font-light text-">
					I am currently focused on learning{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						Node.js/Express.js
					</span>{" "}
					and{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						MongoDB/PostgreSQL
					</span>
					for database management. I am also looking to get into{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						C#{" "}
					</span>
					and{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						ASP.NET/.NET
					</span>
					for back-end application development.
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3" className="text-sm">
			<AccordionTrigger>Other</AccordionTrigger>
			<AccordionContent>
				<p className="text-gray-900 dark:text-gray-300 font-light text-md">
					As a personal hobby I have also been learning{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
					Lua
					</span>{" "}
					to develop WoW Addons. I also have a strong interest in A.I tools like
					Stable Diffusion for image generation and Topaz Labs for image & video
					upscaling using A.I.
				</p>
			</AccordionContent>
		</AccordionItem>
	</Accordion>
);

export { SkillsAccordion };
