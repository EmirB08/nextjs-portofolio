import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Projects = () => {
    return (
        <main>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                    <Card key={index} className="h-full flex flex-col hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors duration-300 overflow-hidden">
                        <Link href="https://vercel.com" passHref>
                            <div className="relative flex aspect-square w-full group cursor-pointer justify-center items-center overflow-hidden">
                                <Image
                                    alt="Test App"
                                    className="object-fit w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    height="200"
                                    src="/media/gondor.png"

                                    width="200"
                                    layout="responsive"
                                />
                            </div>
                        </Link>
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
                            <Link href="#" passHref>
                                <VercelLogoIcon className="h-6 w-6 text-zinc-600 dark:text-zinc-400 cursor-pointer" />
                            </Link>
                            <Link href="#" passHref>
                                <GitHubLogoIcon className="h-6 w-6 text-zinc-600 dark:text-zinc-400 cursor-pointer" />
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        </main>
    );
};

export default Projects;


