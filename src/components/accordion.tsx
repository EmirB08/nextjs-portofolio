import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const SkillsAccordion = () => (
	<Accordion type="single" collapsible className="w-full">
		<AccordionItem value="item-1">
			<AccordionTrigger>Frontend</AccordionTrigger>
			<AccordionContent>
				<p className="text-gray-900 dark:text-gray-300 font-light text-md">
					Har erfaring med{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						JavaScript/TypeScript
					</span>{" "}
					og utvikling av webapplikasjoner med{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						React/Vite
					</span>{" "}
					og{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						Next.js
					</span>
					. Jeg har også erfaring med komponentbiblioteker som{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						MUI
					</span>
					,{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						JoyUI
					</span>
					, og{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						shadcn/ui
					</span>{" "}
					for minimalistisk og responsiv webdesign og{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						Tailwind CSS
					</span>{" "}
					for CSS-in-JS.
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>Backend</AccordionTrigger>
			<AccordionContent>
				<p className="text-gray-900 dark:text-gray-300 font-light text-md">
					Jeg er for tiden fokusert på å lære meg{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						Node.js/Express.js
					</span>{" "}
					og{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						MongoDB/PostgreSQL
					</span>{" "}
					for databasestyring. Jeg ønsker også å lære meg{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						C#
					</span>{" "}
					og{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						ASP.NET/.NET
					</span>{" "}
					for backend-applikasjonsutvikling.
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
			<AccordionTrigger>Annet</AccordionTrigger>
			<AccordionContent>
				<p className="text-gray-900 dark:text-gray-300 font-light text-md">
					Jeg kan også litt{" "}
					<span className="dark:text-teal-600 text-teal-800 font-medium">
						Lua
					</span>{" "}
					som jeg bruker for å lage WoW Addons. Jeg er ellers interessert i A.I verktøy
					som Stable Diffusion for bildegenerering og Topaz Labs for
					oppskalering av bilder og videoer.
				</p>
			</AccordionContent>
		</AccordionItem>
	</Accordion>
);

export { SkillsAccordion };
