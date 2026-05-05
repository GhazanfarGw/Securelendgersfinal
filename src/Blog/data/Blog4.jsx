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
    <div className="bg-[#f7f8fc] min-h-screen">

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* MAIN CONTENT */}
        <article className="md:col-span-2 space-y-8">

          {/* HERO */}
          <div className="bg-white rounded-2xl shadow p-8 border border-gray-100">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A2B6B] mb-4">
              Top Crypto Market Makers & Liquidity Providers: The Complete 2026 Guide
            </h1>

            <p className="text-gray-700 leading-relaxed">
              Crypto markets in 2026 are no longer driven by hype alone. They are shaped by liquidity, execution quality, and institutional participation. The projects that succeed are not just the ones with good ideas, but the ones with strong market structure behind them.
              <br /><br />
              At the center of that structure are crypto market makers and liquidity providers. They quietly ensure that trades happen smoothly, prices remain stable, and markets stay active at all times.
              <br /><br />
              For businesses targeting the United States and Canada, this becomes even more critical. Investors in these regions expect professional-grade liquidity from day one.
            </p>
          </div>

          {/* SECTION CARD */}
          <Section title="What Is a Crypto Market Maker?">
            A crypto market maker is a firm or system that continuously places buy and sell orders on an exchange. Their goal is to ensure liquidity is always available.

            <br /><br />

            Without market makers, markets become inefficient. Prices swing wildly and spreads widen.

            <br /><br />

            They manage both sides of the order book using algorithms, balancing inventory risk and maintaining stable pricing across exchanges.
          </Section>

          <Section title="What Is a Crypto Liquidity Provider?">
            A liquidity provider supplies capital so trades can execute without large price impact.

            <br /><br />

            Without them, even moderate trades can move markets significantly.

            <br /><br />

            In 2026, most firms combine market making + liquidity provision into one service model.
          </Section>

          <Section title="Why It Matters in US & Canada">
            These markets are highly regulated and institution-driven.

            <br /><br />

            Investors evaluate:
            <ul className="list-disc pl-6 mt-2">
              <li>Liquidity depth</li>
              <li>Spread tightness</li>
              <li>Execution stability</li>
            </ul>

            <br />

            Weak liquidity = immediate loss of investor trust.
          </Section>

          <Section title="How Crypto Market Making Works">
            <ul className="list-disc pl-6 space-y-2">
              <li>Algorithmic order placement</li>
              <li>Real-time spread management</li>
              <li>Multi-exchange arbitrage</li>
              <li>Risk balancing systems</li>
            </ul>
          </Section>

          <Section title="Types of Market Making">
            <b>Centralized:</b> Binance, Coinbase order books  
            <br />
            <b>Decentralized:</b> Uniswap liquidity pools  
            <br />
            <b>Hybrid:</b> Combines both (2026 standard)
          </Section>

          <Section title="Pricing Models">
            <ul className="list-disc pl-6 space-y-2">
              <li>$20K–$40K monthly (entry)</li>
              <li>$40K–$80K monthly (mid tier)</li>
              <li>$80K+ institutional</li>
            </ul>
          </Section>

          <Section title="How to Choose a Market Maker">
            <ul className="list-disc pl-6 space-y-2">
              <li>Liquidity depth quality</li>
              <li>Exchange coverage</li>
              <li>Low latency systems</li>
              <li>Transparent reporting</li>
              <li>Regulatory alignment</li>
            </ul>
          </Section>

          <Section title="Red Flags">
            <ul className="list-disc pl-6 space-y-2 text-red-600">
              <li>Fake volume / wash trading</li>
              <li>Guaranteed profit claims</li>
              <li>No transparency</li>
              <li>No compliance structure</li>
            </ul>
          </Section>

          <Section title="Key Trends in 2026">
            <ul className="list-disc pl-6 space-y-2">
              <li>AI-driven liquidity systems</li>
              <li>Cross-chain trading</li>
              <li>Institutional expansion</li>
              <li>Tokenized asset markets</li>
            </ul>
          </Section>

          <Section title="Final Thoughts">
            Crypto market making is now core financial infrastructure.

            <br /><br />

            Projects that invest early in liquidity structure scale faster, attract institutional capital, and survive market volatility.

            <br /><br />

            In 2026, liquidity is not optional — it is strategy.
          </Section>

          {/* CTA */}
          <div className="bg-[#1A2B6B] text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Need Institutional Liquidity Strategy?
            </h3>
            <p className="text-sm mb-4 opacity-90">
              Get structured market making & liquidity planning for your crypto project.
            </p>
            <button className="bg-white text-[#1A2B6B] px-5 py-2 rounded-lg font-semibold">
              Book Consultation
            </button>
          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="hidden md:block">
          <div className="bg-white rounded-2xl shadow p-6 sticky top-24">
            <h3 className="font-semibold mb-4 text-[#1A2B6B]">Table of Contents</h3>
            <ul className="space-y-2 text-sm text-black">
              <li>Market Makers</li>
              <li>Liquidity Providers</li>
              <li>US & Canada</li>
              <li>How It Works</li>
              <li>Types</li>
              <li>Pricing</li>
              <li>Selection</li>
              <li>Red Flags</li>
              <li>Trends</li>
              <li>Conclusion</li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-8 border border-gray-100">
      <h2 className="text-xl font-bold text-[#1A2B6B] mb-4">
        {title}
      </h2>
      <p className="text-gray-700 leading-relaxed">
        {children}
      </p>
    </div>
  );
}