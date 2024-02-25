import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { VercelLogoIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
	return (
		<main>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
				<Card className="h-full flex flex-col">
					<Image
						alt="Test App"
						className="aspect-square object-fit w-full p-10"
						height="150"
						src="vercel.svg"
						width="150"
					/>
					<Separator />
					<CardContent className="space-y-2 flex-grow mt-3">
						<CardTitle>Test Title</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							fugit nostrum ipsa, aperiam, iusto sunt voluptas error labore ea,
							laboriosam mollitia quisquam debitis molestiae dolor officia
							corporis quas possimus consequatur!
						</CardDescription>
					</CardContent>
					<div className="flex space-x-2 p-4">
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<VercelLogoIcon className="h-6 w-6" />
						</Link>
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<GitHubLogoIcon className="h-6 w-6" />
						</Link>
					</div>
				</Card>

				<Card className="h-full flex flex-col">
					<Image
						alt="Test App"
						className="aspect-square object-fit w-full p-10"
						height="200"
						src="vercel.svg"
						width="200"
					/>
					<Separator />
					<CardContent className="space-y-2 flex-grow mt-3">
						<CardTitle>Test Title</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							fugit nostrum ipsa, aperiam, iusto sunt voluptas error labore ea,
							laboriosam mollitia quisquam debitis molestiae dolor officia
							corporis quas possimus consequatur!
						</CardDescription>
					</CardContent>
					<div className="flex space-x-2 p-4">
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<VercelLogoIcon className="h-6 w-6" />
						</Link>
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<GitHubLogoIcon className="h-6 w-6" />
						</Link>
					</div>
				</Card>

				<Card className="h-full flex flex-col">
					<Image
						alt="Test App"
						className="aspect-square object-fit w-full p-10"
						height="200"
						src="vercel.svg"
						width="200"
					/>
					<Separator />
					<CardContent className="space-y-2 flex-grow mt-3">
						<CardTitle>Test Title</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							fugit nostrum ipsa, aperiam, iusto sunt voluptas error labore ea,
							laboriosam mollitia quisquam debitis molestiae dolor officia
							corporis quas possimus consequatur!
						</CardDescription>
					</CardContent>
					<div className="flex space-x-2 p-4">
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<VercelLogoIcon className="h-6 w-6" />
						</Link>
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<GitHubLogoIcon className="h-6 w-6" />
						</Link>
					</div>
				</Card>

				<Card className="h-full flex flex-col">
					<Image
						alt="Test App"
						className="aspect-square object-fit w-full p-10"
						height="200"
						src="vercel.svg"
						width="200"
					/>
					<Separator />
					<CardContent className="space-y-2 flex-grow mt-3">
						<CardTitle>Test Title</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							fugit nostrum ipsa, aperiam, iusto sunt voluptas error labore ea,
							laboriosam mollitia quisquam debitis molestiae dolor officia
							corporis quas possimus consequatur!
						</CardDescription>
					</CardContent>
					<div className="flex space-x-2 p-4">
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<VercelLogoIcon className="h-6 w-6" />
						</Link>
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<GitHubLogoIcon className="h-6 w-6" />
						</Link>
					</div>
				</Card>

				<Card className="h-full flex flex-col">
					<Image
						alt="Test App"
						className="aspect-square object-fit w-full p-10"
						height="200"
						src="vercel.svg"
						width="200"
					/>
					<Separator />
					<CardContent className="space-y-2 flex-grow mt-3">
						<CardTitle>Test Title</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							fugit nostrum ipsa, aperiam, iusto sunt voluptas error labore ea,
							laboriosam mollitia quisquam debitis molestiae dolor officia
							corporis quas possimus consequatur!
						</CardDescription>
					</CardContent>
					<div className="flex space-x-2 p-4">
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<VercelLogoIcon className="h-6 w-6" />
						</Link>
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<GitHubLogoIcon className="h-6 w-6" />
						</Link>
					</div>
				</Card>

				<Card className="h-full flex flex-col">
					<Image
						alt="Test App"
						className="aspect-square object-fit w-full p-10"
						height="200"
						src="vercel.svg"
						width="200"
					/>
					<Separator />
					<CardContent className="space-y-2 flex-grow mt-3">
						<CardTitle>Test Title</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
							fugit nostrum ipsa, aperiam, iusto sunt voluptas error labore ea,
							laboriosam mollitia quisquam debitis molestiae dolor officia
							corporis quas possimus consequatur!
						</CardDescription>
					</CardContent>
					<div className="flex space-x-2 p-4">
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<VercelLogoIcon className="h-6 w-6" />
						</Link>
						<Link className="text-zinc-600 dark:text-zinc-400" href="#">
							<GitHubLogoIcon className="h-6 w-6" />
						</Link>
					</div>
				</Card>
			</div>
		</main>
	);
}
