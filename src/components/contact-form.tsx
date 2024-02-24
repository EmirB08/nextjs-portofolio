"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "@formspree/react";

const ContactForm = () => {
const formId = process.env.NEXT_PUBLIC_FORM || "";
const [state, handleSubmit] = useForm(formId);

	return (
		<div className="space-y-8">
			<div className="space-y-2">
				<h2 className="text-4xl text-glossy font-bold mb-1 mt-32 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
					Contact
				</h2>
				<p className="text-gray-500 dark:text-gray-400">
					Send me an e-mail or contact me on G or L.
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="name">Name</Label>
						<Input id="name" placeholder="Enter your name" name="name" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							placeholder="Enter your email"
							type="email"
							name="email"
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="message">Message</Label>
						<Textarea
							className="min-h-[100px]"
							id="message"
							placeholder="Enter your message"
              name="message"
						/>
					</div>

					<Button type="submit">
						Submit
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
