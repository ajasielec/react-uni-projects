import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-uni-projects/', // Ustawienie bazy, jeśli publikujesz na GitHub Pages
});
