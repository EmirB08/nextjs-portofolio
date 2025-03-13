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
          Erfaring med{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            JavaScript/TypeScript
          </span>{" "}
          og utvikling av webapplikasjoner med{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            React
          </span>{" "}
          og{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Next
          </span>
          , med integrasjon mot eksterne APIer og databaser, inkludert{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Google Maps Platform
          </span>
          . Jeg har også god forståelse for utvikling av effektivt og
          responsivt webdesign og erfaring med ulike komponentbiblioteker
          som{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Material UI
          </span>
          ,{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Radix UI
          </span>{" "}
          og{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            shadcn/ui
          </span>
          , samt bruk av{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Tailwind CSS
          </span>
          .
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Backend</AccordionTrigger>
      <AccordionContent>
        <p className="text-gray-900 dark:text-gray-300 font-light text-md">
          Erfaring med{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Node.js/Express.js
          </span>{" "}
          for serverutvikling,{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            MongoDB
          </span>
          ,{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            SQL
          </span>{" "}
          og{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Python
          </span>{" "}
          for databasehåndtering og databehandling av ulike datasett, og{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Google Cloud Platform
          </span>{" "}
          for serverdrift og distribusjon. For øyeblikket er jeg interessert i å
          utvide min kompetanse innenfor backend-utvikling med fokus på{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            C#
          </span>{" "}
          og{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            .NET
          </span>
          .
        </p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Annet</AccordionTrigger>
      <AccordionContent>
        <p className="text-gray-900 dark:text-gray-300 font-light text-md">
          God forståelse for bruk av{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Git
          </span>{" "}
          for versjonskontroll, og terminal i både UNIX-baserte
          operativsystemer og Windows ved bruk av{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Bash/zsh
          </span>{" "}
          og{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Powershell
          </span>
          . Erfaring med administrering og konfigurering av både{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            macOS
          </span>
          ,{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Linux
          </span>{" "}
          og{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Windows
          </span>{" "}
          hvor jeg ofte bruker{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            Lua
          </span>{" "}
          og{" "}
          <span className="dark:text-teal-600 text-teal-800 font-medium">
            AHK
          </span>
          .
        </p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export { SkillsAccordion };
