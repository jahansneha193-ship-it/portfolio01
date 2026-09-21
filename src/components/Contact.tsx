import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    if (!name || !email || !message) return;

    // Create mailto fallback link and show confirmation
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hello Yeamin,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:yeaminjahansneha@gmail.com?subject=${subject}&body=${body}`;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setFormState({ name: '', email: '', message: '' });
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-primary block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-lavender-dark">
            Contact Me
          </h2>
          <p className="text-lavender-muted text-sm sm:text-base mt-2">
            Feel free to reach out for collaborations, creative projects, or inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 bg-lavender-50 rounded-3xl p-8 border border-lavender-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-lavender-primary text-white flex items-center justify-center font-heading font-bold text-2xl shadow-md">
                  YJ
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-lavender-dark">
                    Yeamin Jahan
                  </h3>
                  <p className="text-sm font-medium text-lavender-primary">
                    BBA Student &amp; Creative Mind
                  </p>
                </div>
              </div>

              <p className="text-lavender-muted text-sm mb-8 leading-relaxed">
                Whether you have an inquiry regarding marketing, design, AI
                tool implementation, or simply want to connect, my inbox is
                always open.
              </p>

              {/* Contact List */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:yeaminjahansneha@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-lavender-100 hover:border-lavender-primary transition-all group"
                  id="contact-item-email"
                >
                  <div className="w-10 h-10 rounded-xl bg-lavender-100 text-lavender-primary group-hover:bg-lavender-primary group-hover:text-white flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-lavender-muted block">
                      Email
                    </span>
                    <span className="text-sm font-bold text-lavender-dark group-hover:text-lavender-primary transition-colors break-all">
                      yeaminjahansneha@gmail.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:01614997197"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-lavender-100 hover:border-lavender-primary transition-all group"
                  id="contact-item-phone"
                >
                  <div className="w-10 h-10 rounded-xl bg-lavender-100 text-lavender-primary group-hover:bg-lavender-primary group-hover:text-white flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-lavender-muted block">
                      Phone
                    </span>
                    <span className="text-sm font-bold text-lavender-dark group-hover:text-lavender-primary transition-colors">
                      01614997197
                    </span>
                  </div>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/1JAgDxbDFh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-lavender-100 hover:border-lavender-primary transition-all group"
                  id="contact-item-facebook"
                >
                  <div className="w-10 h-10 rounded-xl bg-lavender-100 text-lavender-primary group-hover:bg-lavender-primary group-hover:text-white flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-lavender-muted block">
                      Facebook
                    </span>
                    <span className="text-sm font-bold text-lavender-dark group-hover:text-lavender-primary transition-colors">
                      yeamin.jahan (Connect)
                    </span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-lavender-100 hover:border-lavender-primary transition-all group"
                  id="contact-item-instagram"
                >
                  <div className="w-10 h-10 rounded-xl bg-lavender-100 text-lavender-primary group-hover:bg-lavender-primary group-hover:text-white flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-lavender-muted block">
                      Instagram
                    </span>
                    <span className="text-sm font-bold text-lavender-dark group-hover:text-lavender-primary transition-colors">
                      @yeamin.jahan
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-lavender-200">
              <p className="text-xs text-lavender-muted">
                Response time: Usually within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-lavender-200 shadow-xs">
            <h3 className="font-heading font-bold text-2xl text-lavender-dark mb-2">
              Send a Message
            </h3>
            <p className="text-lavender-muted text-sm mb-8">
              Fill out the form below to send an email directly to{' '}
              <span className="text-lavender-primary font-semibold">
                yeaminjahansneha@gmail.com
              </span>
              .
            </p>

            {sentSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>
                  Thank you! Your email client has been prepared. If it didn't
                  open automatically, write directly to{' '}
                  <strong>yeaminjahansneha@gmail.com</strong>.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
              <div>
                <label
                  htmlFor="userName"
                  className="block text-xs uppercase font-bold tracking-wider text-lavender-dark mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="userName"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="e.g. Sarah Khan"
                  className="w-full px-4 py-3.5 rounded-xl bg-lavender-50 border border-lavender-200 text-lavender-dark placeholder-lavender-muted/50 focus:bg-white focus:border-lavender-primary focus:outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="userEmail"
                  className="block text-xs uppercase font-bold tracking-wider text-lavender-dark mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="userEmail"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  placeholder="e.g. sarah@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-lavender-50 border border-lavender-200 text-lavender-dark placeholder-lavender-muted/50 focus:bg-white focus:border-lavender-primary focus:outline-none transition-all text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="userMessage"
                  className="block text-xs uppercase font-bold tracking-wider text-lavender-dark mb-2"
                >
                  Message
                </label>
                <textarea
                  id="userMessage"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3.5 rounded-xl bg-lavender-50 border border-lavender-200 text-lavender-dark placeholder-lavender-muted/50 focus:bg-white focus:border-lavender-primary focus:outline-none transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="w-full py-4 rounded-xl bg-lavender-primary text-white font-semibold text-base shadow-lg shadow-lavender-primary/25 hover:bg-lavender-hover hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
