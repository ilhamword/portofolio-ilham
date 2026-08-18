import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  plugins: [
    {
      name: 'pdf-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('.pdf')) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline; filename="CV_Muhamad_Ilham_Data.pdf"');
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
      },
    },
  },
});
