'use client'
import { useState } from "react"

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null)

      const faqs = [
    {
      q: "Can I migrate from other tools?",
      a: "Yes! We support one-click migration from Trello, Asana, Jira, Monday.com, and Notion. Your data, attachments, and team structure transfer automatically in minutes."
    },
    {
      q: "Is there a free trial for paid plans?",
      a: "Absolutely. Every paid plan comes with a 14-day free trial. No credit card required. You get full access to all features during the trial period."
    },
    {
      q: "How does billing work?",
      a: "You can choose monthly or annual billing. Annual plans save you 25%. You can upgrade, downgrade, or cancel anytime from your account settings."
    },
    {
      q: "Is my data secure?",
      a: "Security is our top priority. We use AES-256 encryption at rest and TLS 1.3 in transit. We also support 2FA and SSO for enterprise accounts."
    },
    {
      q: "Do you offer support for onboarding?",
      a: "Pro plans include priority email and chat support. Enterprise plans get a dedicated success manager who helps with onboarding, training, and ongoing optimization."
    },
  ]

  return (
     <section id="faq" className="py-16 md:py-24 px-6">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Questions? Answers.</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`border rounded-xl overflow-hidden transition-colors ${openIndex === i ? "border-white/10" : "border-white/5 hover:border-white/10"}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                <span className={`text-gray-500 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>▼</span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? "200px" : "0",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )

}