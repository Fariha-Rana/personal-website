"use client";

import { sendEmail } from "@/utils/sendEmail";
import SubmitButton from "./Button";
import { useFormState } from "react-dom";

const Contact = () => {
  const [state, formAction] = useFormState(sendEmail, null);
  const status = typeof state === "string" && state;

  return (
    <section id="contact" className="flex flex-col justify-around items-center h-screen w-screen lg:mt-64  max-[400px]:mt-24  min-[540px]:mt-48  max-[290px]:mt-40 ">
      <h2 className="text-center text-nowrap text-4xl text-neutral-200 underline opacity-90 " style={{ textShadow: "3px 3px 2px"}}>
        Contact ME!
      </h2>
      <form
        className="flex flex-col justify-between items-center bg-neutral-200 px-8 py-4 mb-16 mt-0 rounded-md w-max hover:bg-purple-100 border-purple-800 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_1px_#08f,0_0_1px_#08f,0_0_10px_#08f]  max-[400px]:px-2  max-[290px]:ml-8"
        action={formAction}
      >
        <div className="flex text-sm border border-gray-900 p-4 rounded-full bg-slate-600 text-nowrap text-gray-100">
        <span>Email me at: fariharana.eth@gmail.com</span>
      </div>
        <p className="text-center my-2 text-green-600 text-lg  h-5">
          {status && status}
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
            className="text-sm resize-none rounded-md border border-gray-400 bg-gray-200 py-2 px-3  font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
            required
            style={{ width: "300px", height: "auto" }}
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
