import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { environment } from '../../../environments/environment';

const {
  emailJsServiceId: serviceId,
  emailJsPublicKey: publicKey,
  emailJsAccessToken: accessToken,
  emailJsTemplateAdminId: templateAdminId,
  emailJsTemplateUserId: templateUserId,
} = environment;

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  lang = inject(LanguageService);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  isSending = signal(false);
  isSent = signal(false);
  isError = signal(false);

  socialIcons = [
    {
      label: 'GitHub',
      href: 'https://github.com/xiomarag55',
      svg: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/xiomara-giraldo-p%C3%A9rez-a17713166/',
      svg: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    },
  ];

  contactInfo = [
    {
      icon: '✉️',
      labelKey: 'contact.lbl_email',
      value: 'xiomaragiraldo221@gmail.com',
      valueKey: null,
      href: 'mailto:xiomaragiraldo221@gmail.com',
    },
    {
      icon: '💼',
      labelKey: 'contact.lbl_linkedin',
      value: 'linkedin.com/in/xiomara-giraldo-pérez',
      valueKey: null,
      href: 'https://www.linkedin.com/in/xiomara-giraldo-p%C3%A9rez-a17713166/',
    },
    {
      icon: '📍',
      labelKey: 'contact.lbl_location',
      value: null,
      valueKey: 'contact.val_location',
      href: null,
    },
    {
      icon: '⏰',
      labelKey: 'contact.lbl_avail',
      value: null,
      valueKey: 'contact.val_avail',
      href: null,
    },
  ];

  private async sendEmail(templateId: string, params: Record<string, string>) {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': accessToken,
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: params,
      }),
    });
    if (!res.ok) throw new Error(`EmailJS ${res.status}`);
  }

  async onSubmit() {
    this.isSending.set(true);
    this.isError.set(false);

    const params = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message,
    };

    try {
      await Promise.all([
        this.sendEmail(templateAdminId, params),
        this.sendEmail(templateUserId, params),
      ]);
      this.isSent.set(true);
      this.formData = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => this.isSent.set(false), 5000);
    } catch {
      this.isError.set(true);
      setTimeout(() => this.isError.set(false), 5000);
    } finally {
      this.isSending.set(false);
    }
  }
}
