import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function TermsOfService() {
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

        <h1 className="text-3xl font-bold mb-10">Terms of Service</h1>

        <h2 className="text-xl font-semibold mb-2">
          1. Booking & Confirmation
        </h2>
        <p>
          All bookings are subject to availability and are confirmed only
          after payment has been received. Confirmation details will be
          provided via email or WhatsApp.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          2. Payment Terms
        </h2>
        <p>
          Payments must be made in advance using the available payment methods.
          Prices may change without prior notice.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          3. Duration of Stay
        </h2>
        <p>
          A minimum stay period applies as stated during booking. Extensions
          must be requested before the current stay expires and are subject
          to availability.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          4. Security Deposit
        </h2>
        <p>
          A refundable security deposit may be required and will be returned
          after check-out, subject to room inspection.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          5. Cancellations & Refunds
        </h2>
        <p>
          Cancellation and refund eligibility depends on the timing of the
          cancellation. Late cancellations or no-shows may result in loss
          of payment.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          6. Conduct & Compliance
        </h2>
        <p>
          Residents must comply with hostel rules and policies at all times.
          Violations may result in termination of stay without refund.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          7. Liability
        </h2>
        <p>
          The hostel is not responsible for personal injury, loss, or damage
          to personal belongings during the stay.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          8. Changes to Terms
        </h2>
        <p>
          Management reserves the right to update these terms at any time.
          Continued use of the service constitutes acceptance of the updated
          terms.
        </p>
      </div>
    </>
  );
}

