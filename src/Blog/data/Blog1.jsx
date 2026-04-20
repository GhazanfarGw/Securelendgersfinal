import { useEffect, useState } from "react";

export default function BlogPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

          const scrollPosition = window.scrollY;

          const progressPercent =
            totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;

          setProgress(progressPercent);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Main Content */}
        <article className="md:col-span-2 space-y-10 text-[#4f5258] leading-relaxed">

          {/* Intro */}
          <section>
            <p>
              Digital commerce continues to evolve across global markets. Businesses now seek faster and more flexible payment systems. Crypto payment integration has become an important option.
              <br /><br />
              Many online customers prefer decentralized payment methods. These methods support borderless transactions and faster settlement. Businesses now explore new ways to improve website payment processing.
              <br /><br />
              A modern payment infrastructure allows websites to accept digital currencies securely. Companies that invest in strong payment gateway integration can expand their global reach.
              <br /><br />
              Businesses working with Secure Ledger Solutions often focus on building secure blockchain payment systems. These systems help companies process digital transactions with confidence.
            </p>
          </section>

          {/* Understanding */}
          <section id="understanding">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4">
              Understanding Crypto Payment Integration
            </h2>
            <p>
              Crypto payment integration allows businesses to accept digital currency payments directly on their websites. The payment gateway connects the website checkout system with blockchain networks.
              <br /><br />
              Customers choose cryptocurrency during checkout. The payment gateway generates a secure wallet address for the transaction.
              <br /><br />
              Once the payment reaches the blockchain network, the gateway verifies the transaction. The system then confirms the payment and updates the order status.
              <br /><br />
              This process works similarly to traditional online payment gateway solutions. The difference is that blockchain networks process the transaction.
              <br /><br />
              Businesses that adopt digital payment infrastructure often gain access to global markets. Customers can send payments without traditional banking barriers.
              <br /><br />
              Government agencies also provide definitions that help explain digital assets clearly. Digital assets are broadly defined as any digital representation of value recorded on a cryptographically secured distributed ledger.
              <br /><br />
              This definition helps businesses understand how blockchain payment infrastructure functions.
            </p>
          </section>

          {/* Benefits */}
          <section id="benefits">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4">
              Why Businesses Are Integrating Crypto Payments
            </h2>
            <p>
              Many companies now want flexible payment systems. Digital currency payments provide several benefits.
              <br /><br />
              First, cryptocurrency allows businesses to accept international payments quickly. Customers can send funds without currency conversion delays.
              <br /><br />
              Second, transaction fees may be lower than traditional payment networks. This benefit becomes significant for high-volume businesses.
              <br /><br />
              Third, blockchain transactions create transparent payment records. Every transaction becomes part of a distributed ledger.
              <br /><br />
              Transparency improves financial reporting and payment tracking. It also increases trust between businesses and customers.
              <br /><br />
              Businesses that adopt payment processing platform solutions that support blockchain can expand their payment capabilities.
              <br /><br />
              These platforms combine traditional payment gateways with decentralized payment infrastructure.
            </p>
          </section>

          {/* How it Works */}
          <section id="how-it-works">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4">
              How Crypto Payment Gateways Work
            </h2>
            <p>
              A crypto payment gateway acts as a bridge between blockchain networks and online stores. It simplifies digital transactions for businesses.
              <br /><br />
              When a customer selects cryptocurrency at checkout, the gateway generates a unique payment address. The system then monitors the blockchain network.
              <br /><br />
              Once the transaction appears on the blockchain, the gateway verifies the payment. After confirmation, the website receives a payment notification.
              <br /><br />
              Some gateways also convert cryptocurrency into stable assets automatically. This feature helps businesses manage price fluctuations.
              <br /><br />
              Reliable gateways also include security systems for wallets and transactions. These systems protect payment data and private keys.
              <br /><br />
              Many companies choose scalable payment gateway platform solutions that support multiple currencies and networks.
            </p>
          </section>

          {/* Steps */}
          <section id="steps">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4">
              Steps to Integrate Crypto Payments Into a Website
            </h2>

            <p>Businesses should follow a structured process when integrating digital payments.</p>

            <h3 className="font-semibold mt-4">Choosing the Right Payment Gateway</h3>
            <p>
              Start by selecting a trusted online payment processing platform...
              <br /><br />
              Security should remain a top priority...
              <br /><br />
              Scalability also matters...
            </p>

            <h3 className="font-semibold mt-4">Integrating the Gateway With Your Website</h3>
            <p>
              Most payment platforms provide APIs...
              <br /><br />
              Customers then see cryptocurrency...
              <br /><br />
              Testing the system is essential...
            </p>

            <h3 className="font-semibold mt-4">Setting Up Secure Wallet Infrastructure</h3>
            <p>
              Businesses must create secure wallets...
              <br /><br />
              Some companies use custodial wallets...
              <br /><br />
              Each approach depends...
            </p>
          </section>

          {/* Security */}
          <section id="security">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4">
              Blockchain Payment Infrastructure and Security
            </h2>
            <p>
              Blockchain technology forms the foundation...
              <br /><br />
              Strong infrastructure protects...
              <br /><br />
              Regulators continue to monitor...
              <br /><br />
              Businesses integrating crypto payments should also implement compliance and monitoring tools.
            </p>
          </section>

          {/* Considerations */}
          <section id="considerations">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4">
              Important Considerations Before Integration
            </h2>
            <p>
              Regulatory compliance is essential...
              <br /><br />
              Price volatility also requires planning...
              <br /><br />
              Customer education also helps...
              <br /><br />
              Businesses that prepare carefully often achieve smoother integration.
            </p>
          </section>

          {/* Benefits List */}
          <section id="advantages">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4">
              Benefits of Accepting Cryptocurrency Payments
            </h2>

            <ul className="list-disc pl-5 space-y-2">
              <li>Reach global customers</li>
              <li>Faster payment settlement</li>
              <li>Lower transaction costs</li>
              <li>Transparent transaction records</li>
              <li>Modern payment experience</li>
            </ul>
          </section>

          {/* Future */}
          <section id="future">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4">
              The Future of Crypto Payment Integration
            </h2>
            <p>
              Digital payments continue to transform global commerce...
              <br /><br />
              Future payment platforms will likely combine...
            </p>
          </section>

          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4">
              Conclusion
            </h2>
            <p>
              Crypto payment integration is transforming online payment systems...
              <br /><br />
              Organizations that adopt these solutions today can prepare for the future.
            </p>
          </section>

          {/* About */}
          <section id="about">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B] mb-4">
              About Us
            </h2>
            <p>
              Secure Ledger Solutions focuses on secure blockchain payment infrastructure...
              <br /><br />
              Businesses that want to explore payment integration options can reach the team today.
            </p>
          </section>

        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-white shadow rounded-xl p-6 sticky top-24">
            <h3 className="font-semibold mb-4">Table of Contents</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#understanding">Understanding</a></li>
              <li><a href="#benefits">Why Integrate</a></li>
              <li><a href="#how-it-works">How it Works</a></li>
              <li><a href="#steps">Steps</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#considerations">Considerations</a></li>
              <li><a href="#advantages">Benefits</a></li>
              <li><a href="#future">Future</a></li>
              <li><a href="#conclusion">Conclusion</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
