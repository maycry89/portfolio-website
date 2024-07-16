"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      {/* gap-8 = 32px*/}
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <div className="mx-auto"> */}
        <div>
          <Image src="/images/Ddesk.jpg" width={500} height={500}></Image>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-white mb-4 mt-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invi
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
              tabName={"Skills"}
            ></TabButton>

            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
              tabName={"Education"}
            ></TabButton>

            <TabButton
              active={tab === "experience"}
              selectTab={() => handleTabChange("experience")}
              tabName={"Experience"}
            ></TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
