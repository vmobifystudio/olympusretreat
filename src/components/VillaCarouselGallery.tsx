import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Gallery Images
import villaLiving1 from '@/assets/villa-living-1.webp';
import villaDining1 from '@/assets/villa-dining-1.webp';
import villaKitchen1 from '@/assets/villa-kitchen-1.webp';
import villaLiving2 from '@/assets/villa-living-2.webp';
import villaBedroom1 from '@/assets/villa-bedroom-1.webp';
import villaLiving3 from '@/assets/villa-living-3.jpg';
import villaOffice1 from '@/assets/villa-office-1.jpg';
import villaCloset1 from '@/assets/villa-closet-1.jpg';
import villaSpa1 from '@/assets/villa-spa-1.jpg';
import villaCinema1 from '@/assets/villa-cinema-1.jpg';

const galleryImages = [
  {
    src: villaLiving2,
    title: "Main Living Area",
    description: "Where luxury meets comfort in perfect harmony"
  },
  {
    src: villaKitchen1,
    title: "Gourmet Kitchen", 
    description: "Gaggenau appliances & premium finishes"
  },
  {
    src: villaDining1,
    title: "Elegant Dining",
    description: "Sophisticated dining experience"
  },
  {
    src: villaBedroom1,
    title: "Master Bedroom",
    description: "Luxury linens and serene ambiance"
  },
  {
    src: villaLiving3,
    title: "Open Living Space",
    description: "Seamless indoor-outdoor flow"
  },
  {
    src: villaOffice1,
    title: "Private Office",
    description: "Productive workspace design"
  },
  {
    src: villaSpa1,
    title: "Private Spa",
    description: "Personal wellness sanctuary"
  },
  {
    src: villaCinema1,
    title: "Private Cinema",
    description: "Premium entertainment experience"
  },
  {
    src: villaCloset1,
    title: "Walk-in Closet",
    description: "Luxury storage solutions"
  },
  {
    src: villaLiving1,
    title: "Living Room",
    description: "Contemporary luxury design"
  }
];

export const VillaCarouselGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const currentImage = galleryImages[currentImageIndex];

  return (
    <div className="space-y-8">
      {/* Main Image Display */}
      <div className="relative group overflow-hidden rounded-2xl shadow-luxury hover:shadow-glow transition-all duration-500 animate-scale-in">
        <img 
          src={currentImage.src} 
          alt={currentImage.title} 
          className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-4">{currentImage.title}</h3>
            <p className="text-xl text-white/90 mb-4">{currentImage.description}</p>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              <Eye className="w-5 h-5 mr-2" />
              View Details
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
          {currentImageIndex + 1} / {galleryImages.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar animate-fade-in" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {galleryImages.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
              index === currentImageIndex 
                ? 'ring-2 ring-primary ring-offset-2 ring-offset-background scale-110' 
                : 'hover:scale-105 opacity-70 hover:opacity-100'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {index === currentImageIndex && (
              <div className="absolute inset-0 bg-primary/20" />
            )}
          </button>
        ))}
      </div>

      <div className="text-center">
        <Button variant="premium" size="lg" className="shadow-luxury">
          Schedule Virtual Tour <Eye className="ml-2" />
        </Button>
      </div>
    </div>
  );
};