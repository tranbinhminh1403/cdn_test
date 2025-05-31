// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/main.jsx', // Entry point of your app
      name: 'MyReactApp', // Global variable name for UMD
      fileName: 'my-react-app', // Output file name (my-react-app.js)
      formats: ['umd'], // UMD format for script tag compatibility
    },
    rollupOptions: {
      // Externalize React and ReactDOM if you want to load them separately
      // external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});