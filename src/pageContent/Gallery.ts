export interface GalleryImage {
  fileName: string; // nazwa pliku z public/
  alt?: string;     // opcjonalny opis (dla dostępności)
}

// Dodaj nowe zdjęcia tutaj — wyświetlają się od lewej do prawej, z góry na dół
export const galleryImages: GalleryImage[] = [
  { fileName: 'cycebeatrice.jpg', alt: 'Beatrice' },
  { fileName: 'umineko3.jpg', alt: 'Umineko' },
  { fileName: 'uminekocg.jpg', alt: 'Umineko CG' },
  { fileName: 'higurashi2.jpg', alt: 'Higurashi' },
  { fileName: 'higurashicg.webp', alt: 'Higurashi CG' },
];
