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
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
					tempora aliquid sint perspiciatis, sequi ex. Deleniti ullam nihil
					soluta minus sunt similique perferendis excepturi reiciendis atque
					nesciunt natus illum at culpa hic architecto, tempore cumque assumenda
					accusamus dicta omnis pariatur doloremque neque voluptates. Sapiente
					at necessitatibus accusantium saepe architecto officia!
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-2">
			<AccordionTrigger>Frameworks</AccordionTrigger>
			<AccordionContent>
				<p className="text-zinc-600 dark:text-zinc-400 font-light text-xs md:text-sm">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
					eligendi distinctio dolorem est a provident facere voluptas ea modi
					magni, asperiores esse eum, quasi unde odio tenetur cumque minus quia
					sapiente dolore minima et dolorum odit. Temporibus aperiam commodi
					ullam, voluptate laudantium non veniam laboriosam maxime, perferendis
					nobis autem dolorem.
				</p>
			</AccordionContent>
		</AccordionItem>
		<AccordionItem value="item-3">
			<AccordionTrigger>UX/UI</AccordionTrigger>
			<AccordionContent>
				<p className="text-zinc-600 dark:text-zinc-400 font-light text-xs md:text-sm">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
					facilis quidem molestias quisquam impedit alias neque fuga dolorum
					dicta tempora sed dolor, ipsa sit voluptatibus harum odit ab accusamus
					eligendi omnis. Accusamus, numquam dolore culpa ducimus maiores
					exercitationem dolor quo nam sint nisi repellat nesciunt harum totam
					ullam nobis voluptate.
				</p>
			</AccordionContent>
		</AccordionItem>
	</Accordion>
);

export { SkillsAccordion };
