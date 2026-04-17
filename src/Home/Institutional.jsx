import { Shield, Lock, CheckCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Institutional = () => {
  const features = [
    { title: "Multi-Layer Cold Storage Architecture", icon: <Shield size={18} /> },
    { title: "Private Key Isolation & Multi-Sig Protocols", icon: <Lock size={18} /> },
    { title: "Compliance-Aligned Advisory Services", icon: <CheckCircle size={18} /> },
    { title: "Operational Security (OpSec) Frameworks", icon: <FileText size={18} /> },
  ];

  const stats = [
    { value: 2.5, suffix: "B+", label: "Assets Protected" },
    { value: 500, suffix: "+", label: "Clients Served" },
    { value: 99.9, suffix: "%", label: "Security Uptime" },
    { value: 24, suffix: "/7", label: "Support Available" },
  ];

  return (
    <section className="bg-[#F8FAFC] py-12 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-7 md:px-10">
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#2A6FDB] to-[#1A4FA3] text-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl"
          >

            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-lg md:text-2xl font-semibold mb-4">
                Trusted by Leading Organizations Worldwide
              </h3>

              <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
                Secure Ledger Solutions delivers advanced digital asset security consulting 
                and liquidity execution strategies for investors and organizations.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-4 hover:bg-white/20 transition"
                  >
                    <h4 className="text-xl sm:text-2xl font-bold">
                      <CountUp end={stat.value} duration={2} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                      {stat.suffix}
                    </h4>
                    <p className="text-xs text-white/70 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight mb-4 max-w-xl">
              Institutional-Grade Security for{" "} <br />
              <span className="text-[#2A6FDB]">Digital Assets</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
              We specialize in wallet security architecture, cold storage implementation, 
              blockchain transaction analysis, and operational risk mitigation.
            </p>

            {/* Features */}
            <div className="space-y-3">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-[#EEF3FF] px-4 py-3 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-[#2A6FDB]">{item.icon}</div>
                  <p className="text-sm sm:text-base text-gray-800 font-medium">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Institutional;