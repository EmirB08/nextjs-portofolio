import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const SkillsAccordion = () => (
	<Accordion type="single" collapsible className="w-full">
		<AccordionItem value="item-1">
			<AccordionTrigger>Languages</AccordionTrigger>
			<AccordionContent>
				<p className="text-gray-900 dark:text-gray-300 font-light text-md">
					Experienced with{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">JavaScript</span>
					,transitioning to{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">TypeScript</span> for
					better type safety. Learning{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">C#</span> as I am
					interested in back-end development. I am also spending some time with{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">Lua</span> in my free time
					for WoW Addon development.
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>Frameworks</AccordionTrigger>
			<AccordionContent>
				<p className="text-gray-900 dark:text-gray-300 font-light text-">
					Experienced with{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">React/Vite</span> and{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">Next.js</span> for
					front-end development. Learning{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">ASP.NET/.NET</span> and{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">Express.js</span> for
					back-end development.
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
			<AccordionTrigger>UX/UI</AccordionTrigger>
			<AccordionContent>
				<p className="text-gray-900 dark:text-gray-300 font-light text-md">
					Have a good understanding of UX/UI principles. Experienced with design
					in <span className="dark:text-teal-600 text-teal-800 font-medium">Figma</span> and using
					component libraries like{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">MUI</span>,{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">JoyUI</span>, and{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">shadcn/ui</span> for
					minimalist & responsive web design. Using{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">Tailwind CSS</span> for
					CSS-in-JS.
				</p>
			</AccordionContent>
		</AccordionItem>
	</Accordion>
);

export { SkillsAccordion };
