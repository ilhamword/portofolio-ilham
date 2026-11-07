import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  server: {
    watch: {
      ignored: ['**/gambar/**', '**/*.pdf', '**/dist/**']
    }
  },
  plugins: [
    {
      name: 'pdf-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('.pdf')) {
            const filename = req.url.split('/').pop()?.split('?')[0] || 'document.pdf';
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `inline; filename="${filename}"`);
          }
          next();
        });
      },
    },
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bbcaStock: resolve(__dirname, 'projects/bbca-stock.html'),
        competencyPln: resolve(__dirname, 'projects/competency-pln.html'),
        umpropInti: resolve(__dirname, 'projects/umprop-inti.html'),
        ekycFraudDetection: resolve(__dirname, 'projects/ekyc-fraud-detection.html'),
      },
    },
  },
});
