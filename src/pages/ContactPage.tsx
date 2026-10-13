import React from "react";
import ecosystemImage from "../assets/ecosystem.jpg";
import { StandardPage } from "../components/ui/StandardPage";
import { ContactBlock } from "../components/sections/ContactBlock";

export function ContactPage() {
  return (
    <StandardPage
      question="Start a conversation."
      title={
        <>
          Let's build <em>what comes next.</em>
        </>
      }
      description="For partnerships, technology conversations, projects, services or careers."
      image={ecosystemImage}
    >
      <section className="section contact contactModern">
        <ContactBlock />
      </section>
    </StandardPage>
  );
}
