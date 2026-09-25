import React from "react";

function App() {
  const whatsappNumber = "919365939799";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi BoostBharat! I want to discuss a project."
  )}`;

  const services = [
    {
      icon: "🤖",
      title: "AI Solutions",
      text: "AI-powered tools, chatbots, workflows and smart business solutions.",
    },
    {
      icon: "💻",
      title: "Website Development",
      text: "Modern, responsive and professional websites for businesses and brands.",
    },
    {
      icon: "⚙️",
      title: "Automation",
      text: "Automate repetitive tasks and make your business workflow faster.",
    },
    {
      icon: "🎬",
      title: "Video Editing",
      text: "Reels, shorts, ads, promotional videos and professional editing.",
    },
    {
      icon: "🖼️",
      title: "Photo Editing",
      text: "Product photos, social media creatives, thumbnails and image enhancement.",
    },
    {
      icon: "📱",
      title: "Social Media",
      text: "Social media creatives, content strategy and page management support.",
    },
    {
      icon: "🎨",
      title: "Branding & Design",
      text: "Logos, posters, banners, brand identity and marketing creatives.",
    },
    {
      icon: "📈",
      title: "Digital Growth",
      text: "Digital solutions designed to improve your online presence and reach.",
    },
  ];

  const projects = [
    {
      title: "Business Websites",
      category: "Web Development",
    },
    {
      title: "AI Business Tools",
      category: "Artificial Intelligence",
    },
    {
      title: "Social Media Reels",
      category: "Video Editing",
    },
    {
      title: "Brand Identity",
      category: "Design & Branding",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <a href="#home" className="text-2xl font-bold tracking-tight">
            Boost<span className="text-cyan-400">Bharat</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-slate-300 hover:text-cyan-400">
              Services
            </a>

            <a href="#work" className="text-slate-300 hover:text-cyan-400">
              Work
            </a>

            <a href="#process" className="text-slate-300 hover:text-cyan-400">
              Process
            </a>

            <a href="#contact" className="text-slate-300 hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-400 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            WhatsApp Us
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center md:py-36">

          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
            AI • Websites • Automation • Creative Services
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
            We Build Digital Solutions
            <span className="block text-cyan-400">
              That Move Businesses Forward.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            BoostBharat helps businesses, creators and brands grow online with
            AI solutions, websites, automation, video editing, photo editing
            and digital creative services.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="#services"
              className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Services
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 font-bold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Start a Project →
            </a>

          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">AI</h3>
              <p className="mt-2 text-sm text-slate-400">Smart Solutions</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">Web</h3>
              <p className="mt-2 text-sm text-slate-400">Modern Websites</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">Auto</h3>
              <p className="mt-2 text-sm text-slate-400">Business Automation</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-3xl font-bold text-cyan-400">Creative</h3>
              <p className="mt-2 text-sm text-slate-400">Design & Editing</p>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-widest text-cyan-400">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Everything You Need To Grow Online
            </h2>

            <p className="mt-5 text-slate-400">
              From building your website to creating content and automating
              your workflow, BoostBharat provides complete digital services.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
              >

                <div className="text-4xl">{service.icon}</div>

                <h3 className="mt-6 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {service.text}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block text-sm font-semibold text-cyan-400"
                >
                  Get Started →
                </a>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-cyan-400">
              Our Work
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Built For Real-World Results
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              We create digital experiences that look professional, work
              smoothly and help businesses build their online presence.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group min-h-64 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-white/[0.03] p-8 transition hover:border-cyan-400/40"
              >

                <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400">
                  {project.category}
                </span>

                <h3 className="mt-8 text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  Professional digital work created for modern businesses and
                  creators.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block font-semibold text-cyan-400"
                >
                  Discuss Your Project →
                </a>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="border-y border-white/10 bg-slate-900/40">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-cyan-400">
              Our Process
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Simple. Clear. Professional.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            {[
              ["01", "Tell Us", "Tell us about your business, idea or project."],
              ["02", "Plan", "We understand your requirements and create a plan."],
              ["03", "Build", "Our team works on your website, content or solution."],
              ["04", "Launch", "We deliver the final project ready for use."],
            ].map(([number, title, text]) => (
              <div key={number} className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-xl font-bold text-cyan-400">
                  {number}
                </div>

                <h3 className="mt-6 text-xl font-bold">{title}</h3>

                <p className="mt-3 text-slate-400">{text}</p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative overflow-hidden">

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">

          <p className="font-semibold uppercase tracking-widest text-cyan-400">
            Let's Build Something
          </p>

          <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
            Have a Project in Mind?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Whether you need a website, AI solution, automation, video editing,
            photo editing or complete digital support — let's talk.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              💬 Chat on WhatsApp
            </a>

            <a
              href="mailto:hello@boostbharat.com"
              className="rounded-full border border-white/20 px-8 py-4 font-bold transition hover:border-cyan-400 hover:text-cyan-400"
            >
              ✉️ Email Us
            </a>

          </div>

          <p className="mt-8 text-sm text-slate-500">
            Available for websites, AI projects, editing, automation & creative
            work.
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">

          <div>
            <div className="text-2xl font-bold">
              Boost<span className="text-cyan-400">Bharat</span>
            </div>

            <p className="mt-2 text-sm text-slate-500">
              AI + Website Development + Automation + Creative Services
            </p>
          </div>

          <div className="flex gap-5 text-sm text-slate-400">
            <a href="#services" className="hover:text-cyan-400">
              Services
            </a>

            <a href="#work" className="hover:text-cyan-400">
              Work
            </a>

            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 py-5 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} BoostBharat. All rights reserved.
        </div>

      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl shadow-2xl transition hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>

    </div>
  );
}

export default App;