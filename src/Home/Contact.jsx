import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "./header";
import Footer from "./Footer";

const servicesData = {
  "Security & Risk Management": {
    items: [
      "Wallet Security Setup (Hot / Cold / Hardware)",
      "Multi-Signature (Multi-Sig) Configuration",
      "Security Audit & Risk Assessment",
      "Transaction Monitoring & Risk Screening",
      "Cybersecurity Protection & Key Management",
      "Compliance & AML Risk Assessment",
      "Governance & Access Control Frameworks",
    ],
    extraFields: ["walletType", "riskLevel"],
  },
  "Transaction & Liquidity Management": {
    items: [
      "OTC Block Trade Execution",
      "Private Liquidity Access",
      "Multi-Venue Liquidity Routing",
      "Fiat ↔ Crypto Conversion (On/Off-Ramp)",
      "Large Volume Transaction Handling",
      "Settlement Structuring & Execution",
      "Slippage Optimization & Trade Strategy",
    ],
    extraFields: ["transactionSize"],
  },
  "Asset Protection & Recovery": {
    items: [
      "Asset Tracing & Blockchain Analysis",
      "Wallet Access Recovery Assessment",
      "Exchange Coordination Support",
      "Lost Asset Case Evaluation",
      "Security Hardening (Post-Recovery)",
      "Fraud / Rug Pull Investigation",
      "Risk Prevention Strategy",
    ],
    extraFields: ["walletAddress", "lossAmount"],
  },
  "General Services": {
    items: [
      "Consultation & Strategy Session",
      "Portfolio Review & Risk Analysis",
      "Crypto Onboarding Support",
      "Wallet Setup Guidance",
      "Transaction Support & Assistance",
      "Platform / Exchange Guidance",
      "Security Best Practices Advisory",
      "Project Evaluation & Due Diligence",
      "Issue Resolution & Troubleshooting",
      "End-to-End Service Request (Full Support)",
    ],
    extraFields: [],
  },
};

export default function ContactServicePage() {
  const form = useRef();

  const [subServices, setSubServices] = useState([]);
  const [extraFields, setExtraFields] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleServiceChange = (e) => {
    const selected = e.target.value;

    setSubServices(servicesData[selected]?.items || []);
    setExtraFields(servicesData[selected]?.extraFields || []);

    if (form.current) {
      form.current.subservice.value = "";
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_ss8xugy",
        "template_be863fa",
        form.current,
        "m5W1vJH1hNlv0MfTj"
      )
      .then(() => {
        form.current.reset();
        setSubServices([]);
        setExtraFields([]);

        setShowPopup(true);

        // auto close popup after 3s (optional)
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center md:px-10 px-7 py-10">
        <div className="w-full max-w-2xl mt-20">
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
              Secure Service Request
            </h1>

            <p className="text-gray-600 max-w-xl mx-auto md:text-base text-sm">
              Submit your request for crypto security, transaction support, or asset recovery. 
              Our specialists will review your case and get back to you with a tailored solution.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            {/* Service */}
            <div>
              <label className="text-sm text-gray-600">Service Category</label>
              <select
                name="service"
                onChange={handleServiceChange}
                required
                className="md:text-base text-sm w-full mt-1 p-3 rounded-xl border focus:ring-2 focus:ring-blue-500"
              >
                <option value="" disabled selected>Select Service</option>
                {Object.keys(servicesData).map((s, i) => (
                  <option key={i}>{s}</option>
                ))}
              </select>
            </div>

            {/* Sub Service */}
            <div>
              <label className="text-gray-600 md:text-base text-sm">Sub-Service</label>
              <select
                name="subservice"
                required
                className="w-full mt-1 p-3 rounded-xl border focus:ring-2 focus:ring-blue-500 md:text-base text-sm"
              >
                <option value="" disabled selected>Select Sub-Service</option>
                {subServices.map((s, i) => (
                  <option key={i}>{s}</option>
                ))}
              </select>
            </div>

            {/* Dynamic Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {extraFields.includes("walletAddress") && (
                <input name="wallet_address" placeholder="Wallet Address" required className="p-3 border rounded-xl" />
              )}

              {extraFields.includes("lossAmount") && (
                <input type="number" name="loss_amount" placeholder="Loss Amount ($)" required className="p-3 border rounded-xl" />
              )}

              {extraFields.includes("transactionSize") && (
                <input type="number" name="transaction_size" placeholder="Transaction Size" required className="p-3 border rounded-xl" />
              )}

              {extraFields.includes("walletType") && (
                <select name="wallet_type" required className="p-3 border rounded-xl md:text-base text-sm">
                  <option value="">Wallet Type</option>
                  <option>Hot Wallet</option>
                  <option>Cold Wallet</option>
                  <option>Hardware Wallet</option>
                </select>
              )}

              {extraFields.includes("riskLevel") && (
                <select name="risk_level" required className="p-3 border rounded-xl md:text-base text-sm">
                  <option value="">Risk Level</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              )}

            </div>

            {/* User Info */}
            <div className="grid md:grid-cols-2 gap-4 md:text-base text-sm">
              <input name="name" placeholder="Full Name" required className="p-3 border rounded-xl" />
              <input type="email" name="email" placeholder="Email" required className="p-3 border rounded-xl" />
            </div>

            <input name="phone" placeholder="Phone / WhatsApp" required className="w-full p-3 border rounded-xl md:text-base text-sm" />

            <textarea name="message" placeholder="Describe your request" required className="w-full p-3 border rounded-xl h-28 md:text-base text-sm" />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="md:text-base text-sm w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Submit Secure Request"}
            </button>

          </form>

          <p className="text-center text-xs text-gray-400 mt-6">
            Your information is encrypted and handled confidentially.
          </p>

        </div>
      </div>

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md text-center shadow-2xl">

            <h2 className="text-2xl font-bold text-green-600 mb-3">
              ✅ Thank You!
            </h2>

            <p className="text-gray-600 mb-6">
              Your request has been submitted successfully.  
              Our team will contact you shortly.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Close
            </button>

          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
