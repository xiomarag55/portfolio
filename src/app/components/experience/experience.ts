import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  lang = inject(LanguageService);

  private _jobs = [
    {
      role: 'Desarrolladora Full Stack',
      company: 'Paco Soluciones Tecnológicas',
      period: 'Jul. 2022 – Ene. 2026',
      location: 'Medellín, Colombia',
      descEs: 'Análisis, diseño e implementación de aplicaciones empresariales usando arquitectura de microservicios con Spring Boot, garantizando escalabilidad y mantenibilidad del sistema.',
      descEn: 'Analysis, design and implementation of enterprise applications using microservices architecture with Spring Boot, ensuring system scalability and maintainability.',
      achievementsEs: [
        'Diseñé e implementé la app de Supervisiones Técnicas con microservicios Spring Boot.',
        'Desarrollé y mantuve APIs RESTful para integración entre servicios backend, reduciendo tiempos de respuesta.',
        'Construí interfaces móviles en Flutter con enfoque UX/UI, optimizando el rendimiento en dispositivos operativos.',
        'Optimicé consultas SQL y procedimientos almacenados en Oracle PL/SQL mejorando el rendimiento de consultas críticas.',
        'Alineé el ciclo de desarrollo con estándares de seguridad ISO 27001.',
        'Colaboré en entornos Scrum con equipos multidisciplinarios (producto, diseño, QA).',
      ],
      achievementsEn: [
        'Designed and implemented the Technical Inspections app using Spring Boot microservices.',
        'Developed and maintained RESTful APIs for backend service integration, reducing response times.',
        'Built mobile interfaces in Flutter with a UX/UI focus, optimizing performance on operational devices.',
        'Optimized SQL queries and stored procedures in Oracle PL/SQL, improving critical query performance.',
        'Aligned the development lifecycle with ISO 27001 security standards.',
        'Collaborated in Scrum environments with multidisciplinary teams (product, design, QA).',
      ],
      tags: ['Spring Boot', 'Flutter', 'Oracle PL/SQL', 'REST APIs', 'Scrum', 'ISO 27001'],
      color: '#00d4ff',
      current: false,
    },
  ];

  get jobs() {
    const isEn = this.lang.current() === 'en';
    return this._jobs.map(j => ({
      ...j,
      description: isEn ? j.descEn : j.descEs,
      achievements: isEn ? j.achievementsEn : j.achievementsEs,
    }));
  }

  private _education = [
    {
      degreeEs: 'Ingeniería de Sistemas — En curso',
      degreeEn: 'Systems Engineering — In progress',
      institution: 'Universidad de Antioquia, Medellín',
      period: '2027',
      icon: '🎓',
    },
    {
      degreeEs: 'Tecnóloga en Análisis y Desarrollo de Sistemas de la Información',
      degreeEn: 'Technology in Information Systems Analysis and Development',
      institution: 'SENA, Medellín',
      period: '2023',
      icon: '💻',
    },
  ];

  get education() {
    const isEn = this.lang.current() === 'en';
    return this._education.map(e => ({ ...e, degree: isEn ? e.degreeEn : e.degreeEs }));
  }
}
