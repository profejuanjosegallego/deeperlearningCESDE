 function descargarPDF(fuente) {
    const urls = {
      docencia: '../docs/articulocomohacerproyectto.pdf',
      metodologias: '../docs/metodologiasactivastic.pdf'
    };
    if (urls[fuente]) {
      window.open(urls[fuente], '_blank');
    } else {
      alert('Archivo no disponible.');
    }
  }