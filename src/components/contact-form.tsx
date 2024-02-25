"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "@formspree/react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
	const formId = process.env.NEXT_PUBLIC_FORM || "";
	const [state, handleSubmit] = useForm(formId);
	const { toast } = useToast();

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const name = form.name.valueOf;
		const email = form.email.value;
		const message = form.message.value;

		if (!name || !email || !message) {
			// If any field is empty, show a warning toast
			toast({
				variant: "destructive", // Adjust based on your theme or preference
				title: "Missing Information",
				description: "Please fill out all fields before submitting.",
			});
			return;
		}

		// Manually trigger the handleSubmit function provided by useForm
		await handleSubmit(e);
	};

	// Effectively listen for form submission state changes
	if (state.succeeded) {
		toast({
			variant: "default", // Use appropriate variant
			title: "Success!",
			description: "Your message has been sent successfully.",
		});
	}
	

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

					<Button type="submit">Submit</Button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
