import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

interface ProjectData {
  title: string;
  descEs: string;
  descEn: string;
  tags: string[];
  category: string;
  icon: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  lang = inject(LanguageService);
  activeFilter = signal('all');

  filters = [
    { key: 'all',      labelKey: 'projects.f.all' },
    { key: 'frontend', labelKey: 'projects.f.frontend' },
    { key: 'fullstack',labelKey: 'projects.f.fullstack' },
    { key: 'backend',  labelKey: 'projects.f.backend' },
    { key: 'mobile',   labelKey: 'projects.f.mobile' },
  ];

  private _projects: ProjectData[] = [
    {
      title: 'E-Commerce Platform',
      descEs: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos, gestión de inventario y panel de administración en tiempo real.',
      descEn: 'Full e-commerce platform with shopping cart, payment gateway, inventory management and real-time admin dashboard.',
      tags: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe', 'Docker'],
      category: 'fullstack', icon: '🛒', featured: true,
    },
    {
      title: 'Dashboard Analytics',
      descEs: 'Panel de analíticas interactivo con visualizaciones en tiempo real, exportación de reportes y sistema de alertas personalizable.',
      descEn: 'Interactive analytics dashboard with real-time visualizations, report export and customizable alert system.',
      tags: ['React', 'Node.js', 'MongoDB', 'D3.js', 'WebSocket'],
      category: 'fullstack', icon: '📊', featured: true,
    },
    {
      title: 'API Gateway Microservices',
      descEs: 'Arquitectura de microservicios con API Gateway, autenticación JWT, rate limiting y documentación Swagger automatizada.',
      descEn: 'Microservices architecture with API Gateway, JWT authentication, rate limiting and automated Swagger docs.',
      tags: ['NestJS', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes'],
      category: 'backend', icon: '⚙️',
    },
    {
      title: 'Portfolio UI Kit',
      descEs: 'Librería de componentes neumórficos para Angular con Tailwind CSS, Storybook integrado y soporte para temas dinámicos.',
      descEn: 'Neumorphic component library for Angular with Tailwind CSS, integrated Storybook and dynamic theme support.',
      tags: ['Angular', 'Tailwind', 'Storybook', 'TypeScript'],
      category: 'frontend', icon: '🎨',
    },
    {
      title: 'Task Manager App',
      descEs: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y sincronización offline.',
      descEn: 'Task management app with real-time collaboration, push notifications and offline sync.',
      tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      category: 'mobile', icon: '📱',
    },
    {
      title: 'Auth Service',
      descEs: 'Servicio de autenticación con OAuth 2.0, 2FA, gestión de sesiones y auditoría completa de accesos.',
      descEn: 'Authentication service with OAuth 2.0, 2FA, session management and full access auditing.',
      tags: ['Node.js', 'PostgreSQL', 'Redis', 'JWT', 'OAuth'],
      category: 'backend', icon: '🔐',
    },
  ];

  get projects() {
    const isEn = this.lang.current() === 'en';
    return this._projects.map(p => ({ ...p, description: isEn ? p.descEn : p.descEs }));
  }

  get filteredProjects() {
    const f = this.activeFilter();
    return f === 'all' ? this.projects : this.projects.filter(p => p.category === f);
  }

  setFilter(key: string) {
    this.activeFilter.set(key);
  }
}
