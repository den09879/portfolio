import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";


import useAlert from "../assets/hooks/useAlert";
import Alert from "../components/Alert";

import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import CTA from "../components/CTA";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };
  return (
    <div className='w-full h-screen bg-white'>

      <section className='max-container2'>
        {alert.show && <Alert {...alert} />}

        <div className='flex-1 min-w-[50%] flex flex-col'>
          <h1 className='head-text'>Contact Me!</h1>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='w-full flex flex-col gap-7 mt-14'
          >
            <label className='text-black-500 font-semibold'>
              Name
              <input
                type='text'
                name='name'
                className='input'
                placeholder='John Doe'
                required
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Email
              <input
                type='email'
                name='email'
                className='input'
                placeholder='john.doe@gmail.com'
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              Your Message
              <textarea
                name='message'
                rows='4'
                className='textarea'
                placeholder='Write your thoughts here...'
                value={form.message}
                onChange={handleChange}
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className='button-33'
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
        <Footer />
      </section>

      
      <motion.div
            className='slide-in'
            initial={{ scaleY:0 }}
            animate={{ scaleY:0 }}
            exit={{ scaleY:1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
          className='slide-out'
          initial={{ scaleY:1 }}
          animate={{ scaleY:0 }}
          exit={{ scaleY:0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

    </div>
  )
}

export default Contact