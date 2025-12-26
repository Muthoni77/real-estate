import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function RequestCallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const formattedMessage = `
Call-back request received

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Request:
${formData.message || "—"}
  `.trim();

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      "template_callback",
      { formattedMessage },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert("Thank you. We will call you shortly.");
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
    });
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
        className="w-full px-4 py-3 rounded-xl border"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        required
        value={formData.phone}
        onChange={(e) =>
          setFormData({ ...formData, phone: e.target.value })
        }
        className="w-full px-4 py-3 rounded-xl border"
      />

      <input
        type="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
        className="w-full px-4 py-3 rounded-xl border"
      />

      <textarea
        placeholder="What are you looking for?"
        rows={3}
        value={formData.message}
        onChange={(e) =>
          setFormData({ ...formData, message: e.target.value })
        }
        className="w-full px-4 py-3 rounded-xl border resize-none"
      />

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-primary text-white font-semibold"
      >
        Request a Call Back
      </button>
    </form>
  );
}
