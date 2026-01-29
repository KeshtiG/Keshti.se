// Code from: https://formcarry.com/

"use client";
import { useState } from "react";
import Button from "@/components/ui/buttons/Button";
import { PiCheckCircle, PiXCircle } from "react-icons/pi";

const formcarryId = process.env.NEXT_PUBLIC_FORMCARRY_ID;
const formcarryUrl = `https://formcarry.com/s/${formcarryId}`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await fetch(formcarryUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();

      if (data.code === 200) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setError("");
      } else {
        setStatus("error");
        setError(data.message || "Unknown error");
      }
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Unknown error");
    }
  }

  return (
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 lg:gap-10 w-full md:p-8 lg:p-12 xl:p-16 md:border md:border-border md:rounded-lg md:bg-primary-800/10 md:backdrop-blur-xs"
      >
        <div className="flex flex-col gap-8 lg:gap-10 w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full">
            <p className="w-full lg:w-1/2">
              <label className="flex flex-col gap-2 lg:gap-4 h4">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="body text-base lg:text-lg font-normal p-2 lg:p-4 border border-border-light rounded-md outline-none focus:border-accent-500 focus:bg-neutral-950"
                  placeholder="e.g. Jane Doe"
                />
              </label>
            </p>
            <p className="w-full lg:w-1/2">
              <label className="flex flex-col gap-2 lg:gap-4 h4">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="body text-base lg:text-lg font-normal p-2 lg:p-4 border border-border-light rounded-md outline-none focus:border-accent-500 focus:bg-neutral-950"
                  placeholder="e.g. jane@doe.com"
                />
              </label>
            </p>
          </div>
          <p>
            <label className="flex flex-col gap-2 lg:gap-4 h4">
              Message
              <textarea
                name="message"
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="body text-base lg:text-lg font-normal p-2 lg:p-4 border border-border-light rounded-md outline-none focus:border-accent-500 focus:bg-neutral-950"
                placeholder="Your message here ..."
                rows={6}
              ></textarea>
            </label>
          </p>
        </div>
          {status === "success" && (
            <p className="text-teal-400 mt-1 body-large flex items-center"><PiCheckCircle className="inline mr-2" />Message sent successfully! I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-1 body-large flex items-center"><PiXCircle className="inline mr-2" />{error}</p>
          )}
          <Button type="submit" className="lg:w-fit body-large">
            Send Message
          </Button>
      </form>
  );
}

export default ContactForm;
