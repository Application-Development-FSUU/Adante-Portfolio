import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  // ✅ ENV VARIABLES (VITE)
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔒 Safety check
    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage("Email service is not configured yet.");
      return;
    }

    setIsSending(true);
    setStatusMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name || "Anonymous",
          email: formData.email,
          subject: formData.subject || "No Subject",
          message: formData.message,
        },
        publicKey
      );

      setSubmitted(true);
      setStatusMessage("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Email send failed:", error);
      setStatusMessage("❌ Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">
          Let&apos;s collaborate and create something amazing
        </p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form className="glass-card contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-input"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input form-textarea"
              rows={5}
            />

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={submitted || isSending}
            >
              {isSending
                ? "Sending..."
                : submitted
                ? "✓ Message Sent!"
                : "Send Message"}
            </motion.button>

            {statusMessage && (
              <p className="contact-status">{statusMessage}</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};