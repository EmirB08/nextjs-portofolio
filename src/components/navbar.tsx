"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
	DropdownMenuTrigger,
	DropdownMenuItem,
	DropdownMenuContent,
	DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";

const Navbar: React.FC = () => {
    const handleScroll = (sectionId: string) => (event) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="flex items-center justify-between pb-20">
			<div className="invisible md:visible">
            <Avatar>
			<AvatarImage src="/media/gigachadoncomputer.jpeg" />
			<AvatarFallback>EB</AvatarFallback>
            </Avatar>
			</div>
            <nav className="md:flex gap-4 hidden text-glossy">
                <Button variant="link" className="text-xs md:text-sm lg:text-base" onClick={handleScroll('about')}>
                    About Me
                </Button>
                <Button variant="link" className="text-xs md:text-sm lg:text-base" onClick={handleScroll('skills')}>
                    Skills
                </Button>
                <Button variant="link" className="text-xs md:text-sm lg:text-base" onClick={handleScroll('projects')}>
                    Projects
                </Button>
                <Button variant="link" className="text-xs md:text-sm lg:text-base" onClick={handleScroll('contact')}>
                    Contact
                </Button>
            </nav>
            <div className="md:hidden fixed top-1 left-1 z-50">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon className="h-6 w-6" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={handleScroll('about')}>About Me</DropdownMenuItem>
                        <DropdownMenuItem onSelect={handleScroll('skills')}>Skills</DropdownMenuItem>
                        <DropdownMenuItem onSelect={handleScroll('projects')}>Projects</DropdownMenuItem>
                        <DropdownMenuItem onSelect={handleScroll('contact')}>Contact</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default Navbar;
