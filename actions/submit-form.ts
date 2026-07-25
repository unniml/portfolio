"use server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

type FormState = {
  errors?: {
    name?: string;
    email?: string;
    message?: string;
    result?: string;
  };
  success?: boolean;
};

export async function submitForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const errors: FormState["errors"] = {};

  if (!name || name.length < 2 || name.length > 100) {
    errors.name = "Please enter a valid name.";
  }

  if (
    !email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length < 5 ||
    email.length > 100
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message || message.length < 10 || message.length > 500) {
    errors.message =
      "Message must be at least 10 characters long and at most 500 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors, success: false };
  }

  // Send email

  const res = await resend.emails.send({
    from: "Unnikrishnan Portfolio <onboarding@resend.dev>",
    to: "unniml@yahoo.com",
    replyTo: email,
    subject: "New message from contact form",
    react: ContactFormEmail({ email, message }),
  });

  if (!res || res.error) {
    console.error("Error sending email:", res.error);
    return { errors: { result: "Failed to send email." }, success: false };
  }

  return { errors: {}, success: true };
}
