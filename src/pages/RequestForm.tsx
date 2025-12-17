// pages/RequestHostel.tsx

import { useState } from "react";
import { CTAButton } from "../components/ui/Card";
// import { CTAButton } from "../components/CTAButton";

interface RequestFormData {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  preferredLocation: string;
  moveInDate: string;
  duration: string;
  message: string;
}

const initialState: RequestFormData = {
  fullName: "",
  email: "",
  phone: "",
  university: "",
  preferredLocation: "",
  moveInDate: "",
  duration: "",
  message: "",
};

export default function RequestForm() {
  const [formData, setFormData] = useState<RequestFormData>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Header */}
      <section className="py-24 bg-[var(--color-bg-muted)] text-center">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Request a Student Hostel
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-[var(--color-text-muted)]">
          Tell us a bit about yourself and your needs. Our team will match you
          with the best available apartment near your campus.
        </p>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <form className="grid gap-6">
            {/* Name */}
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              required
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3"
            />

            {/* University */}
            <input
              type="text"
              name="university"
              placeholder="University / College"
              value={formData.university}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3"
            />

            {/* Preferred Location */}
            <select
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3"
            >
              <option value="">Preferred Location</option>
              <option value="Al Barsha">Al Barsha</option>
              <option value="Dubai Marina">Dubai Marina</option>
              <option value="JLT">Jumeirah Lake Towers</option>
              <option value="Academic City">Academic City</option>
            </select>

            {/* Move-in Date */}
            <input
              type="date"
              name="moveInDate"
              value={formData.moveInDate}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3"
            />

            {/* Duration */}
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3"
            >
              <option value="">Expected Stay Duration</option>
              <option value="3 months">3 Months</option>
              <option value="6 months">6 Months</option>
              <option value="12 months">12 Months</option>
            </select>

            {/* Message */}
            <textarea
              name="message"
              rows={4}
              placeholder="Any special requests or questions? (Optional)"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-xl border border-[var(--color-border)] bg-white px-4 py-3"
            />

            {/* Submit */}
            <div className="pt-4">
              <CTAButton variant="dark" type="submit">
                Submit Request
              </CTAButton>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
