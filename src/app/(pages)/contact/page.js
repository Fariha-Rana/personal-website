"use client";

import { sendEmail } from "@/utils/sendEmail";
import SubmitButton from "@/components/Button";
import { useFormState } from "react-dom";

const Contact = () => {
  const [state, formAction] = useFormState(sendEmail, null);
  const status = typeof state === "string" && state;

  return (
    <section className="h-screen w-screen flex justify-center items-center flex-col mt-4">
      <h2
        className="text-center text-nowrap text-4xl hidden md:block text-neutral-200 underline m-8"
        style={{ textShadow: "3px 3px 2px" }}
      >
        Contact ME!
      </h2>
      <form
        className=" flex flex-col justify-center items-center bg-neutral-200 px-8 pt-5 rounded-md w-max hover:bg-purple-100 border-purple-800 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_1px_#08f,0_0_1px_#08f,0_0_10px_#08f]  max-[400px]:px-2  max-[290px]:m-8"
        action={formAction}
      >
        <div className="text-sm border border-gray-900 p-5 rounded-full bg-slate-600 text-nowrap text-gray-100 ">
          <span>Email me at: fariharana.eth@gmail.com</span>
        </div>
        <div className="flex md:flex-row flex-col justify-center items-center gap-8 lg:mt-4 mt-2">
          <div className="">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-sm font-medium text-gray-600"
              >
                Your Name
              </label>
              <input
                type="name"
                name="name"
                placeholder="Your Name"
                className="rounded-md border border-gray-400 bg-gray-200 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                required
              />
            </div>
            <div className="md:mb-5">
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
              style={{ width: "300px", height: "150px" }}
            ></textarea>
          </div>
        </div>
        <SubmitButton />
        <p className="text-center my-2 text-green-600 text-lg  h-5">
          {status && status}
        </p>
      </form>
    </section>
  );
};

export default Contact;
