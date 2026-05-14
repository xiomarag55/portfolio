import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  jobs = [
    {
      role: 'Senior Full Stack Developer',
      company: 'TechCorp S.A.S',
      period: '2022 – Presente',
      location: 'Bogotá, Colombia',
      type: 'Tiempo completo',
      description: 'Lideré el desarrollo de microservicios con NestJS y la migración de una SPA monolítica a Angular Micro-Frontends, reduciendo el time-to-market un 40%.',
      achievements: [
        'Reduje la latencia de APIs en un 60% optimizando queries y añadiendo Redis cache.',
        'Implementé CI/CD con GitHub Actions + Docker, eliminando deploys manuales.',
        'Mentoré a 4 desarrolladores junior en buenas prácticas de Angular y TypeScript.',
      ],
      tags: ['Angular', 'NestJS', 'PostgreSQL', 'AWS', 'Docker'],
      color: '#00d4ff',
      current: true,
    },
    {
      role: 'Full Stack Developer',
      company: 'StartupHub',
      period: '2020 – 2022',
      location: 'Medellín, Colombia',
      type: 'Tiempo completo',
      description: 'Desarrollé features end-to-end para una plataforma SaaS de gestión de proyectos con +10k usuarios activos usando React y Node.js.',
      achievements: [
        'Construí el módulo de reportes en tiempo real con WebSockets y D3.js.',
        'Integré pasarela de pagos con Stripe, generando +$50k MRR adicional.',
        'Migré la base de datos de MySQL a PostgreSQL sin downtime.',
      ],
      tags: ['React', 'Node.js', 'MongoDB', 'Redis', 'GCP'],
      color: '#8b5cf6',
      current: false,
    },
    {
      role: 'Frontend Developer',
      company: 'AgenciaDigital Co.',
      period: '2019 – 2020',
      location: 'Remoto',
      type: 'Freelance',
      description: 'Desarrollé y mantuve interfaces web para clientes de diversas industrias, con foco en performance y accesibilidad.',
      achievements: [
        'Optimicé el Lighthouse Score de 5 proyectos de 60 a 95+ promedio.',
        'Creé componentes reutilizables en Angular que aceleraron el desarrollo 30%.',
        'Implementé SSR con Angular Universal mejorando el SEO de los clientes.',
      ],
      tags: ['Angular', 'Vue.js', 'SCSS', 'JavaScript', 'Wordpress'],
      color: '#f472b6',
      current: false,
    },
  ];

  education = [
    {
      degree: 'Ingeniería de Sistemas',
      institution: 'Universidad Nacional de Colombia',
      period: '2015 – 2019',
      icon: '🎓',
    },
    {
      degree: 'AWS Solutions Architect',
      institution: 'Amazon Web Services',
      period: '2021',
      icon: '☁️',
    },
    {
      degree: 'Google UX Design Certificate',
      institution: 'Google / Coursera',
      period: '2022',
      icon: '🎨',
    },
  ];
}
