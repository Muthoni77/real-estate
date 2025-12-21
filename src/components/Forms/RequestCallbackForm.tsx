import { useState } from "react";

export default function RequestCallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("Student Apartment Call Back Request");
    const body = encodeURIComponent(
      `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Looking for:
${formData.message}`
    );

    window.location.href = `mailto:Fredrick1peace@gmail.com?subject=${subject}&body=${body}`;
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
