import { useEffect, useState } from "react";

/* -------------------------------
   Blog Page
--------------------------------*/

export default function BlogPage() {

  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;

      const progressPercent =
        totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;

      setProgress(progressPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
    <div>
        {/* Reading Progress Bar */}
        <div
          className="fixed top-0 left-0 h-1 bg-blue-600 z-50"
          style={{ width: `${progress}%` }}
        />
        {/* Layout */}
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
            {/* Blog Content */}

            <article className="md:col-span-2 space-y-10">

            <p className="text-sm md:text-base text-[#4f5258] leading-relaxed">
                Digital commerce continues to evolve across global markets.
                Businesses now seek faster and more flexible payment systems.
                Crypto payment integration has become an important option
                for companies that want to support decentralized transactions.
            </p>


            {/* Section */}
            <section id="understanding">

              <h2 className="md:text-3xl text-xl font-bold mb-4 text-[#1A2B6B]">
                Understanding Crypto Payment Integration
              </h2>
              
              <p className="text-sm md:text-base text-[#4f5258] leading-relaxed">
                Crypto payment integration allows businesses to accept
                digital currencies directly on their websites. Payment
                gateways connect checkout systems with blockchain networks
                so transactions can be processed securely.
              </p>
            </section>


            {/* Highlight */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">

                <p className="text-blue-900 font-medium">
                Crypto payment gateways act as a bridge between
                blockchain networks and online stores.
                </p>

            </div>


            {/* Section */}
            <section id="benefits">

                <h2 className="md:text-3xl text-xl font-bold mb-4 text-[#1A2B6B]">
                  Why Businesses Integrate Crypto Payments
                </h2>

                <ul className="space-y-3 text-sm md:text-base text-[#4f5258] leading-relaxed list-disc pl-6">
                <li>Accept international payments instantly</li>
                <li>Lower transaction fees</li>
                <li>Transparent blockchain transactions</li>
                <li>Global commerce opportunities</li>
                </ul>

            </section>


            {/* Section */}
            <section id="steps">

                <h2 className="md:text-3xl text-xl font-bold mb-4 text-[#1A2B6B]">
                  Steps to Integrate Crypto Payments
                </h2>

                <ol className="space-y-4 text-sm md:text-base text-[#4f5258] leading-relaxed list-decimal pl-6">
                <li>Choose a reliable crypto payment gateway</li>
                <li>Connect the API with your website checkout</li>
                <li>Set up a secure wallet</li>
                <li>Test the integration</li>
                </ol>

            </section>


            {/* Section */}
            <section id="future">

                <h2 className="md:text-3xl text-xl font-bold mb-4 text-[#1A2B6B]">
                  Future of Crypto Payments
                </h2>

                <p className="text-sm md:text-base text-[#4f5258] leading-relaxed">
                Businesses adopting blockchain payment systems early
                can gain competitive advantages and attract global
                customers who prefer digital currencies.
                </p>

            </section>


            {/* Conclusion */}
            <section id="conclusion">

                <h2 className="md:text-3xl text-xl font-bold mb-4 text-[#1A2B6B]">
                  Conclusion
                </h2>

                <p className="text-sm md:text-base text-[#4f5258] leading-relaxed">
                Crypto payment integration is transforming online
                payment infrastructure. Companies implementing
                blockchain payment gateways can expand their
                global reach and provide modern checkout experiences.
                </p>

            </section>

            </article>


            {/* Sidebar */}
            <aside className="space-y-8">

            {/* Table of Contents */}
            <div className="bg-white shadow rounded-xl p-6 sticky top-24">

                <h3 className="font-semibold text-lg mb-4 text-[#1A2B6B]">
                Table of Contents
                </h3>

                <ul className="space-y-2 text-sm md:text-base text-[#4f5258] leading-relaxed text-sm">

                <li>
                    <a href="#understanding" className="hover:text-blue-600">
                      Understanding Crypto Payments
                    </a>
                </li>

                <li>
                    <a href="#benefits" className="hover:text-blue-600">
                      Why Businesses Integrate
                    </a>
                </li>

                <li>
                    <a href="#steps" className="hover:text-blue-600">
                    Integration Steps
                    </a>
                </li>

                <li>
                    <a href="#future" className="hover:text-blue-600">
                    Future of Payments
                    </a>
                </li>

                <li>
                    <a href="#conclusion" className="hover:text-blue-600">
                    Conclusion
                    </a>
                </li>

                </ul>

            </div>


            {/* CTA */}
            <div className="bg-indigo-600 text-white p-6 rounded-xl">

                <h4 className="font-semibold mb-2">
                Need Crypto Payment Integration?
                </h4>

                <p className="text-sm opacity-90 mb-4">
                Secure Ledger Solutions helps businesses integrate
                blockchain payment systems.
                </p>

                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium">
                  <a href="./contact-us" className="text-indigo-600 hover:text-indigo-800">
                    Contact Us
                  </a>
                </button>
            </div>
            </aside>
        </div>
    </div>

    </>

  );
}