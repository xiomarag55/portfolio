import { writeFileSync } from 'fs';

const isDev = process.argv.includes('--dev');

const required = [
  'NG_APP_EMAILJS_SERVICE_ID',
  'NG_APP_EMAILJS_TEMPLATE_ADMIN_ID',
  'NG_APP_EMAILJS_TEMPLATE_USER_ID',
  'NG_APP_EMAILJS_PUBLIC_KEY',
  'NG_APP_EMAILJS_ACCESS_TOKEN',
];

const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.error(`❌ Variables de entorno faltantes: ${missing.join(', ')}`);
  process.exit(1);
}

const targetPath = isDev
  ? './src/environments/environment.ts'
  : './src/environments/environment.prod.ts';

const content = `export const environment = {
  production: ${!isDev},
  emailJsServiceId: '${process.env.NG_APP_EMAILJS_SERVICE_ID}',
  emailJsTemplateAdminId: '${process.env.NG_APP_EMAILJS_TEMPLATE_ADMIN_ID}',
  emailJsTemplateUserId: '${process.env.NG_APP_EMAILJS_TEMPLATE_USER_ID}',
  emailJsPublicKey: '${process.env.NG_APP_EMAILJS_PUBLIC_KEY}',
  emailJsAccessToken: '${process.env.NG_APP_EMAILJS_ACCESS_TOKEN}',
};
`;

writeFileSync(targetPath, content);
console.log(`✓ ${targetPath} generado desde variables de entorno`);
