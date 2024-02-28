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
				<p className="text-zinc-600 dark:text-zinc-400 font-light text-xs md:text-sm">
					Experienced with{" "}
					<span className="text-pink-600 font-medium">JavaScript</span>
					,transitioning to{" "}
					<span className="text-pink-600 font-medium">TypeScript</span> for
					better type safety. Learning{" "}
					<span className="text-pink-600 font-medium">C#</span> as I am
					interested in back-end development. I am also spending some time with{" "}
					<span className="text-pink-600 font-medium">Lua</span> in my free time
					for WoW Addon development.
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>Frameworks</AccordionTrigger>
			<AccordionContent>
				<p className="text-zinc-600 dark:text-zinc-400 font-light text-xs md:text-sm">
					Experienced with{" "}
					<span className="text-pink-600 font-medium">React/Vite</span> and{" "}
					<span className="text-pink-600 font-medium">Next.js</span> for
					front-end development. Learning{" "}
					<span className="text-pink-600 font-medium">ASP.NET/.NET</span> and{" "}
					<span className="text-pink-600 font-medium">Express.js</span> for
					back-end development.
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
			<AccordionTrigger>UX/UI</AccordionTrigger>
			<AccordionContent>
				<p className="text-zinc-600 dark:text-zinc-400 font-light text-xs md:text-sm">
					Have a good understanding of UX/UI principles. Experienced with design
					in <span className="text-pink-600 font-medium">Figma</span> and using
					component libraries like{" "}
					<span className="text-pink-600 font-medium">MUI</span>,{" "}
					<span className="text-pink-600 font-medium">JoyUI</span>, and{" "}
					<span className="text-pink-600 font-medium">shadcn/ui</span> for
					minimalist & responsive web design. Using{" "}
					<span className="text-pink-600 font-medium">Tailwind CSS</span> for
					CSS-in-JS.
				</p>
			</AccordionContent>
		</AccordionItem>
	</Accordion>
);

export { SkillsAccordion };
