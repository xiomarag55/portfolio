import { Injectable, signal } from '@angular/core';

export type Lang = 'es' | 'en';

const UI: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    'nav.home': 'Inicio', 'nav.about': 'Sobre mí', 'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos', 'nav.experience': 'Experiencia', 'nav.contact': 'Contacto',
    'nav.cta': 'Contáctame',
    // Hero
    'hero.available': 'Disponible para proyectos', 'hero.greeting': 'Hola, soy',
    'hero.cta_projects': 'Ver Proyectos', 'hero.cta_contact': 'Contactar',
    'hero.follow': '// sígueme', 'hero.fs_dev': 'Full Stack Dev',
    'hero.stat_projects': 'Proyectos', 'hero.stat_clients': 'Clientes', 'hero.stat_exp': 'Experiencia',
    // About
    'about.tag': '// 01. sobre mí', 'about.title': '¿Quién soy', 'about.title_accent': 'yo?',
    'about.story_title': 'Mi historia',
    'about.val0_title': 'Código limpio', 'about.val0_desc': 'Arquitecturas mantenibles y escalables.',
    'about.val1_title': 'UX primero', 'about.val1_desc': 'Interfaces que encantan a los usuarios.',
    'about.val2_title': 'Entrega ágil', 'about.val2_desc': 'Iteraciones rápidas con calidad garantizada.',
    'about.stat0': 'Años de experiencia', 'about.stat1': 'Proyectos entregados',
    'about.stat2': 'Clientes satisfechos', 'about.stat3': 'Tecnologías dominadas',
    'about.code_role': 'Full Stack Developer', 'about.code_edu': 'Ing. Sistemas · UdeA',
    'about.code_loc': 'Medellín, Colombia 🇨🇴',
    // Skills
    'skills.tag': '// 02. habilidades', 'skills.title': 'Mi', 'skills.title_accent': 'stack técnico',
    'skills.subtitle': 'Tecnologías que domino para construir soluciones completas, desde la base de datos hasta la interfaz.',
    'skills.frontend': 'Frontend', 'skills.backend': 'Backend',
    'skills.db': 'Base de Datos', 'skills.devops': 'DevOps & Cloud',
    'skills.tools_title': 'Herramientas & Tecnologías',
    // Projects
    'projects.tag': '// 03. proyectos', 'projects.title': 'Mi', 'projects.title_accent': 'trabajo reciente',
    'projects.f.all': 'todos', 'projects.f.frontend': 'frontend', 'projects.f.fullstack': 'fullstack',
    'projects.f.backend': 'backend', 'projects.f.mobile': 'mobile',
    'projects.view_code': 'Ver código →', 'projects.demo': 'Demo →', 'projects.featured': 'destacado',
    'projects.gh_title': '¿Quieres ver más?', 'projects.gh_desc': 'Visita mi GitHub para todos mis proyectos.',
    'projects.gh_btn': 'GitHub →',
    // Experience
    'exp.tag': '// 04. experiencia', 'exp.title': 'Mi', 'exp.title_accent': 'trayectoria profesional',
    'exp.edu_title': 'Formación', 'exp.current': 'actual',
    'exp.cv_title': 'Currículum Vitae', 'exp.cv_subtitle': 'Descarga mi CV completo en PDF',
    'exp.cv_btn': 'Descargar CV →',
    // Contact
    'contact.tag': '// 05. contacto', 'contact.title': 'Trabajemos', 'contact.title_accent': 'juntos',
    'contact.subtitle': '¿Tienes un proyecto en mente? Me encantaría escucharte. Respondo en menos de 24 horas.',
    'contact.info_title': 'Información de contacto', 'contact.form_title': 'Envíame un mensaje',
    'contact.name': 'Nombre', 'contact.email': 'Email', 'contact.subject': 'Asunto', 'contact.message': 'Mensaje',
    'contact.ph_name': 'Tu nombre', 'contact.ph_email': 'tu@email.com',
    'contact.ph_subject': '¿En qué puedo ayudarte?', 'contact.ph_message': 'Cuéntame sobre tu proyecto...',
    'contact.submit': 'Enviar mensaje →', 'contact.sending': 'Enviando...',
    'contact.sent': '¡Mensaje enviado! Te respondo pronto ✓',
    'contact.status_title': 'Disponible ahora', 'contact.status_desc': 'Abierta a oportunidades freelance y full-time',
    'contact.lbl_email': 'Email', 'contact.lbl_linkedin': 'LinkedIn',
    'contact.lbl_location': 'Ubicación', 'contact.lbl_avail': 'Disponibilidad',
    'contact.val_location': 'Medellín, Colombia 🇨🇴', 'contact.val_avail': 'Lun–Vie, 9am–6pm COT',
    // Footer
    'footer.tagline': 'Full Stack Developer apasionada por crear experiencias digitales que marcan la diferencia.',
    'footer.available': 'Disponible para proyectos', 'footer.nav_title': 'Navegación',
    'footer.contact_title': 'Contacto rápido', 'footer.copyright': 'Todos los derechos reservados.',
    'footer.made_with': 'Hecho con', 'footer.made_tech': 'en Angular + Tailwind CSS',
    'scroll': 'scroll',
  },
  en: {
    // Navbar
    'nav.home': 'Home', 'nav.about': 'About', 'nav.skills': 'Skills',
    'nav.projects': 'Projects', 'nav.experience': 'Experience', 'nav.contact': 'Contact',
    'nav.cta': 'Contact me',
    // Hero
    'hero.available': 'Available for projects', 'hero.greeting': "Hi, I'm",
    'hero.cta_projects': 'View Projects', 'hero.cta_contact': 'Contact',
    'hero.follow': '// follow me', 'hero.fs_dev': 'Full Stack Dev',
    'hero.stat_projects': 'Projects', 'hero.stat_clients': 'Clients', 'hero.stat_exp': 'Experience',
    // About
    'about.tag': '// 01. about me', 'about.title': 'Who', 'about.title_accent': 'am I?',
    'about.story_title': 'My Story',
    'about.val0_title': 'Clean code', 'about.val0_desc': 'Maintainable and scalable architectures.',
    'about.val1_title': 'UX first', 'about.val1_desc': 'Interfaces that users love.',
    'about.val2_title': 'Agile delivery', 'about.val2_desc': 'Fast iterations with guaranteed quality.',
    'about.stat0': 'Years of experience', 'about.stat1': 'Projects delivered',
    'about.stat2': 'Happy clients', 'about.stat3': 'Technologies mastered',
    'about.code_role': 'Full Stack Developer', 'about.code_edu': 'Systems Eng · UdeA',
    'about.code_loc': 'Medellín, Colombia 🇨🇴',
    // Skills
    'skills.tag': '// 02. skills', 'skills.title': 'My', 'skills.title_accent': 'tech stack',
    'skills.subtitle': 'Technologies I master to build complete solutions, from database to interface.',
    'skills.frontend': 'Frontend', 'skills.backend': 'Backend',
    'skills.db': 'Database', 'skills.devops': 'DevOps & Cloud',
    'skills.tools_title': 'Tools & Technologies',
    // Projects
    'projects.tag': '// 03. projects', 'projects.title': 'My', 'projects.title_accent': 'recent work',
    'projects.f.all': 'all', 'projects.f.frontend': 'frontend', 'projects.f.fullstack': 'fullstack',
    'projects.f.backend': 'backend', 'projects.f.mobile': 'mobile',
    'projects.view_code': 'View code →', 'projects.demo': 'Demo →', 'projects.featured': 'featured',
    'projects.gh_title': 'Want to see more?', 'projects.gh_desc': 'Visit my GitHub for all my projects.',
    'projects.gh_btn': 'GitHub →',
    // Experience
    'exp.tag': '// 04. experience', 'exp.title': 'My', 'exp.title_accent': 'professional journey',
    'exp.edu_title': 'Education', 'exp.current': 'current',
    'exp.cv_title': 'Curriculum Vitae', 'exp.cv_subtitle': 'Download my full CV in PDF',
    'exp.cv_btn': 'Download CV →',
    // Contact
    'contact.tag': '// 05. contact', 'contact.title': "Let's work", 'contact.title_accent': 'together',
    'contact.subtitle': "Have a project in mind? I'd love to hear from you. I respond within 24 hours.",
    'contact.info_title': 'Contact information', 'contact.form_title': 'Send me a message',
    'contact.name': 'Name', 'contact.email': 'Email', 'contact.subject': 'Subject', 'contact.message': 'Message',
    'contact.ph_name': 'Your name', 'contact.ph_email': 'you@email.com',
    'contact.ph_subject': 'How can I help you?', 'contact.ph_message': 'Tell me about your project...',
    'contact.submit': 'Send message →', 'contact.sending': 'Sending...',
    'contact.sent': "Message sent! I'll reply soon ✓",
    'contact.status_title': 'Available now', 'contact.status_desc': 'Open to freelance and full-time opportunities',
    'contact.lbl_email': 'Email', 'contact.lbl_linkedin': 'LinkedIn',
    'contact.lbl_location': 'Location', 'contact.lbl_avail': 'Availability',
    'contact.val_location': 'Medellín, Colombia 🇨🇴', 'contact.val_avail': 'Mon–Fri, 9am–6pm COT',
    // Footer
    'footer.tagline': 'Full Stack Developer passionate about creating digital experiences that make a difference.',
    'footer.available': 'Available for projects', 'footer.nav_title': 'Navigation',
    'footer.contact_title': 'Quick contact', 'footer.copyright': 'All rights reserved.',
    'footer.made_with': 'Made with', 'footer.made_tech': 'in Angular + Tailwind CSS',
    'scroll': 'scroll',
  },
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly current = signal<Lang>('es');

  toggle() {
    this.current.update(l => (l === 'es' ? 'en' : 'es'));
  }

  t(key: string): string {
    return UI[this.current()][key] ?? key;
  }
}
