import Button from "@/components/ui/buttons/Button";
import HeartBubble from "@/components/ui/illustrations/HeartBubble";

export default function ContactForm() {
  return (
    <>
      <div className="flex gap-16 md:gap-32 lg:gap-40 items-center">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-8">
          <h1>Contact Me</h1>
          <p className="body-large">Want to collaborate on a project, share some feedback, or just grab a coffee and chat? ☕</p>
          <p className="body-large">Drop me a message, and I'll get back to you ASAP!</p>
        </div>

        <div className="hidden md:block">
          <HeartBubble />
        </div>
      </div>

      <form name="contact" method="POST" data-netlify="true" className="flex flex-col gap-8 lg:gap-10 w-full md:p-8 lg:p-16 md:border md:border-border md:rounded-lg md:bg-primary-900/10 md:backdrop-blur-sm">
        <div className="flex flex-col gap-8 lg:gap-10 w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full">
            <p className="w-full lg:w-1/2">
              <label className="flex flex-col gap-2 lg:gap-4 h5">Name <input type="text" name="name" className="body text-base lg:text-lg font-normal p-2 lg:p-4 border border-border-light rounded-md outline-none focus:border-accent-500 focus:bg-neutral-950" placeholder="e.g. Jane Doe" /></label>
            </p>
            <p className="w-full lg:w-1/2">
              <label className="flex flex-col gap-2 lg:gap-4 h5">Email <input type="email" name="email" className="body text-base lg:text-lg font-normal p-2 lg:p-4 border border-border-light rounded-md outline-none focus:border-accent-500 focus:bg-neutral-950" placeholder="e.g. jane@doe.com" /></label>
            </p>
          </div>
          <p>
            <label className="flex flex-col gap-2 lg:gap-4 h5">Message <textarea name="message" className="body text-base lg:text-lg font-normal p-2 lg:p-4 border border-border-light rounded-md outline-none focus:border-accent-500 focus:bg-neutral-950" placeholder="Your message here ..." rows={6}></textarea></label>
          </p>
        </div>
        <p>
          <Button type="submit" href="#" className="lg:w-fit body-large">Send Message</Button>
        </p>
      </form>
    </>
  );
}
