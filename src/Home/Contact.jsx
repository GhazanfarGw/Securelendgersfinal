import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "./header"
import Footer from "./Footer"


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

  const handleServiceChange = (e) => {
    const selected = e.target.value;
    setSubServices(servicesData[selected]?.items || []);
    setExtraFields(servicesData[selected]?.extraFields || []);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Request sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Error: " + error.text);
        }
      );
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-blue-100 mt-20">
        <div className="text-center mb-8"> 
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div>
            <label className="text-sm text-gray-600">Service Category</label>
            <select name="service" onChange={handleServiceChange} required className="w-full mt-1 p-3 rounded-xl border focus:ring-2 focus:ring-blue-500">
              <option value="">Select Service</option>
              {Object.keys(servicesData).map((s, i) => (
                <option key={i}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-600">Sub-Service</label>
            <select name="subservice" required className="w-full mt-1 p-3 rounded-xl border focus:ring-2 focus:ring-blue-500">
              <option value="">Select Sub-Service</option>
              {subServices.map((s, i) => (
                <option key={i}>{s}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {extraFields.includes("walletAddress") && (
              <input name="wallet_address" placeholder="Wallet Address" className="p-3 border rounded-xl" />
            )}

            {extraFields.includes("lossAmount") && (
              <input type="number" name="loss_amount" placeholder="Loss Amount ($)" className="p-3 border rounded-xl" />
            )}

            {extraFields.includes("transactionSize") && (
              <input type="number" name="transaction_size" placeholder="Transaction Size" className="p-3 border rounded-xl" />
            )}

            {extraFields.includes("walletType") && (
              <select name="wallet_type" className="p-3 border rounded-xl">
                <option>Wallet Type</option>
                <option>Hot Wallet</option>
                <option>Cold Wallet</option>
                <option>Hardware Wallet</option>
              </select>
            )}

            {extraFields.includes("riskLevel") && (
              <select name="risk_level" className="p-3 border rounded-xl">
                <option>Risk Level</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" placeholder="Full Name" required className="p-3 border rounded-xl" />
            <input type="email" name="email" placeholder="Email" required className="p-3 border rounded-xl" />
          </div>

          <input name="phone" placeholder="Phone / WhatsApp" className="w-full p-3 border rounded-xl" />

          <textarea name="message" placeholder="Describe your request" required className="w-full p-3 border rounded-xl h-28" />

          <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition">
            Submit Secure Request
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">Your information is encrypted and handled confidentially.</p>
      </div>
    </div>
    <Footer/>
    </>

  );
}
