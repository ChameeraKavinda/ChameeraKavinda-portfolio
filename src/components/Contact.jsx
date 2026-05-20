import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-accent shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                <a href="mailto:senarathna.ck@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                  senarathna.ck@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-accent shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                <a href="tel:+94753998444" className="text-gray-400 hover:text-accent transition-colors">
                  +94 75 399 8444
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-accent shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                <p className="text-gray-400">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
