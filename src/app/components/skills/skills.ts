import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements AfterViewInit {
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      color: '#00d4ff',
      skills: [
        { name: 'Angular', level: 95 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 92 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'RxJS', level: 80 },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: '#8b5cf6',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'NestJS', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'GraphQL', level: 75 },
        { name: 'REST APIs', level: 95 },
      ]
    },
    {
      title: 'Base de Datos',
      icon: '🗄️',
      color: '#10ffa0',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 70 },
        { name: 'MySQL', level: 85 },
        { name: 'Prisma ORM', level: 80 },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      color: '#f472b6',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 72 },
        { name: 'CI/CD', level: 78 },
        { name: 'Git & GitHub', level: 93 },
        { name: 'Linux', level: 75 },
      ]
    },
  ];

  tools = [
    'VS Code', 'Figma', 'Postman', 'Jira', 'Slack',
    'Nginx', 'Jest', 'Cypress', 'Webpack', 'Vite',
    'GitHub Actions', 'Kubernetes', 'Terraform',
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const width = el.getAttribute('data-width');
            if (width) el.style.width = width + '%';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      this.skillBars.forEach(bar => observer.observe(bar.nativeElement));
    }, 100);
  }
}
