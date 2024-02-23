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
					Proficient in Javascript, currently transitioning to TypeScript for better type safety.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>Frameworks</AccordionTrigger>
				<AccordionContent>
					Proficient in React using the 
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>UX/UI</AccordionTrigger>
				<AccordionContent>
					Yes. Its animated by default, but you can disable it if you prefer.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);

    export { SkillsAccordion };
