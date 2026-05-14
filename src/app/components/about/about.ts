import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  lang = inject(LanguageService);

  stats = [
    { value: '3+', labelKey: 'about.stat0', icon: '🚀' },
    { value: '3+', labelKey: 'about.stat1', icon: '💼' },
    { value: '2+', labelKey: 'about.stat2', icon: '⭐' },
    { value: '10+', labelKey: 'about.stat3', icon: '🛠️' },
  ];

  values = [
    { titleKey: 'about.val0_title', descKey: 'about.val0_desc', color: 'cyber-cyan' },
    { titleKey: 'about.val1_title', descKey: 'about.val1_desc', color: 'cyber-purple' },
    { titleKey: 'about.val2_title', descKey: 'about.val2_desc', color: 'cyber-pink' },
  ];
}
