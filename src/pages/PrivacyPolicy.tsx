import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function PrivacyPolicy() {
   useEffect(() => {
    document.title = "Privacy Policy | Student Hostel Accommodation";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Learn how we collect, use, and protect your personal information when booking student hostel accommodation."
      );
    }
  }, []);
  return (
    <>
 
      <div className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
        <Link
          to="/"
          className="text-sm text-secondary hover:underline mb-6 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl text black font-bold mb-10">Privacy Policy</h1>

        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you visit
          or make a booking through our website.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          1. Information We Collect
        </h2>
        <p>
          We may collect personal information such as your name, phone number,
          email address, student status, and booking details when you submit
          forms or make a reservation.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. How We Use Your Information
        </h2>
        <p>
          Your information is used to process bookings, communicate important
          updates, provide customer support, and improve our services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Data Protection
        </h2>
        <p>
          We take reasonable measures to protect your personal data from
          unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Sharing of Information
        </h2>
        <p>
          We do not sell or rent your personal information to third parties.
          Information may only be shared where required by law or to complete
          your booking.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Cookies
        </h2>
        <p>
          Our website may use cookies to improve user experience and analyze
          traffic. You can control cookie preferences through your browser.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Your Rights
        </h2>
        <p>
          You have the right to request access, correction, or deletion of
          your personal data by contacting us directly.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Updates to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Continued use
          of the website implies acceptance of any changes.
        </p>
      </div>
    </>
  );
}
