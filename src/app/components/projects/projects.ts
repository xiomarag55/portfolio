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
  github: string;
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
    { key: 'all', labelKey: 'projects.f.all' },
    { key: 'fullstack', labelKey: 'projects.f.fullstack' },
    { key: 'backend', labelKey: 'projects.f.backend' },
  ];

  private _projects: ProjectData[] = [
    {
      title: 'Karmen',
      descEs:
        'Sistema web de gestión contable inteligente para pequeñas empresas. Automatiza la extracción de datos de facturas mediante OCR + IA, genera asientos contables en doble partida de forma automática y produce reportes financieros con análisis de IVA e indicadores clave.',
      descEn:
        'Intelligent accounting management web system for small businesses. Automates invoice data extraction via OCR + AI, automatically generates double-entry bookkeeping records, and produces financial reports with VAT analysis and key indicators.',
      tags: ['React', 'Spring Boot', 'PostgreSQL', 'Docker', 'OCR', 'IA'],
      category: 'fullstack',
      icon: '🧾',
      github: 'https://github.com/Karmen-Project/karmen-app',
      featured: true,
    },
    {
      title: 'Task Manager',
      descEs:
        'Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y sincronización offline.',
      descEn:
        'Task management application with real-time collaboration, push notifications, and offline sync.',
      tags: ['Angular', 'Spring Boot', 'JWT', 'Spring Security', 'Supabase'],
      category: 'fullstack',
      icon: '✅',
      github: 'https://github.com/xiomarag55/task-manager',
    },
    {
      title: 'Breed Cats',
      descEs:
        'Aplicación full-stack que muestra una enciclopedia de razas de gatos con búsqueda y paginación, consumiendo TheCatAPI.',
      descEn:
        'Full-stack application that displays a searchable, paginated encyclopedia of cat breeds using TheCatAPI.',
      tags: ['React', 'Spring Boot', 'JWT', 'Spring Security', 'WebFlux', 'Docker'],
      category: 'fullstack',
      icon: '🐱',
      github: 'https://github.com/xiomarag55/catBreed',
    },
    {
      title: 'Procesamiento de Nómina',
      descEs:
        'POC de procesamiento de novedades de nómina (horas extra) diseñado para escalar a producción real.',
      descEn:
        'POC for payroll novelty processing (overtime hours) designed to scale to real production environments.',
      tags: ['Spring Boot', 'Spring Batch', 'Flyway', 'Docker'],
      category: 'backend',
      icon: '💼',
      github: 'https://github.com/xiomarag55/nomina-poc',
    },
  ];

  get projects() {
    const isEn = this.lang.current() === 'en';
    return this._projects.map((p) => ({ ...p, description: isEn ? p.descEn : p.descEs }));
  }

  get filteredProjects() {
    const f = this.activeFilter();
    return f === 'all' ? this.projects : this.projects.filter((p) => p.category === f);
  }

  setFilter(key: string) {
    this.activeFilter.set(key);
  }
}
