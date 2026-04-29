import { useEffect, useState, useRef } from "react";

export default function BlogPage() {
  const [progress, setProgress] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

          const scrollPosition = window.scrollY;

          const progressPercent =
            totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;

          setProgress(progressPercent);
          tickingRef.current = false;
        });

        tickingRef.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="justify-center mx-auto">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Main Content */}
        <article className="md:col-span-2 space-y-10 text-[#4f5258] leading-relaxed">

          {/* Intro */}
          <section>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B6B] mb-4">
              The Complete Guide to Cryptocurrency Asset Protection
            </h1>
            <p>
              The cryptocurrency landscape has evolved dramatically since Bitcoin’s launch in 2009. What was once perceived as anonymous is now highly traceable and increasingly targeted by both legal and cyber threats.
              <br /><br />
              Whether you're a crypto liquidity provider, institutional market maker, or investor holding significant digital assets, protection is no longer optional—it’s essential.
            </p>
          </section>

          {/* Understanding */}
          <section id="understanding">
            <h2 className="text-2xl font-bold text-[#1A2B6B] mb-4">
              Why Crypto Asset Protection Matters
            </h2>

            <p>
              Many crypto professionals assume their assets are untouchable. In reality, blockchain transparency makes transactions traceable and legally discoverable.
            </p>

            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Judgment creditors</li>
              <li>Lawsuits and legal claims</li>
              <li>Divorce proceedings</li>
              <li>Tax disputes</li>
              <li>Cyber attacks and hackers</li>
            </ul>
          </section>

          {/* Strategies */}
          <section id="importance">
            <h2 className="text-2xl font-bold text-[#1A2B6B] mb-4">
              Core Asset Protection Strategies
            </h2>

            <h3 className="font-semibold mt-4 text-blue-600">
              Offshore Asset Protection Trusts
            </h3>
            <p>
              Offshore trusts in jurisdictions like Cook Islands, Nevis, and Belize protect assets from foreign court rulings while maintaining compliance.
            </p>

            <h3 className="font-semibold mt-4 text-blue-600">
              Institutional Crypto Custody
            </h3>
            <p>
              Combines HSM security, multi-signature wallets, and cold storage to secure large holdings.
            </p>

            <h3 className="font-semibold mt-4 text-blue-600">
              Cold Wallet Security
            </h3>
            <p>
              Offline storage eliminates remote hacking risks and protects long-term assets.
            </p>

            <h3 className="font-semibold mt-4 text-blue-600">
              Multi-Signature Architecture
            </h3>
            <p>
              Requires multiple approvals before transactions, reducing risk of unauthorized access.
            </p>

            <h3 className="font-semibold mt-4 text-blue-600">
              Digital Asset Insurance
            </h3>
            <p>
              Covers cyber theft, fraud, and custodial errors for institutional-grade protection.
            </p>
          </section>

          {/* Mistakes */}
          <section id="challenges">
            <h2 className="text-2xl font-bold text-[#1A2B6B] mb-4">
              Common Mistakes to Avoid
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Holding funds in personal wallets</li>
              <li>Using single-signature wallets</li>
              <li>Mixing personal and business assets</li>
              <li>Skipping smart contract audits</li>
              <li>Ignoring compliance requirements</li>
            </ul>
          </section>

          {/* Structure */}
          <section id="solutions">
            <h2 className="text-2xl font-bold text-[#1A2B6B] mb-4">
              Structuring a Secure Protection Model
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Operating Layer:</strong> LLC or LP</li>
              <li><strong>Holding Layer:</strong> Offshore trust</li>
              <li><strong>Custody Layer:</strong> Institutional storage</li>
              <li><strong>Insurance Layer:</strong> Coverage protection</li>
              <li><strong>Recovery Layer:</strong> Incident response planning</li>
            </ul>
          </section>

          {/* When to hire */}
          <section id="risks">
            <h2 className="text-2xl font-bold text-[#1A2B6B] mb-4">
              When to Seek Professional Help
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Over $500K in crypto assets</li>
              <li>Active trading operations</li>
              <li>Legal exposure</li>
              <li>Cross-border business</li>
              <li>Institutional clients</li>
            </ul>
          </section>

          {/* Recovery */}
          <section id="future">
            <h2 className="text-2xl font-bold text-[#1A2B6B] mb-4">
              Wallet Recovery & Incident Response
            </h2>

            <p>
              Recovery services help restore access to lost wallets, investigate theft, and respond to cyber incidents quickly.
            </p>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl font-bold text-[#1A2B6B] mb-4">
              Protect Your Crypto Before It’s Too Late
            </h2>

            <p>
              Crypto is no longer the wild west—but risks remain. Combining legal structures, custody solutions, and security systems creates a strong defense for your assets.
            </p>

            {/* CTA */}
            <div className="bg-[#1A2B6B] text-white p-6 rounded-xl mt-8">
              <h3 className="text-xl font-semibold mb-2">
                Get Your Free Crypto Asset Protection Consultation
              </h3>
              <p className="text-sm mb-4">
                Speak with experts about offshore trusts, custody, and complete digital asset security.
              </p>
              <button className="bg-white text-[#1A2B6B] px-4 py-2 rounded font-semibold">
                Book Consultation
              </button>
            </div>
          </section>

        </article>

        {/* Sidebar */}
        <aside className="hidden md:block">
          <div className="bg-white shadow rounded-xl p-6 sticky top-24">
            <h3 className="font-semibold mb-4">Table of Contents</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#understanding">Why Protection Matters</a></li>
              <li><a href="#importance">Strategies</a></li>
              <li><a href="#challenges">Mistakes</a></li>
              <li><a href="#solutions">Structure</a></li>
              <li><a href="#risks">When to Hire</a></li>
              <li><a href="#future">Recovery</a></li>
              <li><a href="#conclusion">Conclusion</a></li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}