import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  stats = [
    { value: '5+', label: 'Años de experiencia', icon: '🚀' },
    { value: '50+', label: 'Proyectos entregados', icon: '💼' },
    { value: '30+', label: 'Clientes satisfechos', icon: '⭐' },
    { value: '15+', label: 'Tecnologías dominadas', icon: '🛠️' },
  ];

  values = [
    { title: 'Código limpio', desc: 'Arquitecturas mantenibles y escalables.', color: 'cyber-cyan' },
    { title: 'UX primero', desc: 'Interfaces que encantan a los usuarios.', color: 'cyber-purple' },
    { title: 'Entrega ágil', desc: 'Iteraciones rápidas con calidad garantizada.', color: 'cyber-pink' },
  ];
}
