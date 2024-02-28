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
					Experienced with JavaScript, but transitioning to TypeScript for better type safety.
					Learning C# as I am interested in back-end development. I am also spending
					some time with Lua in my free time for WoW Addon development.
					
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>Frameworks</AccordionTrigger>
			<AccordionContent>
				<p className="text-zinc-600 dark:text-zinc-400 font-light text-xs md:text-sm">
					Experienced with React/Vite and Next.js for front-end development. Learning ASP.NET/.NET for back-end development.
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
			<AccordionTrigger>UX/UI</AccordionTrigger>
			<AccordionContent>
				<p className="text-zinc-600 dark:text-zinc-400 font-light text-xs md:text-sm">
					Have a good understanding of UX/UI principles. Experienced with design in Figma and using component libraries like
					MUI, JoyUI, and shadcn/UI for responsive web design. Using Tailwind CSS for CSS-in-JS.
				</p>
			</AccordionContent>
		</AccordionItem>
	</Accordion>
);

export { SkillsAccordion };
