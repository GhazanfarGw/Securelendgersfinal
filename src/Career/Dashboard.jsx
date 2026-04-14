import { useState } from "react";

export default function CareersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    try {
      const res = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Error submitting application");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
      <div className="md:max-w-screen-lg lg:max-w-screen-lg xl:max-w-screen-xl duration-500 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="md:text-4xl text-3xl font-bold text-gray-800">Careers</h1>
          <p className="text-gray-500 mt-3 md:text-base text-sm">
            Join Secure Ledger and build the future of secure systems
          </p>
        </div>

        {/* Jobs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {["Frontend Developer", "Backend Developer", "Blockchain Engineer", "UI/UX Designer"].map((job, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="md:text-xl text-lg font-semibold text-gray-800 mb-2">{job}</h2>
              <p className="text-gray-500 text-sm mb-4">
                We are looking for a skilled {job} to join our team.
              </p>
              <button
                onClick={() => setForm({ ...form, role: job })}
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Application Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Position Applied For"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            />

            <textarea
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Why should we hire you?"
              name="message"
              value={form.message}
              onChange={handleChange}
            />

            <input
              type="file"
              className="w-full border p-3 rounded-lg"
              name="resume"
              onChange={handleChange}
              accept=".pdf,.doc,.docx"
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


// /* ================= BACKEND (Node + Express + MongoDB) ================= */

// // server.js

// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const cors = require("cors");

// const app = express();
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/careers", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const ApplicationSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   role: String,
//   message: String,
//   resume: String,
// });

// const Application = mongoose.model("Application", ApplicationSchema);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });

// const upload = multer({ storage });

// app.post("/api/apply", upload.single("resume"), async (req, res) => {
//   try {
//     const newApp = new Application({
//       name: req.body.name,
//       email: req.body.email,
//       role: req.body.role,
//       message: req.body.message,
//       resume: req.file.filename,
//     });

//     await newApp.save();

//     res.json({ message: "Application submitted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));

