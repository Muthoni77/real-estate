import { useState, useEffect } from "react";
import { Home, ChevronRight, CheckCircle, Phone, Mail, MapPin, Users } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import heroImage from "../assets/apartment-2.jpg";


interface RequestFormData {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  numberOfStudents: string;
  transportRequest: boolean;
  virtualTourRequest: boolean;
  contactMethod: string;
  message: string;
}

const initialState: RequestFormData = {
  fullName: "",
  email: "",
  phone: "",
  university: "",
  numberOfStudents: "",
  transportRequest: false,
  virtualTourRequest: false,
  contactMethod: "",
  message: "",
};

const universities = [
  "University of Dubai",
  "American University in Dubai",
  "Heriot-Watt University Dubai",
  "Middlesex University Dubai",
  "University of Wollongong Dubai",
  "Murdoch University Dubai",
  "Canadian University Dubai",
  "BITS Pilani Dubai",
  "Other",
];

const pricingInfo = [
  { students: "4", price: "2,700" },
  { students: "3", price: "3,600" },
  { students: "2", price: "4,750" },
  { students: "1", price: "9,000" },
];

export default function RequestForm() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<RequestFormData>(initialState);
  const [submitted, setSubmitted] = useState(false);

  // Prefill from URL params (e.g., from pricing section)
  useEffect(() => {
    const studentsParam = searchParams.get("students");
    if (studentsParam && ["1", "2", "3", "4"].includes(studentsParam)) {
      setFormData((prev) => ({ ...prev, numberOfStudents: studentsParam }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the data to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  const selectedPricing = pricingInfo.find(
    (p) => p.students === formData.numberOfStudents
  );

  if (submitted) {
    return (
      <main className="bg-background text-foreground min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto px-6 text-center py-20">
          <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-secondary" />
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">
            Request Submitted Successfully!
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your interest. Our team will contact you shortly to confirm availability and assign the best hostel apartment for your needs.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Request a Hostel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-white/70 text-sm mb-8">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary font-medium">Request Form</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Reserve Your <span className="text-secondary">Student Apartment</span>
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            Fill out the form below and our team will assign the best available hostel apartment for your needs.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Info */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Personal Information</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone / WhatsApp *"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    />
                    <select
                      name="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Preferred Contact Method</option>
                      <option value="call">Phone Call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>

                {/* Accommodation Details */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Accommodation Details</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    >
                      <option value="">Select University / College *</option>
                      {universities.map((uni) => (
                        <option key={uni} value={uni}>
                          {uni}
                        </option>
                      ))}
                    </select>
                    <select
                      name="numberOfStudents"
                      value={formData.numberOfStudents}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary"
                      required
                    >
                      <option value="">Number of Students *</option>
                      <option value="1">1 Student - AED 9,000/month</option>
                      <option value="2">2 Students - AED 4,750/student</option>
                      <option value="3">3 Students - AED 3,600/student</option>
                      <option value="4">4 Students - AED 2,700/student</option>
                    </select>
                  </div>

                  {selectedPricing && (
                    <div className="mt-4 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                      <div className="flex items-center gap-2 text-secondary">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">
                          Price: AED {selectedPricing.price}/student per month
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        All bills included (water, electricity, WiFi, cleaning, maintenance)
                      </p>
                    </div>
                  )}
                </div>

                {/* Additional Services */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Additional Services</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="transportRequest"
                        checked={formData.transportRequest}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-border text-secondary focus:ring-secondary"
                      />
                      <span>Transportation to/from university</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="virtualTourRequest"
                        checked={formData.virtualTourRequest}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-border text-secondary focus:ring-secondary"
                      />
                      <span>Request a virtual tour</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Additional Notes</h3>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Any special requests or questions? (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition text-lg"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-secondary" />
                  <h3 className="font-semibold">Pricing Guide</h3>
                </div>
                <div className="space-y-3">
                  {pricingInfo.map((item) => (
                    <div
                      key={item.students}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="text-muted-foreground">
                        {item.students} {item.students === "1" ? "Student" : "Students"}
                      </span>
                      <span className="font-semibold">AED {item.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Per student per month. All bills included.
                </p>
              </div>

              {/* Contact Card */}
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold mb-4">Urgent Inquiries?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent requests, contact us directly:
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+971545594940"
                    className="flex items-center gap-3 text-sm hover:text-secondary transition"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <span>+971 54 559 4940</span>
                  </a>
                  <a
                    href="mailto:info@studenthostels.ae"
                    className="flex items-center gap-3 text-sm hover:text-secondary transition"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <span>info@studenthostels.ae</span>
                  </a>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <span>Dubai, UAE</span>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="rounded-2xl bg-secondary/10 border border-secondary/20 p-6 text-center">
                <CheckCircle className="w-10 h-10 text-secondary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Trusted by Students</h3>
                <p className="text-sm text-muted-foreground">
                  500+ students have found their perfect home through us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}
