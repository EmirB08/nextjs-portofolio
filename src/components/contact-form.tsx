"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [captchaValue, setCaptchaValue] = useState("");

  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  console.log('NEXT_PUBLIC_RECAPTCHA_SITE_KEY:', process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
  if (!recaptchaKey) {
    throw new Error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set");
  }

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaValue(value);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-4xl text-glossy font-bold mb-1 mt-32 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">Contact</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Send me a message!
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            className="min-h-[100px]"
            id="message"
            placeholder="Enter your message"
          />
        </div>
        <ReCAPTCHA sitekey={recaptchaKey} onChange={handleCaptchaChange} />
        <Button disabled={!captchaValue}>Submit</Button>
      </div>
    </div>
  );
}

export default ContactForm;