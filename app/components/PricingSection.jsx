'use client'
import { useState } from "react"


export default function PircingSection() {
    const [annual, setAnnual] = useState(true)

    return (
        <section id="pricing" className="py-16 md:py-24 px-6">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-6">
                    <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-3">Pricing</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Simple, transparent pircing</h2>
                    <p className="text-gray-400 mt-4 max-w-lg mx-auto">Start free. Upgrade when you&rsquo;re ready. No hidden fees, no surprises.</p>
                </div>

                {/* Toggle Monthly/Annual */}

                <div className="flex items-center justify-center gap-3 mb-14">
                    <span className={`text-sm ${!annual ? "text-white" : "text-gray-500"}`}>Monthly</span>
                    <button
                     onClick={() => setAnnual(!annual)}
                     className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${annual ? "bg-emerald-500" : "bg-gray-700"}`}
                    >
                     <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-300 ${annual ? "translate-x-6" : "translate-x-0.5"}`}  />
                    </button>
                    <span className={`text-sm ${annual ? "text-white" : "text-gray-500"}`}>Annual</span>
                    {annual && (
                        <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Save 25%</span>
                    )}                        
                </div>
 
                {/* cards de precios */}
                <div className="grid md:grid-cols-3 gap-5 items-start">

                    {/* starter */}
                <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-7 hover:border-white/10 transition-all">
                    <h3 className="text-lg font-semibold text-white">Starter</h3>
                    <p className="text-sm text-gray-500 mt-1 mb-6">For small teams getting started</p>
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-extrabold text-white">$0</span>
                        <span className="text-gray-500 text-sm ml-1">forever</span>
                    </div>
                    <button className="w-full py-3 rounded-full text-sm font-semibold bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-all mb-7">
                        Get Started Free
                    </button>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">Up to 5 team members</span></li>
                        <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">3 active projects</span></li>
                        <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">Basic analytics</span></li>
                        <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">Email support</span></li>
                        <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">1GB storage</span></li>
                    </ul>
                </div>

                 {/* Pro - Highlighted */}
          <div className="relative border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-500/[0.07] to-transparent rounded-2xl p-7 shadow-xl shadow-emerald-500/5">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#06060e] text-xs font-bold px-4 py-1 rounded-full">
              Most Popular
            </div>
            <h3 className="text-lg font-semibold text-white">Pro</h3>
            <p className="text-sm text-gray-500 mt-1 mb-6">For growing teams that need more</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">${annual ? "9" : "12"}</span>
              <span className="text-gray-500 text-sm">/user/mo</span>
            </div>
            <button className="w-full py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#06060e] hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02] transition-all mb-7">
              Start Free Trial
            </button>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm"><span className="text-emerald-400">✓</span><span className="text-gray-300">Unlimited members</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-emerald-400">✓</span><span className="text-gray-300">Unlimited projects</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-emerald-400">✓</span><span className="text-gray-300">Advanced analytics</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-emerald-400">✓</span><span className="text-gray-300">Priority support</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-emerald-400">✓</span><span className="text-gray-300">50GB storage</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-emerald-400">✓</span><span className="text-gray-300">Custom workflows</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-emerald-400">✓</span><span className="text-gray-300">API access</span></li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-7 hover:border-white/10 transition-all">
            <h3 className="text-lg font-semibold text-white">Enterprise</h3>
            <p className="text-sm text-gray-500 mt-1 mb-6">For organizations at scale</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold text-white">${annual ? "29" : "39"}</span>
              <span className="text-gray-500 text-sm">/user/mo</span>
            </div>
            <button className="w-full py-3 rounded-full text-sm font-semibold bg-white/5 text-white hover:bg-white/10 border border-white/10 transition-all mb-7">
              Contact Sales
            </button>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">Everything in Pro</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">SSO &amp; SAML</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">Dedicated manager</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">99.99% SLA</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">Unlimited storage</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">Audit logs</span></li>
              <li className="flex items-start gap-3 text-sm"><span className="text-gray-600">✓</span><span className="text-gray-300">Custom integrations</span></li>
            </ul>
          </div>

                </div>
            </div>

        </section>
    );
}