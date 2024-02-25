"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "@formspree/react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import React, { useEffect } from 'react';

const ContactForm = () => {
    const formId = process.env.NEXT_PUBLIC_FORM || "";
    const [state, handleSubmit] = useForm(formId);
    const { toast } = useToast();

useEffect(() => {
	if (state.succeeded) {
		toast({
			variant: "default",
			title: "Success!",
			description: "Your message has been sent successfully.",
		});
		const nameElement = document.getElementById('name') as HTMLInputElement;
		const emailElement = document.getElementById('email') as HTMLInputElement;
		const messageElement = document.getElementById('message') as HTMLInputElement;
		if (nameElement) nameElement.value = '';
		if (emailElement) emailElement.value = '';
		if (messageElement) messageElement.value = '';
	}
}, [state.succeeded, toast]);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
	
		const nameElement = form.elements.namedItem('name') as HTMLInputElement | null;
		const emailElement = form.elements.namedItem('email') as HTMLInputElement | null;
		const messageElement = form.elements.namedItem('message') as HTMLInputElement | null;
		const name = nameElement ? nameElement.value : '';
		const email = emailElement ? emailElement.value : '';
		const message = messageElement ? messageElement.value : '';
	
		if (!name || !email || !message) {
			toast({
				variant: "destructive",
				title: "Missing Information",
				description: "Please fill out all fields before submitting.",
				action: <ToastAction altText="Try again">Try again</ToastAction>,
			});
			return;
		}
	
		handleSubmit(e).then(() => {
			if (state.succeeded) {
				if (nameElement) nameElement.value = '';
				if (emailElement) emailElement.value = '';
				if (messageElement) messageElement.value = '';
			}
		});
	};

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
			<form onSubmit={onSubmit}>

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

export default ContactForm
