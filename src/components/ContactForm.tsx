"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactSchema,
  ContactFormData,
} from "@/lib/validations/contact.schema";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import Button from "./ui/Button";
import { useState } from "react";
import { parse } from "path";

export default function ContactForm() {
  const [success, setSuccess] = useState<boolean>(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
    setSuccess(true);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-6 bg-counter p-10 relative"
    >
      <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-6">
        <Input
          {...register("name")}
          label="Your Name"
          error={errors.name?.message}
        />

        <Input
          {...register("email")}
          label="Your Email"
          error={errors.email?.message}
        />
      </div>

      <Input
        {...register("subject")}
        label="Subject"
        error={errors.subject?.message}
      />

      <Textarea
        {...register("message")}
        label="Your Message"
        error={errors.message?.message}
      />

      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
      {success && (
        <p className="absolute bottom-2 left-10 font-sans text-sm text-primary">
          message sent successully!
        </p>
      )}
    </form>
  );
}
