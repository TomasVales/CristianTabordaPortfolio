import React, { useState, useEffect } from "react";
import { FiMail, FiGithub, FiLinkedin, FiBook, FiCalendar, FiDownload, FiArrowRight, FiFileText } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaPython } from "react-icons/fa";
import { SiMysql, SiJira, SiTrello } from "react-icons/si";
import { translations } from './translation';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [language, setLanguage] = useState('es');
  const t = translations[language];
  const { navbar } = t;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className="bg-neutral-950 text-neutral-100 min-h-screen font-sans">
      {/* Efecto de puntos sutiles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#4b85b410_1px,transparent_1px)] bg-[size:20px_20px]">
        </div>
      </div>

      {/* Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-neutral-900/90 backdrop-blur-sm border-b border-neutral-800" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-8 py-5">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a
              href="#"
              className="text-2xl font-light text-white tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[#4B85B4]">C</span>T
            </motion.a>

            {/* Navegación principal */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: 'about', label: t.navbar.home },       // ⬅️ Ahora apunta bien
                { id: 'trabajo', label: t.navbar.work },
                { id: 'contacto', label: t.navbar.contact },
              ].map(({ id, label }) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  className="text-neutral-300 hover:text-[#4B85B4] transition-colors text-sm font-light uppercase tracking-widest"
                  whileHover={{ y: -2 }}
                >
                  {label}
                </motion.a>
              ))}

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/cristian-taborda-todino-a21b921ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-neutral-300 hover:text-[#4B85B4] transition-colors text-sm font-light uppercase tracking-widest"
                whileHover={{ x: 2 }}
              >
                {t.navbar.linkedin} <FiArrowRight className="ml-1 h-3 w-3" />
              </motion.a>

              {/* Selector de idioma */}
              <div className="w-px h-6 bg-neutral-600 mx-2"></div>
              <button
                className="text-neutral-300 hover:text-[#4B85B4] text-xs uppercase tracking-widest"
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              >
                {t.navbar.language}
              </button>
            </nav>

            {/* Menú móvil */}
            <button
              className="md:hidden text-neutral-300 hover:text-[#4B85B4] transition-colors p-1"
              onClick={toggleMenu}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>




      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-neutral-900/95 backdrop-blur-sm z-40 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {[
                { id: 'about', label: t.navbar.home },        // Sobre mí
                { id: 'trabajo', label: t.navbar.work },       // Experiencia
                { id: 'education', label: 'Educación' },       // Educación
                { id: 'contacto', label: t.navbar.contact },   // Contacto
              ].map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-neutral-300 hover:text-emerald-400 transition-colors"
                  onClick={(e) => {
                    e.preventDefault(); // 
                    setMenuOpen(false); // 
                    setTimeout(() => {
                      const el = document.getElementById(id);
                      el?.scrollIntoView({ behavior: "smooth" }); // 
                    }, 200); // 
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      <section id="inicio" className="scroll-mt-28 min-h-screen flex items-center justify-center px-6 py-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag "Disponible para nuevos proyectos" */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-[#4B85B4]/20 text-[#4B85B4] text-sm font-medium tracking-wider rounded-full border border-[#4B85B4]/30">
                {t.hero.available}
              </span>
            </motion.div>

            {/* Nombre más grande y destacado */}
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white leading-tight">
              {t.hero.title}
            </h1>

            {/* Subtítulo con mayor jerarquía */}
            <h2 className="text-3xl md:text-4xl text-[#4B85B4] mb-6 font-medium">
              {t.hero.subtitle}
            </h2>

            {/* Descripción con tipografía más grande */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Tecnologías en línea horizontal como el ejemplo */}
            <div className="flex flex-wrap gap-4 mb-10 text-gray-400">
              <div className="flex items-center gap-2">
                <FaHtml5 className="text-[#4B85B4]" /> HTML
              </div>
              <div className="flex items-center gap-2">
                <FaJs className="text-[#4B85B4]" /> JavaScript
              </div>
              <div className="flex items-center gap-2">
                <FaPython className="text-[#4B85B4]" /> Python
              </div>
              <div className="flex items-center gap-2">
                <SiMysql className="text-[#4B85B4]" /> SQL
              </div>
              <div className="flex items-center gap-2">
                <SiJira className="text-[#4B85B4]" /> Jira
              </div>
            </div>

            {/* Botones estilo enlace con flecha como el ejemplo */}
            <div className="flex flex-wrap gap-6 mt-12">
              <motion.a
                href="#trabajo"
                className="px-6 py-3 bg-white text-neutral-900 hover:bg-[#4B85B4] hover:text-white transition-colors duration-300 rounded-sm flex items-center gap-2 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.viewExperience}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>

              <motion.a
                href="/cristian_taborda_cv_2025.pdf"
                download="Cristian_Taborda_CV_2025.pdf"
                className="px-6 py-3 border border-white text-white hover:bg-white hover:text-neutral-900 transition-colors duration-300 rounded-sm flex items-center gap-2 font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.downloadCV}
                <FiDownload className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>



      <section id="about" className="scroll-mt-28 py-20 px-6 bg-neutral-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-light text-white mb-4 tracking-wide">{t.about.title}</h2>
            <div className="w-24 h-0.5 bg-[#4B85B4]"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-neutral-300 mb-6 leading-relaxed">
                {t.about.description}
              </p>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-[#4B85B4] mb-4">{t.about.testingExperience}</h3>
                <ul className="space-y-3 text-neutral-300">
                  {t.about.testingPoints.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#4B85B4] mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-neutral-800/50 p-5 rounded-lg border-l-4 border-[#4B85B4]">
                <h4 className="text-sm font-medium text-[#4B85B4] mb-2 uppercase tracking-wider">{t.about.currently}</h4>
                <p className="text-neutral-300">{t.about.currentlyText}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-lg font-medium text-[#4B85B4] mb-4">{t.about.skills}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Testing Manual', level: '80%' },
                    { name: 'Jira/Trello', level: '70%' },
                    { name: 'HTML/CSS', level: '60%' },
                    { name: 'JavaScript', level: '30%' },
                    { name: 'Python', level: '25%' },
                    { name: 'SQL', level: '25%' }
                  ].map((skill, index) => (
                    <div key={index} className="mb-3">
                      <div className="flex justify-between text-xs text-neutral-400 mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="w-full bg-neutral-800 rounded-full h-1.5">
                        <div
                          className="bg-[#4B85B4] h-1.5 rounded-full"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-neutral-400 mb-1">{t.about.location}</h3>
                  <p className="text-neutral-300">Ciudad Vieja, Montevideo</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-400 mb-1">{t.about.email}</h3>
                  <a href="mailto:cristiantaborda2009@gmail.com" className="text-neutral-300 hover:text-[#4B85B4] transition-colors">
                    cristiantaborda2009@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-400 mb-1">{t.about.phone}</h3>
                  <a href="tel:098341704" className="text-neutral-300 hover:text-[#4B85B4] transition-colors">
                    098 341 704
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-400 mb-1">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/cristian-taborda-todino-a21b921ab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-[#4B85B4] transition-colors flex items-center"
                  >
                    linkedin.com/in/cristian-taborda <FiArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="trabajo" className="scroll-mt-28 py-20 px-6 bg-neutral-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-light text-white mb-4 tracking-wide">{t.experience.title}</h2>
            <div className="w-24 h-0.5 bg-[#4B85B4]"></div>
          </motion.div>

          <div className="space-y-12">
            {/* Experiencia en Testing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-l border-[#4B85B4]/30 pl-10 relative"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#4B85B4] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-950"></div>
              </div>

              <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">{t.experience.freelanceTester.title}</h3>
                    <p className="text-[#4B85B4]">{t.experience.freelanceTester.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#4B85B4]/10 text-[#4B85B4] text-xs font-medium rounded-full">
                    {t.experience.freelanceTester.remote}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">
                    {t.experience.freelanceTester.featuredProjects}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-neutral-800/30 p-4 rounded border-l-2 border-[#4B85B4]">
                      <h5 className="text-white font-medium mb-2">{t.experience.freelanceTester.streamingPlatforms}</h5>
                      <p className="text-neutral-300 text-sm">{t.experience.freelanceTester.streamingDescription}</p>
                    </div>
                    <div className="bg-neutral-800/30 p-4 rounded border-l-2 border-[#4B85B4]">
                      <h5 className="text-white font-medium mb-2">{t.experience.freelanceTester.educationalApp}</h5>
                      <p className="text-neutral-300 text-sm">{t.experience.freelanceTester.educationalDescription}</p>
                    </div>
                    <div className="bg-neutral-800/30 p-4 rounded border-l-2 border-[#4B85B4]">
                      <h5 className="text-white font-medium mb-2">{t.experience.freelanceTester.corporateWebsites}</h5>
                      <p className="text-neutral-300 text-sm">{t.experience.freelanceTester.corporateDescription}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">
                    {t.experience.freelanceTester.achievements}
                  </h4>
                  <ul className="space-y-3 text-neutral-300">
                    {t.experience.freelanceTester.achievementsPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#4B85B4] mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Experiencia en Abitab */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-l border-[#4B85B4]/30 pl-10 relative"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#4B85B4] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-950"></div>
              </div>

              <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">{t.experience.abitab.title}</h3>
                    <p className="text-[#4B85B4]">{t.experience.abitab.company}</p>
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#4B85B4]/10 text-[#4B85B4] text-xs font-medium rounded-full">
                    {t.experience.abitab.location}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">
                    {t.experience.abitab.keyFunctions}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-neutral-800/30 p-4 rounded border-l-2 border-[#4B85B4]">
                      <h5 className="text-white font-medium mb-2">{t.experience.abitab.financialOperations}</h5>
                      <p className="text-neutral-300 text-sm">{t.experience.abitab.financialDescription}</p>
                    </div>
                    <div className="bg-neutral-800/30 p-4 rounded border-l-2 border-[#4B85B4]">
                      <h5 className="text-white font-medium mb-2">{t.experience.abitab.administrativeManagement}</h5>
                      <p className="text-neutral-300 text-sm">{t.experience.abitab.administrativeDescription}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">
                    {t.experience.abitab.relevantAchievements}
                  </h4>
                  <ul className="space-y-3 text-neutral-300">
                    {t.experience.abitab.achievementsPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#4B85B4] mr-2 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section id="education" className="scroll-mt-28 py-20 px-6 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 md:mb-0"
          >
            <h2 className="text-3xl font-light text-white mb-4 tracking-wide">{t.education.title}</h2>
            <div className="w-24 h-0.5 bg-[#4B85B4]"></div>
            <p className="text-neutral-400 mt-4 max-w-2xl">{t.education.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Educación formal */}
            <div className="space-y-10">
              {[t.education.dataAnalyst, t.education.testing, t.education.banking].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-l border-[#4B85B4]/30 pl-8 relative"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#4B85B4]"></div>
                  <h3 className="text-xl font-medium text-white mb-1">{item.title}</h3>
                  <p className="text-[#4B85B4] mb-2">{item.institution}</p>
                  <p className="text-neutral-300 text-sm mb-3">{item.description}</p>
                  <ul className="text-neutral-300 text-sm space-y-2 ml-4">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#4B85B4] mr-2 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              {/* Perfil Profesional */}
              <div className="border-l border-[#4B85B4]/30 pl-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#4B85B4]"></div>
                <h3 className="text-xl font-medium text-white mb-2">{t.education.profile.title}</h3>
                <p className="text-neutral-300 text-sm mb-3">{t.education.profile.description}</p>
                <ul className="text-neutral-300 text-sm space-y-2 ml-4">
                  {t.education.profile.points.map((p, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#4B85B4] mr-2 mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experiencia en Testing */}
              <div className="border-l border-[#4B85B4]/30 pl-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#4B85B4]"></div>
                <h3 className="text-xl font-medium text-white mb-2">{t.education.testingExperience.title}</h3>
                <p className="text-neutral-300 text-sm mb-3">{t.education.testingExperience.description}</p>
                <ul className="text-neutral-300 text-sm space-y-2 ml-4">
                  {t.education.testingExperience.points.map((p, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#4B85B4] mr-2 mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Idiomas */}
              <div className="border-l border-[#4B85B4]/30 pl-8 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#4B85B4]"></div>
                <h3 className="text-xl font-medium text-white mb-2">{t.education.languages.title}</h3>
                <div className="space-y-3">
                  {[
                    { lang: t.education.languages.spanish, level: t.education.languages.native },
                    { lang: t.education.languages.english, level: t.education.languages.intermediate },
                    { lang: t.education.languages.portuguese, level: t.education.languages.basic },
                  ].map((l, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-neutral-300 text-sm">{l.lang}</span>
                      <span className="text-[#4B85B4] text-xs bg-[#4B85B4]/10 px-2 py-1 rounded-full">{l.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certificaciones destacadas */}
            <div className="-mt-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <h3 className="text-lg font-medium text-[#4B85B4] mb-6 uppercase tracking-wider text-center col-span-full">
                    {t.education.certifications.title}
                  </h3>

                  {[
                    t.education.certifications.qaAutomation,
                    t.education.certifications.googleData,
                    t.education.certifications.testingFundamentals,
                    t.education.certifications.gameTesting,
                    t.education.certifications.databases,
                    t.education.certifications.dataScience,
                  ].map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -5 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="relative group"
                    >
                      <a
                        href={cert.url ? cert.url : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800 h-full min-h-[190px] hover:border-[#4B85B4]/50 transition-colors flex flex-col justify-between">
                          <div>
                            <div className="bg-neutral-800/30 w-full h-24 mb-3 rounded flex items-center justify-center">
                              <FiFileText className="text-[#4B85B4] text-3xl" />
                            </div>
                            <h4 className="text-white text-sm font-medium mb-1 line-clamp-2">{cert.title}</h4>
                            <p className="text-[#4B85B4] text-xs mb-2">{cert.platform}</p>
                            <p className="text-neutral-400 text-xs line-clamp-2">{cert.description}</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-[#4B85B4]/80 text-white text-xs px-2 py-1 rounded">
                            Ver certificado
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-6 text-center"
                >
                  <a
                    href="https://www.linkedin.com/in/cristian-taborda-todino-a21b921ab/details/certifications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#4B85B4] hover:text-white text-sm transition-colors"
                  >
                    {t.education.certifications.viewAll}
                    <FiArrowRight className="ml-1" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contacto" className="scroll-mt-28 py-20 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-medium text-white mb-3">{t.contact.title}</h2>
            <div className="w-16 h-0.5 bg-[#4B85B4] mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8"
          >
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
              <motion.a
                href="mailto:cristiantaborda2009@gmail.com"
                className="flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-neutral-900 px-6 py-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail />
                {t.contact.sendEmail}
              </motion.a>

              <motion.a
                href="/cristian_taborda_cv_2025.pdf"
                download="Cristian_Taborda_CV_2025.pdf"
                className="flex items-center justify-center gap-2 border border-white text-white hover:bg-white hover:text-neutral-900 px-6 py-3 rounded-full transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                {t.contact.downloadCV}
              </motion.a>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/cristian-taborda-todino-a21b921ab/"
                className="text-neutral-300 hover:text-emerald-400 transition-colors"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 px-6 border-t border-neutral-800 text-center text-neutral-400 text-sm">
        <div className="max-w-6xl mx-auto">
          <p>{t.footer.rights.replace('{year}', new Date().getFullYear())}</p>
          <p className="mt-2">
            {t.footer.developedBy}{' '}
            <a
              href="https://kiad.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4B85B4] hover:text-white transition-colors"
            >
              KIAD
            </a>
          </p>
        </div>
      </footer>


    </div >
  );
};

export default Portfolio;