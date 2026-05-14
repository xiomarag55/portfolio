import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  activeSection = signal('home');

  navLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Contacto', href: '#contact' },
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  scrollTo(href: string) {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen.set(false);
  }
}
