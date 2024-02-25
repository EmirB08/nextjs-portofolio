// components/Navbar.tsx
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
	return (
		<header className="flex items-center justify-between pb-20">
			<Avatar>
				<AvatarImage src="https://i.pinimg.com/originals/db/23/43/db2343421ec4c2ed26cea8c433f941d4.png" alt="Gigachad" />
				<AvatarFallback>EB</AvatarFallback>
			</Avatar>
			<nav className="md:flex gap-4 hidden text-glossy">
				<Link href="#about" passHref>
					<Button variant="link" className="text-xs md:text-sm lg:text-base">
						About Me
					</Button>
				</Link>
				<Link href="#skills" passHref>
					<Button variant="link" className="text-xs md:text-sm lg:text-base">
						Skills
					</Button>
				</Link>
				<Link href="#projects" passHref>
					<Button variant="link" className="text-xs md:text-sm lg:text-base">
						Projects
					</Button>
				</Link>
				<Link href="#contact" passHref>
					<Button variant="link" className="text-xs md:text-sm lg:text-base">
						Contact
					</Button>
				</Link>
			</nav>
      <div className="md:hidden">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button size="icon" variant="outline">
						<MenuIcon className="h-6 w-6" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>
						<Link href="#about" passHref>
							<Button
								variant="link"
								className="text-xs md:text-sm lg:text-base">
								About Me
							</Button>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href="#skills" passHref>
							<Button
								variant="link"
								className="text-xs md:text-sm lg:text-base">
								Skills
							</Button>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href="#projects" passHref>
							<Button
								variant="link"
								className="text-xs md:text-sm lg:text-base">
								Projects
							</Button>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Link href="#contact" passHref>
							<Button
								variant="link"
								className="text-xs md:text-sm lg:text-base">
								Contact
							</Button>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
      </div>
		</header>
	);
};

export default Navbar;
