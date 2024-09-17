"use client";
import React, { useState } from "react";
import NextIcon from "../../public/next.svg";
import Link from "next/link";
import Image from "next/image";
import { FolderMinusIcon } from "@heroicons/react/24/solid";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      //THe Method ist POST because we are sending data.
      method: "POST",
      //Tell the server, we're sending JSON
      headers: {
        "Content-Type": "application/json",
      },
      //body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full  h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {""}
          I'm blaaaa blg lkjg k g kg kygu lyg lorem sij asdfhh ahasdkf akdjfh
          akhd fkjh dascurrently looking for new oppurtinities, my inbox is
          always open. Wheter you habe a question or just want to say hi, i'lll
          try my best to get back to you.
        </p>
        <div className="socials flex flex-row gab-2">
          <Link href="github.com">
            <Image src={NextIcon} alt="Next Icon"></Image>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191e] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="my@mail.com"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191e] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191e] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about ...."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-green-700 font-medium py-2.5 rounded-lg w-full hover:bg-green-600"
          >
            {/* Warum w-full?????? */}
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              {" "}
              Email send succesfully!{" "}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
