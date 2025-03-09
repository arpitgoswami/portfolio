"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Toaster, toast } from "react-hot-toast";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { useModalStore } from "../store/useModalStore";

import axios from "axios";
import MagicButton from "./MagicButton";

const Hero = () => {
  const { isOpen, setIsOpen } = useModalStore();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    axios
      .post("/api/send", formData)
      .then((res) => {
        console.log(res);
        toast.success("Message sent successfully!", {
          style: {
            background: "rgba(17, 25, 40, 0.9)",
            color: "#fff",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          },
        });
        setIsOpen(false);
        setFormData({ firstName: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        toast.error("Message not sent!", {
          style: {
            background: "rgba(17, 25, 40, 0.9)",
            color: "#fff",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          },
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="pb-20 pt-36">
      <Toaster position="bottom-right" />
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless Web Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
            Hi! I&apos;m Arpit Goswami, a Next.js Developer based in India.
          </p>

          <div>
            <MagicButton
              title="Contact Me"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              style={{
                backdropFilter: "blur(20px) saturate(180%)",
                backgroundColor: "rgba(17, 25, 40, 0.75)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
              className="w-full max-w-md rounded-[12px] bg-[rgba(17, 25, 40, 0.75)] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white mb-4 z-[10000]"
              >
                Get in Touch
              </DialogTitle>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm text-white/80 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 mt-1 bg-black-200 border border-white/10 rounded-md text-white placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-black-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-white/80 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 mt-1 bg-black-200 border border-white/10 rounded-md text-white placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-black-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-white/80 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 mt-1 bg-black-200 border border-white/10 rounded-md text-white placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-black-300"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm text-white/80 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 mt-1 bg-black-200 border border-white/10 rounded-md text-white placeholder-black-300 focus:outline-none focus:ring-2 focus:ring-black-300"
                    placeholder="Your message here..."
                  />
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <Button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-black-300 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 rounded-lg bg-purple py-1.5 px-3 text-sm/6 font-semibold text-black-100 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-purple disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Hero;
