"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | string>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      setStatus("Message sent successfully.");
      form.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="py-24 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-6">Contact</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 p-8 rounded-xl space-y-4 shadow-lg"
      >
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full p-2 rounded bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-6 py-2 rounded font-semibold transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}