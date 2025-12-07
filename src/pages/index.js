import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Send, Smartphone, Code, Database, Wrench, BookOpen, Briefcase } from 'lucide-react';
import styles from './portfolio.module.css';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const stats = [
    { icon: BookOpen, value: '9.32', label: 'CGPA (B.Tech)' },
    { icon: Code, value: '6+', label: 'Programming Languages' },
    { icon: Briefcase, value: '2+', label: 'Years Experience' },
    { icon: Smartphone, value: '4+', label: 'Android Apps' }
  ];

  const projects = [
    { 
      title: 'Uddaka & Uddaka Driver', 
      category: 'Android Development', 
      description: 'Delivery service apps with real-time tracking',
      tech: 'Java | PHP/Laravel | SQL | XML',
      link: '#'
    },
    { 
      title: 'Increase High Volume Booster', 
      category: 'Android App', 
      description: 'Audio amplification with real-time control',
      tech: 'Kotlin | Android Studio | XML | Carbon',
      link: '#'
    },
    { 
      title: 'Nova Prompt AI', 
      category: 'Android App', 
      description: 'AI prompt library with one-tap copying',
      tech: 'Kotlin | Firebase | MVVM | XML',
      link: '#'
    },
    { 
      title: 'E-Cell KIET App', 
      category: 'Android Development', 
      description: 'Event management with ticket scanning system',
      tech: 'Android Studio | Firebase | XML',
      link: '#'
    }
  ];

  const skills = [
    { name: 'Kotlin & Java', level: 90 },
    { name: 'Android Studio', level: 88 },
    { name: 'PHP/Laravel', level: 80 },
    { name: 'MySQL & MongoDB', level: 85 },
    { name: 'Git & GitHub', level: 92 },
    { name: 'Firebase', level: 82 }
  ];

  const skillsCategories = [
    { icon: Code, name: 'Programming Languages', items: 'Kotlin | Java | C | Python | PHP | XML' },
    { icon: Smartphone, name: 'Frameworks', items: 'Android Studio | Laravel | SpringBoot' },
    { icon: Database, name: 'Databases', items: 'MySQL | MongoDB' },
    { icon: Wrench, name: 'Tools & Platforms', items: 'Git | GitHub | Firebase | Figma' }
  ];

  const workExperience = [
    {
      company: 'Xcentic Technologies',
      position: 'Android Developer',
      period: 'Aug 2024 – Present',
      description: [
        'Developing Uddaka and Uddaka Driver Android apps using Java',
        'Integrating backend APIs with PHP/Laravel and SQL for real-time data handling',
        'Designing and optimizing app UI/UX with XML and Carbon libraries',
        'Managing version control via Git/GitHub'
      ]
    },
    {
      company: 'E-Cell KIET',
      position: 'Android Developer',
      period: '2021 – 2023',
      description: [
        'Contributed to official E-Cell mobile application',
        'Implemented secure ticket scanning system for events',
        'Collaborated with event tech team to streamline entry processes'
      ]
    }
  ];

  const education = [
    {
      institution: 'KIET Group of Institutions, Ghaziabad',
      degree: 'B.Tech Computer Science & Technology',
      period: '2021 – 2023',
      details: 'CGPA: 9.32'
    },
    {
      institution: 'J.D. Public School, Chhapra',
      degree: 'Intermediate (CBSE) - PCM',
      period: '2020 – 2021',
      details: 'Percentage: 87.2%'
    },
    {
      institution: 'Galaxy Residential Public School, Chhapra',
      degree: '10th (CBSE) - PCM',
      period: '2019 – 2020',
      details: 'Percentage: 78%'
    }
  ];

  return (
    <div className={styles.portfolio}>
      {/* Background */}
      <div className={styles.portfolio__background}>
        <div className={`${styles.portfolio__gradient_orb} ${styles.portfolio__gradient_orb___1}`} />
        <div className={`${styles.portfolio__gradient_orb} ${styles.portfolio__gradient_orb___2}`} />
        <div className={`${styles.portfolio__gradient_orb} ${styles.portfolio__gradient_orb___3}`} />
        <div className={styles.portfolio__noise} />
      </div>

      <div className={styles.portfolio__content}>
        {/* Navigation */}
        <nav className={`${styles.nav} ${scrollY > 50 ? styles.nav___scrolled : ''}`}>
          <div className={styles.nav__container}>
            <div className={styles.nav__logo}>
              <div className={styles.nav__logo_icon}>AS</div>
              <div className={styles.nav__logo_text}>
                <div className={styles.nav__logo_title}>Anurag</div>
                <div className={styles.nav__logo_subtitle}>Developer</div>
              </div>
            </div>

            <div className={`${styles.nav__menu} ${styles.nav__menu___desktop}`}>
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className={`${styles.nav__link} ${activeSection === item.toLowerCase().replace(' ', '') ? styles.nav__link___active : ''}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button className={`${styles.btn} ${styles.btn___primary} ${styles.btn___nav}`}>
              Hire Me
            </button>

            <button 
              className={styles.nav__toggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className={`${styles.nav__menu} ${styles.nav__menu___mobile}`}>
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map(item => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className={styles.nav__link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className={styles.hero}>
          <div className={styles.hero__container}>
            <div className={styles.hero__content}>
              <div className={styles.hero__text}>
                <p className={styles.hero__greeting}>Hello, I'm</p>
                <h1 className={styles.hero__title}>
                  Anurag<br />
                  <span className={styles.hero__title_highlight}>Shrivastav</span>
                </h1>
                <p className={styles.hero__subtitle}>Android Developer & Software Engineer</p>
                <p className={styles.hero__description}>
                  Passionate about building innovative mobile solutions with expertise in Android development, 
                  backend integration, and modern software engineering practices.
                </p>

                <div className={styles.hero__contact_info}>
                  <div className={styles.contact_item}>
                    <Mail size={20} />
                    <span>anurag13360@gmail.com</span>
                  </div>
                  <div className={styles.contact_item}>
                    <Smartphone size={20} />
                    <span>+91-8757772761</span>
                  </div>
                </div>

                <div className={styles.hero__actions}>
                  <a href="#projects" className={`${styles.btn} ${styles.btn___primary}`}>View Projects</a>
                  <a href="#contact" className={`${styles.btn} ${styles.btn___secondary}`}>Contact Me</a>
                </div>
              </div>

              <div className={styles.hero__image_wrapper}>
                <div className={styles.hero__image_glow} />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                  alt="Anurag Shrivastav"
                  className={styles.hero__image}
                />
                
                <div className={styles.hero__socials}>
                  {[
                    { icon: Github, link: 'https://github.com', label: 'GitHub' },
                    { icon: Linkedin, link: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: Mail, link: 'mailto:anurag13360@gmail.com', label: 'Email' }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.link}
                        className={styles.hero__social_link}
                        aria-label={social.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className={styles.hero__stats}>
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className={styles.stat_card}>
                    <Icon className={styles.stat_card__icon} size={24} />
                    <div className={styles.stat_card__value}>{stat.value}</div>
                    <div className={styles.stat_card__label}>{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`${styles.section} ${styles.section___about}`}>
          <div className={styles.section__container}>
            <div className={styles.section__header}>
              <span className={styles.section__label}>About Me</span>
              <h2 className={styles.section__title}>Android Developer & Problem Solver</h2>
            </div>

            <div className={styles.about__grid}>
              <div className={styles.about__text}>
                <p className={styles.about__paragraph}>
                  I'm a <span className={styles.text_highlight}>passionate Android Developer</span> with experience in building 
                  robust mobile applications using Java, Kotlin, and modern Android frameworks. My expertise 
                  extends to backend integration with PHP/Laravel and database management.
                </p>
                <p className={styles.about__paragraph}>
                  Currently working at Xcentic Technologies, developing and maintaining Uddaka delivery 
                  applications with real-time data handling and optimized user experiences.
                </p>
                <p className={styles.about__paragraph}>
                  I believe in writing clean, scalable code and following best practices in software development. 
                  My approach combines technical expertise with user-centric design to create impactful solutions.
                </p>
              </div>

              <div className={styles.about__skills}>
                <h3 className={styles.skills_title}>Technical Skills</h3>
                {skills.map((skill, i) => (
                  <div key={i} className={styles.skill}>
                    <div className={styles.skill__header}>
                      <span className={styles.skill__name}>{skill.name}</span>
                      <span className={styles.skill__percentage}>{skill.level}%</span>
                    </div>
                    <div className={styles.skill__bar}>
                      <div 
                        className={styles.skill__progress}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <div className={styles.section__container}>
            <div className={styles.section__header}>
              <span className={styles.section__label}>Technical Expertise</span>
              <h2 className={styles.section__title}>Skills & Technologies</h2>
            </div>

            <div className={styles.skills_categories}>
              {skillsCategories.map((category, i) => {
                const Icon = category.icon;
                return (
                  <div key={i} className={styles.category_card}>
                    <Icon size={32} />
                    <h3>{category.name}</h3>
                    <p>{category.items}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`${styles.section} ${styles.section___portfolio}`}>
          <div className={styles.section__container}>
            <div className={styles.section__header}>
              <span className={styles.section__label}>Portfolio</span>
              <h2 className={styles.section__title}>Featured Projects</h2>
            </div>

            <div className={styles.portfolio_grid}>
              {projects.map((project, i) => (
                <a
                  key={i}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.project_card}
                >
                  <div className={styles.project_card__image_wrapper}>
                    <div className={styles.project_card__tech_badge}>
                      {project.tech}
                    </div>
                    <div className={styles.project_card__overlay}>
                      <span className={styles.project_card__view}>View Project →</span>
                    </div>
                  </div>
                  <div className={styles.project_card__content}>
                    <span className={styles.project_card__category}>{project.category}</span>
                    <h3 className={styles.project_card__title}>{project.title}</h3>
                    <p className={styles.project_card__description}>{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${styles.section} ${styles.section___contact}`}>
          <div className={`${styles.section__container} ${styles.section__container___narrow}`}>
            <div className={styles.section__header}>
              <span className={styles.section__label}>Contact</span>
              <h2 className={styles.section__title}>Let's Build Something Amazing</h2>
            </div>

            <div className={styles.contact_form}>
              <div className={styles.form_group}>
                <label className={styles.form_label}>Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={styles.form_input}
                  placeholder="Your Name"
                />
              </div>

              <div className={styles.form_group}>
                <label className={styles.form_label}>Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={styles.form_input}
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.form_group}>
                <label className={styles.form_label}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={6}
                  className={`${styles.form_input} ${styles.form_input___textarea}`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`${styles.btn} ${styles.btn___primary} ${styles.btn___full}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>

              {formStatus === 'success' && (
                <p className={`${styles.form_message} ${styles.form_message___success}`}>✓ Message sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className={`${styles.form_message} ${styles.form_message___error}`}>✗ Failed to send. Please try again.</p>
              )}
            </div>

            <div className={styles.contact_info}>
              <div className={styles.contact_info_item}>
                <Mail size={24} />
                <div>
                  <h4>Email</h4>
                  <p>anurag13360@gmail.com</p>
                </div>
              </div>
              <div className={styles.contact_info_item}>
                <Smartphone size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>+91-8757772761</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footer__container}>
            <p className={styles.footer__text}>© 2024 Anurag Shrivastav. All rights reserved.</p>
            <div className={styles.footer__links}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}