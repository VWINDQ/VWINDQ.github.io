import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Globe, X, MessageSquare } from 'lucide-react';
import profile from '../data/profile.json';

const Contact = () => {
  const socials = [
    { name: 'GitHub', icon: <Code />, url: profile.github_url, color: 'hover:text-white' },
    { name: 'LinkedIn', icon: <Globe />, url: profile.linkedin_url, color: 'hover:text-blue-400' },
    { name: 'X', icon: <X />, url: profile.twitter_url, color: 'hover:text-sky-400' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl glass-morphism border border-white/5 flex flex-col items-center group transition-all"
            >
              <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-400 mb-4 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Me</h3>
              <p className="text-slate-500 text-sm">{profile.email}</p>
            </motion.a>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl glass-morphism border border-white/5 flex flex-col items-center"
            >
              <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400 mb-4">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Socials</h3>
              <div className="flex space-x-6 mt-2">
                {socials.map(social => (
                  <a 
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-slate-400 transition-colors ${social.color}`}
                    aria-label={`Visit my ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-full shadow-2xl shadow-blue-600/20"
          >
            Send a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
