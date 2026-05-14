import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  gradient: string;
  icon: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  activeFilter = signal('todos');

  filters = ['todos', 'frontend', 'fullstack', 'backend', 'mobile'];

  projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos, gestión de inventario y panel de administración en tiempo real.',
      tags: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe', 'Docker'],
      category: 'fullstack',
      gradient: 'from-cyan-500 to-blue-600',
      icon: '🛒',
      featured: true,
    },
    {
      title: 'Dashboard Analytics',
      description: 'Panel de analíticas interactivo con visualizaciones en tiempo real, exportación de reportes y sistema de alertas personalizable.',
      tags: ['React', 'Node.js', 'MongoDB', 'D3.js', 'WebSocket'],
      category: 'fullstack',
      gradient: 'from-purple-500 to-pink-600',
      icon: '📊',
      featured: true,
    },
    {
      title: 'API Gateway Microservices',
      description: 'Arquitectura de microservicios con API Gateway, autenticación JWT, rate limiting y documentación Swagger automatizada.',
      tags: ['NestJS', 'Redis', 'RabbitMQ', 'Docker', 'Kubernetes'],
      category: 'backend',
      gradient: 'from-green-400 to-teal-600',
      icon: '⚙️',
    },
    {
      title: 'Portfolio UI Kit',
      description: 'Librería de componentes neumórficos para Angular con Tailwind CSS, Storybook integrado y soporte para temas dinámicos.',
      tags: ['Angular', 'Tailwind', 'Storybook', 'TypeScript'],
      category: 'frontend',
      gradient: 'from-amber-400 to-orange-600',
      icon: '🎨',
    },
    {
      title: 'Task Manager App',
      description: 'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y sincronización offline.',
      tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      category: 'mobile',
      gradient: 'from-rose-500 to-red-600',
      icon: '📱',
    },
    {
      title: 'Auth Service',
      description: 'Servicio de autenticación con OAuth 2.0, 2FA, gestión de sesiones y auditoría completa de accesos.',
      tags: ['Node.js', 'PostgreSQL', 'Redis', 'JWT', 'OAuth'],
      category: 'backend',
      gradient: 'from-indigo-500 to-purple-600',
      icon: '🔐',
    },
  ];

  get filteredProjects() {
    const f = this.activeFilter();
    return f === 'todos' ? this.projects : this.projects.filter(p => p.category === f);
  }

  setFilter(filter: string) {
    this.activeFilter.set(filter);
  }
}
