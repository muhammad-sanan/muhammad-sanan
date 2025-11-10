"use client"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Contact</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="bg-gray-900 p-8 rounded-xl space-y-4 shadow-lg"
      >
        {/* Required hidden Netlify input */}
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-400"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-400"
          />
        </div>

        <div>
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-teal-400"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded font-semibold"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
