"use client";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending} = useFormStatus();
  return (
    <>
      <button
        className= "hover:shadow-form rounded-md bg-purple-500 py-3 px-6 text-base font-semibold text-white outline-none"
        disabled={pending}
      >
        {pending ? "sending..." : "Send"}
      </button>
    </>
  );
}

export default SubmitButton;
