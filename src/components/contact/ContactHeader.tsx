"use client";
import HeartBubble from "@/components/ui/illustrations/HeartBubble";
import PageHeader from "@/components/PageHeader";

const ContactHeader = () => {
  return (
    <PageHeader
      title="Contact Me"
      description={[
        "Want to collaborate on a project, share some feedback, or just grab a coffee and chat? ☕ Drop me a message, and I'll get back to you ASAP!"
      ]}
      illustration={<HeartBubble />}
    />
  );
}

export default ContactHeader;
