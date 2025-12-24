import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service | Student Hostel Accommodation";

    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Read the full Terms of Service for student hostel bookings, including payment terms, duration of stay, deposits, and conduct."
      );
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <Link
        to="/"
        className="text-sm text-secondary hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-10">Terms of Service</h1>

      <h2 className="text-xl font-semibold mb-2">1. Booking & Confirmation</h2>
      <p className="mb-4">
        All bookings are subject to availability and are confirmed only after the required
        payment has been received. Booking confirmation details will be provided via email
        or WhatsApp.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Payment Terms</h2>
      <p className="mb-4">
        All payments must be made one (1) month in advance using the approved payment
        methods. Prices are subject to change; however, residents will be notified in
        writing at least thirty (30) days in advance in the event of any price increase
        or decrease.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. Duration of Stay & Contract</h2>
      <p className="mb-4">
        All students are required to sign a one (1) year accommodation contract. The duration
        of stay is on a yearly basis unless otherwise agreed in writing by management.
        Any early termination of the contract will be subject to the hostel’s cancellation
        and refund policy.
      </p>

      <h2 className="text-xl font-semibold mb-2">4. Extensions of Stay</h2>
      <p className="mb-4">
        Requests for extension must be submitted at least one (1) month before the current
        contract expires and are subject to availability and management approval.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Security Deposit</h2>
      <p className="mb-4">
        A refundable security deposit is required and shall be equivalent to one (1) month’s
        hostel rent. The deposit will be refunded after check-out, subject to satisfactory
        room inspection and settlement of any outstanding charges, damages, or violations.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Cancellations & Refunds</h2>
      <p className="mb-4">
        Cancellation and refund eligibility depend on the timing of the cancellation. Cancellations
        must be made at least two (2) months prior to the scheduled start date or contract
        renewal date to qualify for a full refund. Late cancellations may result in a charge
        of up to 100% of the applicable rent.
      </p>

      <h2 className="text-xl font-semibold mb-2">7. Conduct & Compliance</h2>
      <p className="mb-4">
        Residents must comply with all hostel rules, policies, and regulations at all times.
        Any violation, misconduct, or disturbance may result in disciplinary action, including
        immediate termination of stay without entitlement to a refund.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Liability</h2>
      <p className="mb-4">
        The hostel will provide reasonable assistance in cases of personal injury, loss, or
        damage to personal belongings during the stay. However, residents are responsible
        for safeguarding their personal property, and the hostel’s liability shall be limited
        to the extent permitted by law.
      </p>

      <h2 className="text-xl font-semibold mb-2">9. Incident Reporting</h2>
      <p className="mb-4">
        Any suspected violations, safety concerns, or incidents must be reported to hostel
        management immediately to ensure timely resolution and appropriate action.
      </p>

      <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
      <p className="mb-4">
        Management reserves the right to amend or update these Terms of Service at any time.
        Continued stay or use of hostel facilities after such changes constitutes acceptance
        of the revised terms.
      </p>
    </div>
  );
}


