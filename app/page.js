import Image from "next/image";
import PircingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection"
import { Zap, BarChart3, Users, Shield, Layers, Target, Globe } from "lucide-react"
import RevealOnScroll from "./components/RevealOnScroll"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06060e] text-gray-200 font-[family-name:var(--font-sora)]">

    {/* NAVBAR */}
    <nav className="fixed top-0 w-full z-50 bg-[#06060e]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <span className="text-lg font-bold text-white tracking-tight">
          ⚡ TaskFlow
        </span>

        {/* links */}
        <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-gray-400 hover:text-white transition-colors">How it Works</a>
            <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>

          {/* botones */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-sm text-gray-300 hover:text-white px-3 py-1.5">
              Log In
            </button>
            <button className="text-sm font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#06060e] px-5 py-2 rounded-full hover:scale-105 transition-transform">
              Get Started Free
            </button>
          </div>
      </div>
    </nav>
    {/* Placeholder para que no se vea que el navbar queda fijo arriba */}
    <div className="pt-32 text-center">
      <h1 className="text-4xl font-bold text-white"></h1>
    </div>

    {/* hero */}
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6">
       
       {/* Glow de fondo con el efecto luz verde */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
         <div className="relative max-w-5xl mx-auto text-center">

            {/* Badge - la etiquetita arriba del título */}
            <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400 bg-emerald-500/10 mb-8">
            <span className="text-sm font-medium text-emerald-400">
              ✨ Now with AI-powered task prioritization
            </span>
            </div>
            </RevealOnScroll>

         {/*Titulo principal*/}
         <RevealOnScroll delay={0.1}>
         <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          <span className="text-white">Ship faster with</span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
          your entire team
          </span>
         </h1>
         </RevealOnScroll>

         <RevealOnScroll delay={0.2}>
         <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The project management tool that gets out of your way. Organize
            tasks, track progress, and collaborate — all in one beautiful workspace.
          </p>
          </RevealOnScroll>
  
          <RevealOnScroll delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#06060e] font-semibold px-8 py-3.5 rounded-full hover:shadow-xl hover:shadow-emerald-500/20 transition-all hover:scale-105 text-sm">
             Start Free — No Card Needed →
            </button>
            <button className="flex items-center gap-2 text-gray-300 hover:text-white font-medium px-6 py-3.5 rounded-full border border-white/10 hover:border-white/20 transition-all text-sm hover:bg-white/5">
              ▶ Watch Demo
            </button>          
         </div>
         </RevealOnScroll>
      </div>

        <RevealOnScroll delay={0.4}>
            <div className="mt-16 md:mt-20 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#06060e] via-transparent to-transparent z-10 pointer-events-none" />
              <div className="rounded-xl border border-white/10 bg-[#0C0C14] overflow-hidden shadow-2xl shadow-black/50">

                {/* Barra del browser falsa */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0A0A12]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 mx-8">
                    <div className="max-w-md mx-auto bg-white/5 rounded-md px-3 py-1 text-xs text-gray-500 text-center">
                      app.taskflow.io/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard falso */}
                <div className="p-6 md:p-8 grid grid-cols-12 gap-4 min-h-[300px] md:min-h-[400px]">

                  {/* Sidebar */}
                  <div className="col-span-3 hidden md:block space-y-3">
                    <div className="h-8 w-full bg-emerald-500/10 rounded-md border border-emerald-500/20" />
                    <div className="h-6 rounded-md w-[75%] bg-white/[0.04]" />
                    <div className="h-6 rounded-md w-[90%] bg-white/[0.035]" />
                    <div className="h-6 rounded-md w-[60%] bg-white/[0.03]" />
                    <div className="h-6 rounded-md w-[85%] bg-white/[0.03]" />
                    <div className="h-px bg-white/5 my-2" />
                    <div className="h-5 rounded-md w-[55%] bg-white/[0.025]" />
                    <div className="h-5 rounded-md w-[70%] bg-white/[0.025]" />
                  </div>

                  {/* Contenido principal - Kanban */}
                  <div className="col-span-12 md:col-span-9 space-y-4">
                    <div className="flex gap-3 items-center mb-2">
                      <div className="h-7 w-40 bg-white/5 rounded-md" />
                      <div className="ml-auto h-7 w-24 bg-emerald-500/15 rounded-md border border-emerald-500/20" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">

                      {/* Columna To Do */}
                      <div className="bg-white/[0.02] rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-gray-500" />
                          <span className="text-xs text-gray-500 font-medium">To Do</span>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-md p-3 mb-2">
                          <div className="h-3 rounded bg-white/10 w-[80%] mb-2" />
                          <div className="h-2 rounded bg-white/5 w-3/4 mb-3" />
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30" />
                            <div className="h-2 w-10 rounded bg-white/5" />
                          </div>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-md p-3">
                          <div className="h-3 rounded bg-white/10 w-[65%] mb-2" />
                          <div className="h-2 rounded bg-white/5 w-3/4 mb-3" />
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30" />
                            <div className="h-2 w-10 rounded bg-white/5" />
                          </div>
                        </div>
                      </div>

                      {/* Columna In Progress */}
                      <div className="bg-white/[0.02] rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-amber-500" />
                          <span className="text-xs text-gray-500 font-medium">In Progress</span>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-md p-3 mb-2">
                          <div className="h-3 rounded bg-white/10 w-[85%] mb-2" />
                          <div className="h-2 rounded bg-white/5 w-3/4 mb-3" />
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30" />
                            <div className="h-2 w-10 rounded bg-white/5" />
                          </div>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-md p-3 mb-2">
                          <div className="h-3 rounded bg-white/10 w-[70%] mb-2" />
                          <div className="h-2 rounded bg-white/5 w-3/4 mb-3" />
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30" />
                            <div className="h-2 w-10 rounded bg-white/5" />
                          </div>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-md p-3">
                          <div className="h-3 rounded bg-white/10 w-[90%] mb-2" />
                          <div className="h-2 rounded bg-white/5 w-3/4 mb-3" />
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30" />
                            <div className="h-2 w-10 rounded bg-white/5" />
                          </div>
                        </div>
                      </div>

                      {/* Columna Done */}
                      <div className="bg-white/[0.02] rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span className="text-xs text-gray-500 font-medium">Done</span>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-md p-3 mb-2">
                          <div className="h-3 rounded bg-white/10 w-[75%] mb-2" />
                          <div className="h-2 rounded bg-white/5 w-3/4 mb-3" />
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30" />
                            <div className="h-2 w-10 rounded bg-white/5" />
                          </div>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 rounded-md p-3">
                          <div className="h-3 rounded bg-white/10 w-[60%] mb-2" />
                          <div className="h-2 rounded bg-white/5 w-3/4 mb-3" />
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-emerald-400/30 to-cyan-400/30" />
                            <div className="h-2 w-10 rounded bg-white/5" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

    </section>

    {/* social proof */}
    
    <section className="py-12 border-y border-white/5">
    
    <div className="max-w-5xl mx-auto px-6">
      <RevealOnScroll delay={0.1}>
      <p className="text-center text-xs uppercase tracking-widest text-gray-500 mb-8">
       Trusted by teams at
      </p>
      </RevealOnScroll>
    
    <RevealOnScroll delay={0.2}>
     <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
      <span className="text-gray-600 font-bold text-lg hover:text-gray-400 transition-colors">Stripe</span>
      <span className="text-gray-600 font-bold text-lg hover:text-gray-400 transition-colors">Vercel</span>
      <span className="text-gray-600 font-bold text-lg hover:text-gray-400 transition-colors">Linear</span>
      <span className="text-gray-600 font-bold text-lg hover:text-gray-400 transition-colors">Notion</span>
      <span className="text-gray-600 font-bold text-lg hover:text-gray-400 transition-colors">Slack</span>
      <span className="text-gray-600 font-bold text-lg hover:text-gray-400 transition-colors">Figma</span>
     </div>
     </RevealOnScroll>
    </div>
    </section>
    

    {/* stats */}
 
     
    <section className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="text-center">
          <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">12K+</div>
          <div className="text-sm text-gray-500 mt-1">Teams worldwide</div>
        </div>

        <div className="text-center">
          <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">2.5M</div>
          <div className="text-sm text-gray-500 mt-1">Tasks completed</div>
        </div>

        <div className="text-center">
          <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">99.9%</div>
          <div className="text-sm text-gray-500 mt-1">Uptime SLA</div>
        </div>

        <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">4.9/5</div>
            <div className="text-sm text-gray-500 mt-1">User rating</div>
        </div>

      </div>

      {/* FEATURES */}
      <section id="features" className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* header de la sección */}
          <RevealOnScroll delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Everything your team needs</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Powerful alone. Unstoppable together. Every feature is designed to help your team move faster.
            </p>
          </div>
          </RevealOnScroll>

          {/* Grid de 4 cards */}
          <div className="grid md:grid-cols-2 gap-5">

            <RevealOnScroll delay={0.2}>
            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-7 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500">
              <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                 <Zap size={20} className="text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Create, assign, and track tasks in seconds. No bloated interfaces, no learning curve.</p>
            </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-7 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500">
              <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                <BarChart3 size={20} className="text-emerald-400" />
               </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-Time Analytics</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Dashboards that show team velocity, bottlenecks, and progress at a glance.</p>
            </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.4}>
            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-7 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500">
              <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
               <Users size={20} className="text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Built for Teams</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Collaborate with unlimited members. Permissions, roles, and shared workspaces included.</p>
            </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.5}>
            <div className="group rounded-xl border border-white/5 bg-white/[0.02] p-7 hover:border-emerald-500/20 hover:bg-emerald-500/[0.03] transition-all duration-500">
              <div className="w-11 h-11 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                  <Shield size={20} className="text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed">SOC 2 certified. End-to-end encryption. Your data never leaves your control.</p>
            </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>
    </section>
   

     {/* how it works */}
     
     <section id="how-it-works" className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          
          <RevealOnScroll delay={0.1}>
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Up and running in minutes</h2>
          </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">

          <RevealOnScroll delay={0.2}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-5">
  <Target size={26} className="text-emerald-400" />
</div>
              <p className="text-xs font-bold text-emerald-500/60 tracking-widest mb-2">STEP 01</p>
              <h3 className="text-xl font-semibold text-white mb-2">Create Your Workspace</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Set up your team workspace in under 60 seconds. Import from Trello, Asana, or start fresh.</p>
            </div>
            </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-5">
  <Target size={26} className="text-emerald-400" />
</div>
              <p className="text-xs font-bold text-emerald-500/60 tracking-widest mb-2">STEP 02</p>
              <h3 className="text-xl font-semibold text-white mb-2">Organize &amp; Prioritize</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Use boards, lists, or timeline views. Drag-and-drop everything. AI suggests priority levels.</p>
            </div>
            </RevealOnScroll>

          <RevealOnScroll delay={0.4}>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-5">
  <Globe size={26} className="text-emerald-400" />
             </div>
              <p className="text-xs font-bold text-emerald-500/60 tracking-widest mb-2">STEP 03</p>
              <h3 className="text-xl font-semibold text-white mb-2">Ship Together</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Real-time collaboration across time zones. Async updates keep everyone aligned without meetings.</p>
            </div>
          </RevealOnScroll>
          </div>  
                  
        </div>
        
     </section>


     {/* Testimonials */}
     
     <section className="py-16 md:py-24 px-6 bg-white/[0.01]">
     <div className="max-w-5xl mx-auto">
 
      <RevealOnScroll delay={0.1}>
      <div className="text-center mb-16">
        <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-3">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Loved by teams everywhere</h2>
      </div>
      </RevealOnScroll>

      <div className="grid md:grid-cols-3 gap-5">
        
        <RevealOnScroll delay={0.2}>
        <div className="rounded-xl border border-white/5 bg-[#0C0C14] p-6 hover:border-white/10 transition-colors flex flex-col">
          <div className="flex gap-0.5 mb-4">
            <span className="text-amber-400">★</span>
            <span className="text-amber-400">★</span>
            <span className="text-amber-400">★</span>
            <span className="text-amber-400">★</span>
            <span className="text-amber-400">★</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
            &ldquo;TaskFlow replaced three tools for us. Our sprint velocity increased 40% in the first month.&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 flex items-center justify-center text-xs font-bold text-emerald-300">SC</div>
            <div>
              <div className="text-sm font-medium text-white">Sarah Chen</div>
              <div className="text-xs text-gray-500">CTO at Buildfast</div>
            </div>
          </div>
        </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
        <div className="rounded-xl border border-white/5 bg-[#0C0C14] p-6 hover:border-white/10 transition-colors flex flex-col">
          <div className="flex gap-0.5 mb-4">
             <span className="text-amber-400">★</span>
                <span className="text-amber-400">★</span>
                <span className="text-amber-400">★</span>
                <span className="text-amber-400">★</span>
                <span className="text-amber-400">★</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
             &ldquo;The cleanest project management tool I&rsquo;ve ever used. My team actually enjoys updating their tasks now.&rdquo;
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 flex items-center justify-center text-xs font-bold text-emerald-300">MR</div>
            <div>
              <div className="text-sm font-medium text-white">Marcus Rivera</div>
              <div className="text-xs text-gray-500">Product Lead at Scaleup</div>
            </div>
          </div>
        </div>
        </RevealOnScroll>


        <RevealOnScroll delay={0.4}>
        <div className="rounded-xl border border-white/5 bg-[#0C0C14] p-6 hover:border-white/10 transition-colors flex flex-col">
        <div className="flex gap-0.5 mb-4">
          <span className="text-amber-400">★</span>
                <span className="text-amber-400">★</span>
                <span className="text-amber-400">★</span>
                <span className="text-amber-400">★</span>
                <span className="text-amber-400">★</span>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
           &ldquo;We went from scattered Notion docs to a single source of truth. Game changer for our remote team.&rdquo;
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-white/5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 flex items-center justify-center text-xs font-bold text-emerald-300">EB</div>
          <div>
            <div className="text-sm font-medium text-white">Emma Blackwood</div>
            <div className="text-xs text-gray-500">Founder at Driftlabs</div>
          </div>
         </div>
        </div>
        </RevealOnScroll>

      </div>
     </div>
     </section>
     


     <RevealOnScroll delay={0.5}><PircingSection /></RevealOnScroll>
     <RevealOnScroll delay={0.5}><FaqSection /></RevealOnScroll>
      

      {/* FINAL CTA */}
      <RevealOnScroll delay={0.1}>
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center relative">
          <RevealOnScroll delay={0.2}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/[0.08] rounded-full blur-[100px] pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to transform how<br />your team works?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
              Join 12,000+ teams already using TaskFlow to ship better products, faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#06060e] font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-emerald-500/20 transition-all hover:scale-105 text-sm">
                Get Started Free →
              </button>
              <span className="text-gray-500 text-sm flex items-center gap-1">🕐 Takes less than 60 seconds</span>
            </div>
          </div>
          </RevealOnScroll>
        </div>
      </section>
      </RevealOnScroll>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <span className="font-bold text-white text-lg">⚡ TaskFlow</span>
              <p className="text-xs text-gray-500 mt-3 leading-relaxed">The modern project management tool for teams that ship.</p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Product</h4>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">Features</a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">Pricing</a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">Integrations</a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">Changelog</a>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</h4>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">About</a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">Blog</a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">Careers</a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">Contact</a>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</h4>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">Privacy</a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">Terms</a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">Security</a>
              <a href="#" className="block text-sm text-gray-500 hover:text-gray-300 py-1">GDPR</a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">&copy; 2025 TaskFlow. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-600 hover:text-gray-400">Twitter</a>
              <a href="#" className="text-xs text-gray-600 hover:text-gray-400">GitHub</a>
              <a href="#" className="text-xs text-gray-600 hover:text-gray-400">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>

    
    
  );
}
