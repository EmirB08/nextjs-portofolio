"use client";

import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "@formspree/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

const ContactForm: React.FC = () => {
	const formId = process.env.NEXT_PUBLIC_FORM || "";
	const [state, handleSubmit] = useForm(formId);
	const { toast } = useToast();

	const resetFormFields = () => {
		(document.getElementById("name") as HTMLInputElement).value = "";
		(document.getElementById("email") as HTMLInputElement).value = "";
		(document.getElementById("message") as HTMLInputElement).value = "";
	};

	useEffect(() => {
		if (state.succeeded) {
			// this is from the formspree hook
			toast({
				variant: "default",
				title: "Success!",
				description: "Your message has been sent successfully.",
			});
			resetFormFields();
		}
	}, [state.succeeded, toast]);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
		const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
		const message = (form.elements.namedItem("message") as HTMLInputElement)
			?.value;

		if (!name || !email || !message) {
			toast({
				variant: "destructive",
				title: "Missing Information",
				description: "Please fill out all fields before submitting.",
				action: <ToastAction altText="Try again">Try again</ToastAction>,
			});
			return;
		}

		await handleSubmit(e);
		if (state.succeeded) {
			resetFormFields();
		}
	};

	return (
		<div className="space-y-8">
			<div className="space-y-2">
				<h2 id="contact" className="text-4xl font-bold mb-1 mt-32 text-teal-600">Contact</h2>
				<p className="text-gray-900 dark:text-gray-300 font-light">
					Send me a message or contact me on:
				</p>
				<ul className="list-none p-0">
					<li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-teal-600 before:rounded-sm">
						<a
							href="https://github.com/EmirB08"
							target="_blank"
							className="mx-1 relative hover:underline"
							style={{
								textDecorationThickness: "1px",
								textUnderlineOffset: "4px",
							}}>
							GitHub
						</a>
					</li>
					<li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-teal-600 before:rounded-sm">
						<a
							href="https://linkedin.com"
							target="_blank"
							className="mx-1 relative hover:underline"
							style={{
								textDecorationThickness: "1px",
								textUnderlineOffset: "4px",
							}}>
							Discord
						</a>
					</li>
					<li className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-teal-600 before:rounded-sm">
						<a
							href="https://linkedin.com"
							target="_blank"
							className="mx-1 relative hover:underline"
							style={{
								textDecorationThickness: "1px",
								textUnderlineOffset: "4px",
							}}>
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
			<form onSubmit={onSubmit} method="POST">
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
					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
