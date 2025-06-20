import "../styles/Form.css";
import emailjs from "@emailjs/browser";
import type { Options } from "@emailjs/browser/es/types/Options";
import { useRef, type FormEvent } from "react";
import FormField from "./FormField";
import { Send } from "lucide-react";
import { toastError, toastSuccess } from "../utils/toast";

export default function Form() {
  const {
    VITE_EMAILJS_PUBLIC_KEY,
    VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID,
  } = import.meta.env;

  const formRef = useRef<HTMLFormElement>(null);

  const handleSendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const options = { publicKey: VITE_EMAILJS_PUBLIC_KEY } as Options;
    emailjs.init(options);

    try {
      const response = await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!
      );

      if (response.status === 200) {
        toastSuccess("Email sent successfully!");
        formRef.current!.reset();
      }
    } catch (error) {
      toastError("Failed to send email. Please try again later.");
    }
  };
  return (
    <form onSubmit={handleSendEmail} ref={formRef} className="form-container">
      <div className="form-name">
        <FormField name="lastname" type="text" placeholder="Last Name" />
        <FormField name="firstname" type="text" placeholder="First Name" />
      </div>
      <FormField name="email" type="email" placeholder="Email" />
      <FormField name="title" type="text" placeholder="Subject" />
      <FormField name="message" type="textarea" placeholder="Message" />
      <button type="submit">
        Send mail <Send className="send-icon" />
      </button>
    </form>
  );
}
