import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements AfterViewInit {
  lang = inject(LanguageService);
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  skillCategories = [
    {
      titleKey: 'skills.frontend',
      icon: '🎨',
      color: '#00d4ff',
      skills: [
        { name: 'Angular', level: 60 },
        { name: 'React', level: 68 },
        { name: 'TypeScript', level: 65 },
        { name: 'Tailwind CSS', level: 72 },
      ],
    },
    {
      titleKey: 'skills.backend',
      icon: '⚙️',
      color: '#8b5cf6',
      skills: [
        { name: 'Node.js', level: 55 },
        { name: 'Java', level: 75 },
        { name: 'Spring Boot', level: 82 },
        { name: 'GraphQL', level: 55 },
        { name: 'REST APIs', level: 78 },
      ],
    },
    {
      titleKey: 'skills.db',
      icon: '🗄️',
      color: '#10ffa0',
      skills: [
        { name: 'PostgreSQL', level: 72 },
        { name: 'MongoDB', level: 68 },
        { name: 'MySQL', level: 75 },
      ],
    },
    {
      titleKey: 'skills.devops',
      icon: '☁️',
      color: '#f472b6',
      skills: [
        { name: 'Docker', level: 65 },
        { name: 'AWS', level: 40 },
        { name: 'CI/CD', level: 58 },
        { name: 'Git & GitHub', level: 80 },
        { name: 'Linux', level: 45 },
      ],
    },
  ];

  tools = [
    'VS Code',
    'Figma',
    'Postman',
    'Jira',
    'Slack',
    'Nginx',
    'Webpack',
    'Vite',
    'GitHub Actions',
    'Kubernetes',
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const width = el.getAttribute('data-width');
            if (width) el.style.width = width + '%';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 },
    );

    setTimeout(() => {
      this.skillBars.forEach((bar) => observer.observe(bar.nativeElement));
    }, 100);
  }
}
