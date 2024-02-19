// components/Navbar.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { MenuIcon } from "lucide-react";

const Navbar: React.FC = () => {
	return (
		<header className="flex items-center justify-between p-4">
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			<nav className="flex gap-4">
				<Link href="#about" passHref>
					<Button variant="link" className="text-xs md:text-sm lg:text-base">About Me</Button>
				</Link>
				<Link href="#skills" passHref>
					<Button variant="link" className="text-xs md:text-sm lg:text-base">Skills</Button>
				</Link>
				<Link href="#projects" passHref>
					<Button variant="link" className="text-xs md:text-sm lg:text-base">Projects</Button>
				</Link>
				<Link href="#contact" passHref>
					<Button variant="link" className="text-xs md:text-sm lg:text-base">Contact</Button>
				</Link>
				<DropdownMenu className="md:hidden">
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Button className="text-[#008744] hover:text-green-500 font-semibold" variant="link">
                  About Me
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="text-[#008744] hover:text-green-500 font-semibold" variant="link">
                  Skills
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="text-[#008744] hover:text-green-500 font-semibold" variant="link">
                  Projects
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="text-[#008744] hover:text-green-500 font-semibold" variant="link">
                  CV
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

			</nav>
		</header>
	);
};

export default Navbar;
