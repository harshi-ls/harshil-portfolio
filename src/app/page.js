"use client";
import { ReactTyped } from "react-typed";
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { loadSlim } from "tsparticles-slim";
import { motion, useScroll } from "framer-motion";
export default function MaxPortfolio() {
  const particlesInit = async (engine) => {
  await loadSlim(engine);
};
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const skills = [
    'IT Support',
    'System Administration',
    'Cybersecurity',
    'Cloud Support',
    'Technical Troubleshooting',
    'Microsoft 365',
    'Active Directory',
    'Networking',
    'ServiceNow',
    'Linux & Windows Administration',
  ];

  const projects = [
    {
      title: 'CyberShield-Lab',
      description:
        'Interactive cybersecurity learning platform with live threat monitoring, dashboard analytics, and security simulation tools.',
      github: 'https://github.com/harshi-ls/cybershield_lab',
    },
    {
      title: 'MindSparkle',
      description:
        'Motivational productivity application focused on user engagement, animations, and positive reinforcement experiences.',
      github: 'https://github.com/harshi-ls/mindsparkle',
    },
    {
      title: 'Enterprise IT Support Operations',
      description:
        'Provided enterprise-level IT support, incident management, troubleshooting, and infrastructure monitoring in fast-paced environments.',
    },
  ];

  return (
    
   <div
  className={`min-h-screen scroll-smooth font-sans transition-all duration-500 ${
    darkMode
      ? "bg-black text-white"
      : "bg-gray-100 text-black"
  }`}
>
  <motion.div
  className="fixed top-0 left-0 right-0 h-1 bg-cyan-400 origin-left z-[100]"
  style={{ scaleX: scrollYProgress }}
/>
  <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-cyan-400/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-center">

    <h1 className="text-xl font-bold text-cyan-400">
      Harshil.dev
    </h1>

    <div className="flex gap-6 text-sm font-medium">

      <a href="#about" className="hover:text-cyan-400 transition">
        About
      </a>

      <a href="#projects" className="hover:text-cyan-400 transition">
        Projects
      </a>

      <a href="#experience" className="hover:text-cyan-400 transition">
        Experience
      </a>

      <a href="#contact" className="hover:text-cyan-400 transition">
        Contact
      </a>

    </div>
  </div>
</nav>
      <Particles
  id="tsparticles"
  
  options={{
    background: {
      color: {
        value: "#000000",
      },
    },

    fpsLimit: 120,

    particles: {
      color: {
        value: "#00ffff",
      },

      links: {
        color: "#00ffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },

      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },

      number: {
        density: {
          enable: true,
        },
        value: 40,
      },

      opacity: {
        value: 0.2,
      },

      shape: {
        type: "circle",
      },

      size: {
        value: { min: 1, max: 3 },
      },
    },

    detectRetina: true,
  }}
  className="absolute inset-0 -z-10"
/>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent" />
<div className="flex justify-end px-6 pt-6">
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-cyan-300 font-semibold hover:scale-105 transition-transform"
  >
    {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
  </button>
</div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-6">
              Senior System Administrator • Cybersecurity Enthusiast
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Harshil
              <span className="block text-cyan-400">Kanaka Madathil</span>
            </h1>

            <div className="mt-6">
  <TypeAnimation
    sequence={[
      "Cybersecurity Analyst",
      2000,
      "SOC Enthusiast",
      2000,
      "IT Infrastructure Specialist",
      2000,
      "Senior System Administrator",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-2xl font-semibold text-cyan-400"
  />
</div>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Experienced IT professional with expertise in technical support,
              system administration, cybersecurity, and cloud technologies.
              Passionate about building secure digital experiences and solving
              complex technical challenges.
            </p>

            <div className="flex flex-wrap gap-4 mt-0">
              <button className="rounded-2xl bg-cyan-400 text-black px-6 py-3 font-semibold hover:scale-105 transition-transform">
                View Projects
              </button>

              <a
                href="/Harshil_Kanaka_Madathil_CV.pdf"
                download
                className="rounded-2xl border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-blue-600 p-[2px] shadow-2xl shadow-cyan-500/20">
              <div className="w-full h-full rounded-[2rem] pb-32 bg-zinc-950 flex flex-col items-center justify-center text-center p-8">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400/40 mb-6 shadow-2xl shadow-cyan-500/30">
  <img
    src="/profile.jpg"
    alt="Harshil Kanaka Madathil"
    className="w-full h-full object-cover object-top"
  />
</div>
<div className="flex justify-center -mt-20 mb-8">
  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-400/40 shadow-2xl shadow-cyan-500/30">
    <img
      src="/profile.jpg"
      alt="Harshil Kanaka Madathil"
      className="w-full h-full object-cover object-top"
    />
  </div>
</div>
                <h2 className="text-2xl font-bold">IT Support Specialist</h2>
                <p className="text-gray-400 mt-2">
                  Infrastructure • Security • Cloud • Support
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                    <div className="text-2xl font-bold text-cyan-400">4+</div>
                    <div className="text-sm text-gray-400">Years IT Experience</div>
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4 border border-white/10">
                    <div className="text-2xl font-bold text-cyan-400">24/7</div>
                    <div className="text-sm text-gray-400">Support Expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
      id="about"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="max-w-7xl mx-auto px-6 py-24"
>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a passionate IT professional with strong experience in system
              administration, technical support, cybersecurity, and cloud
              environments. I have worked in enterprise support roles handling
              incidents, troubleshooting infrastructure issues, and maintaining
              reliable IT operations.
            </p>

            <p className="text-gray-400 leading-relaxed mt-6">
              My background includes Microsoft technologies, networking,
              endpoint support, cloud services, ticketing systems, and security
              operations. I enjoy building modern digital solutions and creating
              impactful user experiences.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Core Skills</h2>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-cyan-300 font-medium hover:scale-105 transition-transform"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
      id="certifications"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="border-t border-white/10 bg-black"
>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Certifications & Education</h2>

            <p className="text-gray-400 mt-4">
              Academic achievements and continuous cybersecurity learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="w-96 h-[50rem] rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5 p-8 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-cyan-400">
                MSc Cybersecurity
              </h3>

              <p className="text-gray-300 mt-4">
                De Montfort University, United Kingdom
              </p>
              <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-black/30 p-5">
  <h4 className="text-lg font-semibold text-cyan-300">
    Academic Research Project
  </h4>

  <p className="text-white mt-3 font-medium">
    Human Factors In Cyber Security
  </p>

  <p className="text-gray-400 mt-3 leading-relaxed">
    Conducted research on human behavior and psychological vulnerabilities
    in cybersecurity environments, focusing on phishing attacks,
    social engineering techniques, security awareness, and user-risk
    interaction within modern digital systems.
  </p>
  <a
  href="/Human_Factors_In_Cyber_Security_Presentation.pptx"
  download
  className="inline-block mt-5 rounded-2xl bg-cyan-400 text-black px-5 py-3 font-semibold hover:scale-105 transition-transform"
>
  Download Research Presentation
</a>
</div>
            </div>

            <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5 p-8 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-cyan-400">
                Bachelors in Computer Application
              </h3>

              <p className="text-gray-300 mt-4">Mangalore University</p>
            </div>

            <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5 p-8 hover:border-cyan-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400">
                Cybersecurity Labs & Training
              </h3>

              <p className="text-gray-300 mt-4">
                Kali Linux • DVWA • Burp Suite • Nmap • Threat Monitoring
              </p>
            </div>
            <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5 p-8 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.25)] hover:-translate-y-2">
  <h3 className="text-2xl font-bold text-cyan-400">
    Cybersecurity
  </h3>

  <p className="text-gray-300 mt-4">
    National Cyber Security Centre (NCSC)
  </p>
</div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
  id="projects"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="border-t border-white/10 bg-zinc-950/50"
>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold">Featured Projects</h2>
              <p className="text-gray-400 mt-3">
                A showcase of projects, platforms, and technical experiences.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 hover:border-cyan-400/30 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-cyan-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 rounded-xl bg-cyan-400 text-black px-5 py-3 font-semibold hover:scale-105 transition-transform"
                  >
                    View Project
                  </a>
                )}

                <button className="mt-8 rounded-xl border border-white/10 px-5 py-3 hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
  id="experience"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="max-w-7xl mx-auto px-6 py-24"
>
        <h2 className="text-4xl font-bold mb-12">Experience</h2>

        <div className="space-y-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Yard Marshal</h3>
                <p className="text-cyan-400 mt-2">Amazon</p>
              </div>

              <div className="text-gray-400">11/2024 - 02/2026</div>
            </div>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Coordinated yard operations, managed logistics flow, monitored
              vehicle movements, and ensured operational efficiency within
              fast-paced warehouse environments.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Senior System Administrator</h3>
                <p className="text-cyan-400 mt-2">Industrus Tech Pvt Ltd</p>
              </div>

              <div className="text-gray-400">09/2020 - 05/2024</div>
            </div>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Managed enterprise IT infrastructure, provided technical support,
              handled system administration tasks, monitored networks, managed
              user accounts, and resolved hardware and software incidents to
              ensure smooth business operations.
            </p>
          </div>
        </div>
      </motion.section>

      {/* GitHub Stats Section */}
<section className="border-t border-white/10 bg-zinc-950/40">
  <div className="max-w-7xl mx-auto px-6 py-24">

    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">
        GitHub Activity
      </h2>

      <p className="text-gray-400 mt-4">
        Development activity and programming statistics.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 items-center">

      <img
  src="https://github-readme-streak-stats.herokuapp.com/?user=harshi-ls&theme=radical"
  alt="GitHub Streak"
  className="w-full rounded-3xl"
/>

     <img
  src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=harshi-ls&theme=radical"
  alt="Top Languages"
  className="w-full rounded-3xl"
/>

    </div>
  </div>
</section>
      {/* Contact Section */}
      <motion.section
  id="contact"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="border-t border-white/10 bg-gradient-to-b from-zinc-950 to-black"
>
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-5xl font-black leading-tight">
            Let’s Build Something Amazing.
          </h2>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed">
            Open to IT support, cybersecurity, cloud, and technical operations
            opportunities.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8 items-start">
            <a
              href="mailto:harshilkanakamadathil@gmail.com"
              className="rounded-2xl bg-cyan-400 text-black px-8 py-4 font-bold hover:scale-105 transition-transform"
            >
              harshilkanakamadathil@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/harshil-kanaka-madathil-8b098a268"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 px-8 py-4 font-bold hover:bg-white/10 transition"
            >
              Visit My LinkedIn Profile
            </a>
          </div>
        </div>
      </motion.section>
      <footer className="border-t border-cyan-400/10 bg-black py-10">
  <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center"> gap-6">

    <div className="text-center w-full">
      <h3 className="text-2xl font-bold text-cyan-400">
        Harshil.dev
      </h3>

      <p className="text-gray-400 mt-2">
        Cybersecurity • Infrastructure • IT Operations
      </p>
    </div>

    <div className="flex items-center justify-center gap-6 text-sm">

      <a
        href="https://github.com/harshi-ls"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/harshil-kanaka-madathil-8b098a268"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition"
      >
        LinkedIn
      </a>

      <a
        href="mailto:harshilkanakamadathil@gmail.com"
        className="hover:text-cyan-400 transition"
      >
        Email
      </a>

    </div>
  </div>

  <div className="text-center text-gray-500 text-sm mt-8">
    © 2026 Harshil Kanaka Madathil. All rights reserved.
  </div>
</footer>
    </div>
  );
}
