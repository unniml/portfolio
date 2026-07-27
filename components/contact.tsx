"use client";
import React, { useActionState, useEffect } from "react";
import dynamic from "next/dynamic";
import SectionHeading from "./section-heading";
import { submitForm } from "@/actions/submit-form";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import FieldError from "./field-error";
import toast from "react-hot-toast";

const ClientSectionObserver = dynamic(
  () => import("@/components/section-view"),
  { ssr: true }
);

export default function Contact() {
  const initialState = {
    errors: {},
    success: false,
  };

  const [state, formAction] = useActionState(
    submitForm,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      toast.success("Message sent successfully!");
    } else if (state.errors?.result) {
      toast.error(state.errors.result);
    }
  }, [state]);

  return (
    <ClientSectionObserver
      sectionName="Contact"
      id="contact"
      className="max-w-[min(100%,38rem)] scroll-mt-28 mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }} 
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:unniml@yahoo.com">
          unniml@yahoo.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col gap-4"
        action={formAction}
        
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          aria-label="Your name"
          required
          maxLength={100}
          className="px-4 h-14 rounded-lg borderBlack "
        />
        <FieldError message={state.errors?.name} />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          aria-label="Your email"
          required
          maxLength={100}
          className="px-4 h-14 rounded-lg borderBlack "
        />
        <FieldError message={state.errors?.email} />
        <textarea
          name="message"
          placeholder="Your message"
          aria-label="Your message"
          required
          maxLength={500}
          className="h-52 rounded-lg borderBlack my-3 p-4 "
        />
        <FieldError message={state.errors?.message} />
        <SubmitButton />
      </form>
    </ClientSectionObserver>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 cursor-pointer disabled:scale-100 disabled:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={pending}
    >
      {pending ? (
        <span className="animate-spin">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 100-16 8 8 0 000 16zm1-13h-2v2h2V7zm0 4h-2v6h2v-6zm0 8h-2v2h2v-2z"
            />
          </svg>

        </span>
      ) : (
        <>
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
