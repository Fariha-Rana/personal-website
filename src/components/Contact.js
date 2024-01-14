"use client";

import { sendEmail } from "@/utils/sendEmail";
import SubmitButton from "./Button";
import { useFormState } from "react-dom";

const Contact = () => {
  const [state, formAction] = useFormState(sendEmail, null);
  const error = typeof state === "string" && state;

  return (
    <section className="flex flex-col justify-around items-center h-full w-full mt-80 xl:ml-24 lg:ml-16 md:ml-16  sm:ml-20 md:w-[47rem] lg:w-[48rem] xl:w-[80rem]">
      <h2 className="text-center text-nowrap text-4xl text-neutral-200 underline mt-16 opacity-90" style={{ textShadow: "3px 3px 2px"}}>
        Contact ME!
      </h2>
      <form
        id="contact"
        className="flex flex-col justify-between items-center bg-neutral-200 px-8 py-4 rounded-md  mt-10  hover:bg-purple-100 border-purple-800 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_1px_#08f,0_0_1px_#08f,0_0_10px_#08f]"
        action={formAction}
      >
        <div className="flex text-sm border border-gray-900 p-2 rounded-full bg-slate-600 text-nowrap text-gray-100">
        <span>Email me at: fariharana.eth@gmail.com</span>
      </div>
        <p className="text-center my-2 text-green-600 text-lg">
          {error && error}
        </p>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="name"
            name="name"
            placeholder="Full Name"
            className="rounded-md border border-gray-400 bg-gray-200 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            style={{ width: "300px", height: "40px" }}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@domain.com"
            className=" rounded-md border border-gray-400 bg-gray-200 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            style={{ width: "300px", height: "40px" }}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="message"
            className="mb-3 block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Type your message"
            className="text-sm resize-none rounded-md border border-gray-400 bg-gray-200 py-3 px-6  font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            style={{ width: "300px", height: "180px" }}
            required
          ></textarea>
        </div>
        <div>
         <SubmitButton/>
        </div>
      </form>
    </section>
  );
};

export default Contact;
