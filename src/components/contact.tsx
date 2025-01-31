"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const { ref } = useSectionInView("#contact");

  const [formData, setFormData] = useState({
    senderEmail: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Trigger loading toast notification
    const toastId = toast.loading("Submitting...");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({ senderEmail: "", message: "" }); // Reset form
        toast.update(toastId, {
          render: "Message sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
      } else {
        setSubmissionStatus("error");
        toast.update(toastId, {
          render: "Failed to send the message. Try again later.",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      setSubmissionStatus("error");
      toast.update(toastId, {
        render: "An error occurred. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <>
      {/* Toast container for displaying notifications */}
      <ToastContainer />

      <motion.section
        id="contact"
        ref={ref}
        className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Contact Me</SectionHeading>

        <p className="text-gray-700 -mt-6 dark:text-white/80">
          Feel free to contact me directly through this form
        </p>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col dark:text-black">
          <input
            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            value={formData.senderEmail}
            onChange={handleChange}
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={5000}
            placeholder="Your message"
          />
          <SubmitBtn text="Submit" />
        </form>

        
      </motion.section>
    </>
  );
}
