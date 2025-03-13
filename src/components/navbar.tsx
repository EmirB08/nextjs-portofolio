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
			<AvatarImage src="/media/mountain-1.png" />
			<AvatarFallback>EB</AvatarFallback>
            </Avatar>
			</div>
            <nav className="md:flex gap-4 hidden text-glossy">
                <Button variant="link" className="text-xs md:text-sm lg:text-base" onClick={handleScroll('about')}>
                    Om meg
                </Button>
                <Button variant="link" className="text-xs md:text-sm lg:text-base" onClick={handleScroll('skills')}>
                    Egenskaper
                </Button>
                <Button variant="link" className="text-xs md:text-sm lg:text-base" onClick={handleScroll('projects')}>
                    Prosjekter
                </Button>
                <Button variant="link" className="text-xs md:text-sm lg:text-base" onClick={handleScroll('contact')}>
                    Kontakt
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
                        <DropdownMenuItem onSelect={handleScroll('about')}>Om meg</DropdownMenuItem>
                        <DropdownMenuItem onSelect={handleScroll('skills')}>Egenskaper</DropdownMenuItem>
                        <DropdownMenuItem onSelect={handleScroll('projects')}>Prosjekter</DropdownMenuItem>
                        <DropdownMenuItem onSelect={handleScroll('contact')}>Kontakt</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
};

export default Navbar;
