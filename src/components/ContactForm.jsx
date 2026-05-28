import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

const ContactForm = () => {

  const form = useRef();

  // Loading State
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {

          setLoading(false);

          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {

          setLoading(false);

          console.log('FAILED...', error.text);
          alert('Failed to send message. Try again.');
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >

      <form
        ref={form}
        onSubmit={sendEmail}
        className="glass p-8 rounded-2xl space-y-6"
      >

        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Your Name
            </label>

            <input
              type="text"
              name="user_name"
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Your Email
            </label>

            <input
              type="email"
              name="user_email"
              required
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
              placeholder="Enter Your Email"
            />
          </div>

        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            required
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
            placeholder="Enter Your Subject Here..."
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Message
          </label>

          <textarea
            name="message"
            rows="5"
            required
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent resize-none"
            placeholder="Enter Your Message Here..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
        >

          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={18} />
            </>
          )}

        </button>

      </form>
    </motion.div>
  );
};

export default ContactForm;