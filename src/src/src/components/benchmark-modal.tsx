import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const BLOCKED_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "yahoo.co.th",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
  "mail.com",
];

export function ContactModal({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateCorporateEmail = (value: string) => {
    const trimmed = value.trim().toLowerCase();
    const parts = trimmed.split("@");
    if (parts.length !== 2 || !parts[1].includes(".")) {
      return "Please enter a valid corporate email address.";
    }
    if (BLOCKED_DOMAINS.includes(parts[1])) {
      return "Please use your corporate or institutional email address (personal free-mail domains are not accepted).";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !telephone.trim() || !requirement.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    const emailError = validateCorporateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5d624c7f-7069-4229-baff-dc6d0d9335c8",
          subject: `LNRX Labs Enterprise Inquiry — ${name.trim()}`,
          from_name: "LNRX Labs Web Portal",
          name: name.trim(),
          email: email.trim(),
          telephone: telephone.trim(),
          message: requirement.trim(),
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Submission failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setError("");
      setName("");
      setEmail("");
      setTelephone("");
      setRequirement("");
    }, 200);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          variant === "outline"
            ? "inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-white/5"
            : "inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
        }
      >
        {children}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0b111e] p-6 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={resetAndClose}
              aria-label="Close modal"
              className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                <h3 className="mt-4 text-xl font-semibold text-white">Inquiry Received</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Thank you. Our engineering and enterprise partnerships team will review your requirements and respond shortly.
                </p>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="mt-6 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs font-medium uppercase tracking-widest text-emerald-400">
                  Enterprise &amp; Partner Access
                </p>
                <h3 className="mt-1.5 text-2xl font-semibold text-white">Contact LNRX Labs</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Submit your deployment scope using a verified corporate email address.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Tan"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300">
                      Company Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300">
                      Telephone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      placeholder="+65 6123 4567"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-slate-300">
                      Requirement *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value)}
                      placeholder="Describe your industrial facility, compliance timeline, or telemetry scope..."
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-emerald-400"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-200">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400 disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Inquiry"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
