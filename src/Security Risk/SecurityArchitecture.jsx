import React from "react";
import {
  FaLock,
  FaDatabase,
  FaSnowflake,
  FaNetworkWired,
  FaPuzzlePiece,
  FaPowerOff,
  FaUserShield,
} from "react-icons/fa";

const securityItems = [
  {
    icon: <FaLock />,
    title: "Multi-Factor Authentication (MFA) & Access Control",
    desc: "Enforced identity verification, RBAC, and privileged access management.",
  },
  {
    icon: <FaDatabase />,
    title: "Encrypted Backup & Key Redundancy Systems",
    desc: "Encrypted offsite backups, key sharding, and recovery protocols.",
  },
  {
    icon: <FaSnowflake />,
    title: "Cold Storage & Air-Gapped Environments",
    desc: "Hardware wallets, air-gapped systems, and offline key isolation.",
  },
  {
    icon: <FaNetworkWired />,
    title: "Secure Network Infrastructure",
    desc: "VPNs, private networks, endpoint protection, and secure communication layers.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Application & Integration Hardening",
    desc: "Restriction of third-party integrations, browser extensions, and external access points.",
  },
  {
    icon: <FaPowerOff />,
    title: "System Security & Patch Management",
    desc: "Continuous updates, vulnerability patching, and endpoint security enforcement.",
  },
  {
    icon: <FaUserShield />,
    title: "Access Continuity & Estate Planning",
    desc: "Key recovery systems, inheritance protocols, and access continuity planning.",
  },
];

const SecurityArchitecture = () => {
  return (
    <div className="bg-[#F4F7FB] py-12 md:py-12">
      <div className="max-w-6xl mx-auto px-7 md:px-10">
        
        {/* Header */}
        <div className="max-w-2xl">
          <span className="bg-[#E8EDFF] text-[#2F6FD6] md:px-4 px-2 py-1 rounded-full md:text-sm text-xs">
            Security Architecture
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-[#1A2B6B] leading-snug max-w-xl md:mt-4 mt-2">
            Multi-Layered Security <br />
            Architecture for{" "}
          </h2>
          <div className="w-16 h-1 bg-[#243A6B] md:my-5 my-3 rounded"></div>
          <p className="md:mt-4 mt-2 text-[#6D7380] text-sm md:text-base leading-relaxed max-w-lg">
            A defense-in-depth approach combining technology, process controls,
            and operational discipline.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 md:mt-12 mt-8 items-start">
          
          {/* Left List */}
          <div className="space-y-4">
            {securityItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#E8EDFF] text-[#2F6FD6] text-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[#1A2B6B] font-semibold text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-[#6D7380] md:text-sm text-xs mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Card */}
          <div className="bg-gradient-to-br from-[#2F6FD6] to-[#1A4FA3] text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">Defense in Depth</h3>
            <p className="text-sm mt-3 text-blue-100 leading-relaxed">
              Security is implemented as a layered architecture, not a single
              control point, ensuring maximum resilience against evolving threats.
            </p>

            {/* Layers */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="font-semibold text-sm">Layer 1</p>
                <p className="text-xs text-blue-100 mt-1">Access Control</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="font-semibold text-sm">Layer 2</p>
                <p className="text-xs text-blue-100 mt-1">Network Security</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <p className="font-semibold text-sm">Layer 3</p>
                <p className="text-xs text-blue-100 mt-1">Data Protection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 bg-white text-center py-4 rounded-xl text-[#2F6FD6] md:text-sm text-xs shadow-sm">
          Every layer works together to create comprehensive protection.
        </div>
      </div>
    </div>
  );
};

export default SecurityArchitecture;