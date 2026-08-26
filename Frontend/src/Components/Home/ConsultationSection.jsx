import React, { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import paralysisImg from "../../assets/paralysis-care.jpg";
import postSurgeryImg from "../../assets/post-surgery-care.jpg";

const BRAND = {
  primary: "#0B6E8F",
  primaryDark: "#074E66",
  tertiary: "#F26B3A",
  tertiaryDark: "#D9532A",
  ink: "#0E2A33",
  inkSoft: "#4A6169",
  line: "#E3EAEC",
};

// Services shown on the right. Add/remove entries here to control the list —
// each needs a photo imported from assets, same pattern as the two above.
const SERVICES = [
  {
    title: "Paralysis & Stroke Care",
    desc: "Dedicated neuro-rehabilitation routines, prevention of bedsores, and complete daily living assistance by specialized attendants.",
    image: paralysisImg,
  },
  {
    title: "Post-Surgery Care",
    desc: "Wound management, vital monitoring, pain management, and assistance with mobility during the crucial recovery phase.",
    image: postSurgeryImg,
  },
];

const SERVICE_OPTIONS = [
  "24×7 Home Nursing Care",
  "ICU Setup at Home",
  "Elderly / Bedridden Care",
  "Post-Operative Care",
  "Stroke & Paralysis Care",
  "Physiotherapy at Home",
  "Medical Equipment Rental",
  "Other / Not sure yet",
];

const INITIAL_FORM = { fullName: "", phone: "", service: "" };

export default function ConsultationSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear that field's error as soon as the user starts fixing it.
    setErrors((prev) => (prev[field] ? { ...prev, [field]: null } : prev));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your name.";

    const digitsOnly = form.phone.replace(/\D/g, "");
    if (!digitsOnly) next.phone = "Please enter a phone number.";
    else if (digitsOnly.length < 10) next.phone = "Enter a valid 10-digit phone number.";

    if (!form.service) next.service = "Please select a service.";

    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      // TODO: point this at your real backend/lead-capture endpoint, e.g.:
      //
      // const res = await fetch("/api/leads", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      // if (!res.ok) throw new Error("Request failed");
      //
      // Placeholder below simulates a network call so the UI states work
      // end-to-end even before the backend exists — swap it out once wired up.
      await new Promise((resolve) => setTimeout(resolve, 900));

      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* ============================
              QUICK INQUIRY FORM
          ============================= */}
          <div className="rounded-2xl border bg-white p-6 shadow-lg sm:p-8" style={{ borderColor: BRAND.line }}>
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: BRAND.tertiary }}>
              Quick Inquiry
            </span>
            <h3 className="mt-2 text-2xl font-bold" style={{ color: BRAND.ink }}>
              Get a Free Consultation
            </h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: BRAND.inkSoft }}>
              Fill out the form and our care coordinator will call you back shortly.
            </p>

            {status === "success" ? (
              <div
                className="mt-6 flex items-start gap-3 rounded-xl border p-4"
                style={{ borderColor: BRAND.line, background: "#F0FBF6" }}
                role="status"
              >
                <CheckCircle2 size={22} className="mt-0.5 flex-shrink-0" style={{ color: "#357E58" }} />
                <div>
                  <p className="text-sm font-semibold" style={{ color: BRAND.ink }}>
                    Thanks — we've got your request.
                  </p>
                  <p className="mt-1 text-xs" style={{ color: BRAND.inkSoft }}>
                    Our care coordinator will call you back shortly.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange("fullName")}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-transparent focus:ring-2"
                    style={{
                      borderColor: errors.fullName ? BRAND.tertiary : BRAND.line,
                      color: BRAND.ink,
                    }}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-xs font-medium" style={{ color: BRAND.tertiaryDark }}>
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors focus:border-transparent focus:ring-2"
                    style={{
                      borderColor: errors.phone ? BRAND.tertiary : BRAND.line,
                      color: BRAND.ink,
                    }}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1 text-xs font-medium" style={{ color: BRAND.tertiaryDark }}>
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="sr-only">
                    Select Service Needed
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={handleChange("service")}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? "service-error" : undefined}
                    className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-transparent focus:ring-2"
                    style={{
                      borderColor: errors.service ? BRAND.tertiary : BRAND.line,
                      color: form.service ? BRAND.ink : BRAND.inkSoft,
                    }}
                  >
                    <option value="" disabled>
                      Select Service Needed
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-1 text-xs font-medium" style={{ color: BRAND.tertiaryDark }}>
                      {errors.service}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-xs font-medium" style={{ color: BRAND.tertiaryDark }} role="alert">
                    Something went wrong sending your request. Please try again, or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  style={{ background: BRAND.tertiary }}
                  onMouseEnter={(e) => status !== "submitting" && (e.currentTarget.style.background = BRAND.tertiaryDark)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = BRAND.tertiary)}
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request Callback
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ============================
              SERVICES LIST
          ============================= */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: BRAND.primary }}>
              Specialized Care
            </span>
            <h3 className="mt-2 text-2xl font-bold sm:text-3xl" style={{ color: BRAND.ink }}>
              Highly Requested Services
            </h3>

            <div className="mt-6 space-y-4">
              {SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="flex gap-4 rounded-2xl border bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:gap-5 sm:p-5"
                  style={{ borderColor: BRAND.line }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-20 w-24 flex-shrink-0 rounded-xl object-cover sm:h-24 sm:w-28"
                  />
                  <div className="min-w-0">
                    <h4 className="text-base font-bold sm:text-lg" style={{ color: BRAND.ink }}>
                      {service.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: BRAND.inkSoft }}>
                      {service.desc}
                    </p>
                    <a
                      href="#services"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-semibold"
                      style={{ color: BRAND.primary }}
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}