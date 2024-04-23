const sharp = require('sharp');
const fs = require('fs');

const imagesToOptimize = [
  {
    input: 'MP9_UF1_tailwind-project/src/optimizeImages.js',
    output: './src/img/cafe/pexels-pratik-gupta-2748538_optimized.webp',
  },
  {
    input: './src/img/cafe/pexels-valeriia-miller-3020919.jpg',
    output: './src/img/cafe/pexels-valeriia-miller-3020919_optimized.jpg',
  },
  {
    input: './src/img/cafe/04BBF290-02E4-4D86-8BE1-DF0C4F105472.jpeg',
    output: './src/img/cafe/04BBF290-02E4-4D86-8BE1-DF0C4F105472_optimitzed.webp',
  },
  {
    input: './src/img/cafe/pexels-karolina-grabowska-4226806.jpg',
    output:'./src/img/cafe/pexels-karolina-grabowska-4226806_optimitzed.jpg',
  }
];

// Función para optimizar una imagen
const optimizeImage = ({ input, output }) => {
  sharp(input)
    .resize({ width: 800 }) 
    .toFile(output, (err, info) => {
      if (err) {
        console.error(`Error al optimizar la imagen ${input}:`, err);
      } else {
        console.log(`Imagen optimizada y guardada correctamente: ${output}`);
        console.log(info);
      }
    });
};

imagesToOptimize.forEach(optimizeImage);