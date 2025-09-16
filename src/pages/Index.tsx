import { ArrowRight, Leaf, Home, Sparkles, MapPin, Phone, Mail, Waves, TreePine, Shield, Zap, Eye, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroVilla from '@/assets/hero-villa.jpg';
import villaInterior from '@/assets/villa-interior.jpg';
import wellnessSpa from '@/assets/wellness-spa.jpg';
import sustainableEstate from '@/assets/sustainable-estate.jpg';
// New section images
import smartHomeTech from '@/assets/smart-home-tech.jpg';
import buildingAutomation from '@/assets/building-automation.jpg';
import premiumBrands from '@/assets/premium-brands.jpg';
import longevityCenter from '@/assets/longevity-center.jpg';
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
import { generateBrochurePDF } from '@/utils/pdfGenerator';

const Index = () => {
  const features = [
    {
      icon: Home,
      title: "4,000 Sq Ft Luxury Villas",
      description: "Spacious, thoughtfully designed homes with premium finishes and smart automation"
    },
    {
      icon: Leaf,
      title: "Wellness & Longevity Focus",
      description: "Biohacking zones, meditation spaces, and health-optimized living environments"
    },
    {
      icon: Waves,
      title: "Water-Surrounded Sanctuary",
      description: "12-acre estate surrounded by water on three sides for ultimate tranquility"
    },
    {
      icon: TreePine,
      title: "Preserved Natural Beauty",
      description: "Existing trees and native flora maintained for authentic nature connection"
    },
    {
      icon: Zap,
      title: "Smart IoT Integration",
      description: "Cutting-edge automation systems for seamless, customizable living"
    },
    {
      icon: Shield,
      title: "Sustainable Living",
      description: "Eco-friendly materials, water recycling, and organic gardens"
    }
  ];

  const amenities = [
    "Smart kitchens with IoT-enabled appliances",
    "Private pools and hydrotherapy options",
    "Dedicated fitness & biohacking zones",
    "Infrared therapy and oxygen enrichment",
    "Organic gardens and sustainability systems",
    "Saunas and wellness facilities",
    "Premium security and privacy",
    "Close proximity to Pune (30km)"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroVilla})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white py-20">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 animate-fade-in-up leading-tight">
            Luxury Villa Estate
            <span className="block text-luxury font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-4 sm:mt-6 font-medium">
              Where Wellness Meets Elegance
            </span>
          </h1>
          <p className="font-inter text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 max-w-4xl mx-auto opacity-90 animate-fade-in-up leading-relaxed font-light px-4">
            50 exclusive villas on 12 pristine acres, surrounded by water and nature, 
            designed for longevity, health, and sustainable luxury living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-scale-in px-4">
            <Button 
              size="lg" 
              variant="luxury" 
              className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-inter w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Visit <ArrowRight className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="hero" 
              className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 font-inter w-full sm:w-auto"
              onClick={generateBrochurePDF}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gradient-luxury">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8">
              A Sanctuary for Rejuvenation
            </h2>
            <p className="font-inter text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light px-4">
              Nestled just 30 km from Pune city, this exclusive estate offers an unparalleled living 
              experience with unpolluted air, lush greenery, and towering trees. Our vision prioritizes 
              cellular health, mental clarity, and resilience in harmony with nature.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-luxury transition-all duration-300 transform hover:scale-105 animate-fade-in">
                <CardContent className="p-6 sm:p-8 text-center">
                  <feature.icon className="w-12 sm:w-14 h-12 sm:h-14 text-primary mx-auto mb-4 sm:mb-6" />
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">{feature.title}</h3>
                  <p className="font-inter text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Comforts Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-10">
              Cutting-Edge Technology & Modern Comforts
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Each villa features smart automation systems integrated with IoT technology, 
              providing residents with a seamless, customizable living experience designed 
              for optimal health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative animate-scale-in">
              <img 
                src={smartHomeTech} 
                alt="Cutting-edge smart home technology and IoT systems" 
                className="rounded-xl shadow-luxury w-full h-auto"
              />
            </div>
            
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-luxury/20">
                    <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-foreground font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
              <Button variant="premium" size="lg" className="shadow-luxury">
                Explore Smart Features <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* Building Automation Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h3 className="font-playfair text-4xl font-bold text-foreground mb-8">Building Automation Systems</h3>
              <p className="font-inter text-xl text-muted-foreground mb-10 leading-relaxed font-light">
                Our state-of-the-art building automation ensures maximum security, efficiency, and convenience through intelligent system integration.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-5 bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-luxury/20">
                  <Shield className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-inter font-bold text-foreground mb-3 text-lg">Automated Security System</h4>
                    <p className="font-inter text-muted-foreground leading-relaxed">Sophisticated security with biometric access controls, facial recognition, and fingerprint scanning</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5 bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-luxury/20">
                  <Zap className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-inter font-bold text-foreground mb-3 text-lg">Smart Climate & Lighting</h4>
                    <p className="font-inter text-muted-foreground leading-relaxed">Automated HVAC and lighting systems that adapt to your preferences and optimize energy efficiency</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-5 bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-luxury/20">
                  <Home className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-inter font-bold text-foreground mb-3 text-lg">Emergency Response Automation</h4>
                    <p className="font-inter text-muted-foreground leading-relaxed">Integrated fire suppression, emergency protocols, and automated safety systems</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <img 
                src={buildingAutomation} 
                alt="Building automation control systems and monitoring" 
                className="rounded-xl shadow-luxury w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Brand Partnerships Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-10">
              Premium Brand Partnerships
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              We've partnered with the world's most prestigious luxury brands to ensure every detail 
              of your villa meets the highest standards of elegance and sophistication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative animate-scale-in">
              <img 
                src={premiumBrands} 
                alt="Premium luxury brand partnerships and high-end products" 
                className="rounded-xl shadow-luxury w-full h-auto"
              />
            </div>
            
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-card hover:shadow-luxury transition-all duration-300 border-luxury/20 hover:border-luxury/40 group">
                  <CardContent className="p-8 text-center">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-playfair font-bold text-foreground mb-3 text-xl">Smart Home Tech</h4>
                    <p className="text-luxury text-2xl font-bold mb-2">Loytec</p>
                    <p className="font-inter text-muted-foreground">Advanced building automation systems</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-luxury transition-all duration-300 border-luxury/20 hover:border-luxury/40 group">
                  <CardContent className="p-8 text-center">
                    <Home className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-playfair font-bold text-foreground mb-3 text-xl">Kitchens</h4>
                    <p className="text-luxury text-2xl font-bold mb-2">Gaggenau</p>
                    <p className="font-inter text-muted-foreground">Premium German kitchen appliances</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-luxury transition-all duration-300 border-luxury/20 hover:border-luxury/40 group">
                  <CardContent className="p-8 text-center">
                    <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-playfair font-bold text-foreground mb-3 text-xl">Crystal Lighting</h4>
                    <p className="text-luxury text-2xl font-bold mb-2">Lalique</p>
                    <p className="font-inter text-muted-foreground">Exquisite crystal lighting fixtures</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card hover:shadow-luxury transition-all duration-300 border-luxury/20 hover:border-luxury/40 group">
                  <CardContent className="p-8 text-center">
                    <Home className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="font-playfair font-bold text-foreground mb-3 text-xl">Luxury Linens</h4>
                    <p className="text-luxury text-2xl font-bold mb-2">Frette</p>
                    <p className="font-inter text-muted-foreground">Italian luxury bedding and linens</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-10">
                <Button variant="premium" size="lg" className="shadow-luxury w-full">
                  View All Brand Partners <ExternalLink className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Longevity & Wellness Section */}
      <section className="py-20 bg-gradient-wellness">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-10">
              Focus on Healthy Living & Longevity
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              Our villas incorporate eco-friendly construction materials and intelligent design 
              principles, promoting optimal indoor air quality, natural light, and ventilation 
              to support long-term health and vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-10 mb-10 border border-luxury/30 shadow-luxury">
                <h3 className="font-playfair text-3xl font-bold text-foreground mb-6">Cutting-Edge Wellness Technologies</h3>
                <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-8">
                  Experience a one-of-a-kind menu of cutting-edge therapies designed to meet specific health, 
                  fitness, and aesthetic goals. World-renowned modalities once reserved only for elite athletes 
                  and celebrities, now available in your private sanctuary.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <h4 className="font-bold text-primary text-lg mb-2">Cryotherapy</h4>
                    <p className="text-sm text-muted-foreground">Whole body cold therapy</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <h4 className="font-bold text-primary text-lg mb-2">IV Therapy</h4>
                    <p className="text-sm text-muted-foreground">Personalized nutrient infusions</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <h4 className="font-bold text-primary text-lg mb-2">Red Light</h4>
                    <p className="text-sm text-muted-foreground">Cellular regeneration therapy</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <h4 className="font-bold text-primary text-lg mb-2">EMS Training</h4>
                    <p className="text-sm text-muted-foreground">Electrical muscle stimulation</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-5 bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-luxury/20">
                  <Sparkles className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-inter font-bold text-foreground mb-3 text-lg">Biohacking Zones</h4>
                    <p className="font-inter text-muted-foreground leading-relaxed">Dedicated areas for infrared therapy, oxygen enrichment, and personalized wellness practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-5 bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-luxury/20">
                  <Waves className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-inter font-bold text-foreground mb-3 text-lg">Hydrotherapy Suites</h4>
                    <p className="font-inter text-muted-foreground leading-relaxed">Private pools, saunas, and water-based wellness features for relaxation and detoxification</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button variant="wellness" size="lg" className="shadow-card font-inter w-full">
                  Explore Wellness Programs <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img 
                src={longevityCenter} 
                alt="Modern longevity and wellness center with biohacking equipment" 
                className="rounded-2xl shadow-luxury w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="font-playfair text-2xl font-bold mb-2">Longevity Center</h4>
                <p className="text-white/90">State-of-the-art wellness technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-10">
              Sustainable & Green Living
            </h2>
            <p className="font-inter text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              The estate's landscape preserves existing trees and native flora, ensuring a close 
              connection with nature. Organic gardens and water recycling systems promote 
              sustainability and self-sufficiency.
            </p>
          </div>

          <div className="relative animate-scale-in mb-16">
            <img 
              src={sustainableEstate} 
              alt="Sustainable Estate" 
              className="rounded-lg shadow-luxury w-full h-auto max-h-96 object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-luxury transition-all duration-300 animate-fade-in hover:border-primary/20">
              <CardContent className="p-10 text-center">
                <TreePine className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">Preserved Ecosystem</h3>
                <p className="font-inter text-muted-foreground leading-relaxed">Existing trees and native flora maintained for authentic nature connection</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-luxury transition-all duration-300 animate-fade-in hover:border-primary/20">
              <CardContent className="p-10 text-center">
                <Leaf className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">Organic Living</h3>
                <p className="font-inter text-muted-foreground leading-relaxed">Organic gardens and sustainable food production systems</p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-luxury transition-all duration-300 animate-fade-in hover:border-primary/20">
              <CardContent className="p-10 text-center">
                <Waves className="w-14 h-14 text-primary mx-auto mb-6" />
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">Water Conservation</h3>
                <p className="font-inter text-muted-foreground leading-relaxed">Advanced water recycling and conservation systems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="container mx-auto px-6 text-center">
            <div className="animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-10">
              Prime Location, Serene Environment
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-10">
              <MapPin className="w-7 h-7 text-primary" />
              <span className="font-inter text-2xl text-foreground font-semibold">Just 30 km from Pune City</span>
            </div>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              Experience the perfect balance of accessibility and tranquility. Close enough to the city 
              for convenience, yet far enough to enjoy unpolluted air and pristine natural surroundings.
            </p>
            <Button variant="premium" size="lg" className="shadow-luxury font-inter">
              View Location Details <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Villa Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-10">Villa Gallery</h2>
            <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Step inside our meticulously designed villas where every room tells a story of luxury, 
              comfort, and sophisticated living. Each space has been curated to perfection.
            </p>
          </div>

          {/* Featured Gallery Item */}
          <div className="mb-16 animate-scale-in">
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-luxury hover:shadow-glow transition-all duration-500">
              <img 
                src={villaLiving2} 
                alt="Spectacular villa living space with panoramic views" 
                className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-4">Main Living Area</h3>
                  <p className="text-xl text-white/90 mb-4">Where luxury meets comfort in perfect harmony</p>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                    <Eye className="w-5 h-5 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="space-y-12">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
              <div className="md:col-span-2">
                <div className="group cursor-pointer overflow-hidden rounded-xl shadow-luxury hover:shadow-glow transition-all duration-500 h-80">
                  <img 
                    src={villaKitchen1} 
                    alt="Gourmet kitchen with Gaggenau appliances" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="font-playfair text-2xl font-bold mb-2">Gourmet Kitchen</h4>
                      <p className="text-white/90">Gaggenau appliances & premium finishes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="group cursor-pointer overflow-hidden rounded-xl shadow-luxury hover:shadow-glow transition-all duration-500 h-36">
                  <img 
                    src={villaDining1} 
                    alt="Elegant dining area" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 text-white">
                      <h5 className="font-bold">Dining Area</h5>
                    </div>
                  </div>
                </div>
                <div className="group cursor-pointer overflow-hidden rounded-xl shadow-luxury hover:shadow-glow transition-all duration-500 h-36">
                  <img 
                    src={villaOffice1} 
                    alt="Private office space" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 text-white">
                      <h5 className="font-bold">Private Office</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in">
              <div className="group cursor-pointer overflow-hidden rounded-xl shadow-luxury hover:shadow-glow transition-all duration-500 h-64">
                <img 
                  src={villaBedroom1} 
                  alt="Master bedroom with luxury linens" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h5 className="font-bold">Master Bedroom</h5>
                    <p className="text-sm text-white/90">Frette linens</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer overflow-hidden rounded-xl shadow-luxury hover:shadow-glow transition-all duration-500 h-64">
                <img 
                  src={villaCloset1} 
                  alt="Walk-in closet" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h5 className="font-bold">Walk-in Closet</h5>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer overflow-hidden rounded-xl shadow-luxury hover:shadow-glow transition-all duration-500 h-64">
                <img 
                  src={villaSpa1} 
                  alt="Private spa area" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h5 className="font-bold">Private Spa</h5>
                    <p className="text-sm text-white/90">Wellness sanctuary</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer overflow-hidden rounded-xl shadow-luxury hover:shadow-glow transition-all duration-500 h-64">
                <img 
                  src={villaCinema1} 
                  alt="Private cinema" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h5 className="font-bold">Private Cinema</h5>
                    <p className="text-sm text-white/90">Premium entertainment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 - Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              <div className="group cursor-pointer overflow-hidden rounded-xl shadow-luxury hover:shadow-glow transition-all duration-500 h-80">
                <img 
                  src={villaLiving3} 
                  alt="Open concept living space" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="font-playfair text-2xl font-bold mb-2">Open Living Space</h4>
                    <p className="text-white/90">Seamless indoor-outdoor flow</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer overflow-hidden rounded-xl shadow-luxury hover:shadow-glow transition-all duration-500 h-80">
                <img 
                  src={villaLiving1} 
                  alt="Luxury living room" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="font-playfair text-2xl font-bold mb-2">Living Room</h4>
                    <p className="text-white/90">Contemporary luxury design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button variant="premium" size="lg" className="shadow-luxury">
              Schedule Virtual Tour <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10">
              Begin Your Wellness Journey
            </h2>
            <p className="font-inter text-lg sm:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Discover a lifestyle that supports cellular health, mental clarity, and resilience. 
              Contact us to schedule a private viewing of your future sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            <div className="animate-fade-in">
              <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-8 sm:mb-10">Get in Touch</h3>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-4 sm:space-x-5">
                  <Phone className="w-6 sm:w-7 h-6 sm:h-7 text-luxury flex-shrink-0" />
                  <div>
                    <p className="font-inter font-semibold text-lg">Call Us</p>
                    <p className="font-inter opacity-90 text-lg">+91 989 578 7491</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 sm:space-x-5">
                  <Mail className="w-6 sm:w-7 h-6 sm:h-7 text-luxury flex-shrink-0" />
                  <div>
                    <p className="font-inter font-semibold text-lg">Email</p>
                    <p className="font-inter opacity-90 text-lg">info@everluxeglobal.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 sm:space-x-5">
                  <MapPin className="w-6 sm:w-7 h-6 sm:h-7 text-luxury flex-shrink-0" />
                  <div>
                    <p className="font-inter font-semibold text-lg">Location</p>
                    <p className="font-inter opacity-90 text-lg">30 km from Pune, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-scale-in">
                <Card className="shadow-luxury">
                  <CardContent className="p-8 sm:p-10">
                    <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-foreground mb-6 sm:mb-8">Request Information</h3>
                    <div className="space-y-4 sm:space-y-6">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="w-full p-4 sm:p-5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm sm:text-base"
                      />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-4 sm:p-5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm sm:text-base"
                      />
                      <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full p-4 sm:p-5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent font-inter text-sm sm:text-base"
                      />
                      <textarea 
                        placeholder="Tell us about your interests" 
                        rows={4}
                        className="w-full p-4 sm:p-5 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none font-inter text-sm sm:text-base"
                      />
                      <Button variant="luxury" size="lg" className="w-full shadow-luxury font-inter">
                        Submit Inquiry <ArrowRight className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-playfair text-3xl font-bold mb-6 text-luxury">Luxury Villa Estate</h3>
          <p className="font-inter opacity-80 mb-8 text-lg">Where Wellness Meets Elegance</p>
          <p className="font-inter text-sm opacity-60">
            © 2024 Luxury Villa Estate. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
