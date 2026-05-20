export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Anonymous &amp; Encrypted
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Lying to Yourself About{" "}
          <span className="text-[#58a6ff]">Your Productivity</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Log your actual hours vs what you report. See how you compare to thousands of anonymous developers. No names, no judgment — just the truth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Tracking — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ["12k+", "Developers"],
            ["94%", "Report Gap"],
            ["2.4h", "Avg Daily Gap"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited anonymous time logs",
              "Actual vs reported hours dashboard",
              "Industry benchmarks by role & company size",
              "Encrypted, zero-knowledge storage",
              "Team analytics for managers",
              "CSV export & API access"
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">No credit card required for free trial. 7-day money-back guarantee.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Is my data really anonymous?",
              "Yes. We never collect your name, email, or employer. All logs are encrypted client-side before storage. Even we cannot link entries back to you."
            ],
            [
              "How are industry benchmarks calculated?",
              "Benchmarks are derived from aggregated, anonymized data across all users, segmented by self-reported role and company size. No individual data is ever exposed."
            ],
            [
              "Can my manager see my individual logs?",
              "Never. Managers only see aggregated team-level trends — never individual entries. You control what, if anything, is shared."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} DevTruth. All rights reserved.
      </footer>
    </main>
  );
}
