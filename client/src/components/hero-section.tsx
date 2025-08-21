import logoImage from "@assets/LOS PINOS_1755737259519.png";

export default function HeroSection() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Calle+Revolución+123,+Colonia+Centro,+Ciudad+de+México', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-gray-100/30"></div>
      
      {/* Background taco pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-8 h-full">
          <div className="col-span-1 space-y-8 pt-20">
            <i className="fas fa-pepper-hot text-6xl text-taco-red"></i>
            <i className="fas fa-pepper-hot text-4xl text-taco-yellow"></i>
          </div>
          <div className="col-span-1 space-y-8 pt-32">
            <i className="fas fa-pepper-hot text-5xl text-taco-green"></i>
            <i className="fas fa-pepper-hot text-6xl text-taco-red"></i>
          </div>
          <div className="col-span-1 space-y-8 pt-16">
            <i className="fas fa-pepper-hot text-4xl text-taco-yellow"></i>
            <i className="fas fa-pepper-hot text-5xl text-taco-red"></i>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl">
          {/* Logo Section */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <img 
                src={logoImage} 
                alt="Tacos de Los Pinos - Los Mejores Tacos del Barrio" 
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="lg:order-1">
            <div className="mb-8">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-taco-red leading-tight">
                TACOS
              </h1>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-gray-800 -mt-2">
                DE LOS PINOS
              </h2>
            </div>
          
          <div className="bg-taco-red/20 border-2 border-taco-red rounded-2xl p-6 mb-8 inline-block">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">🌮</div>
              <div>
                <p className="text-taco-yellow font-bold text-xl">LOS MEJORES</p>
                <p className="text-gray-800 font-display text-2xl">TACOS DEL BARRIO</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToMenu}
              className="bg-taco-red hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
            >
              <i className="fas fa-utensils mr-2"></i>Ver Menú
            </button>
            <button 
              onClick={openGoogleMaps}
              className="border-2 border-taco-yellow text-taco-yellow hover:bg-taco-yellow hover:text-taco-black px-8 py-4 rounded-xl font-bold text-lg transition-all"
            >
              <i className="fas fa-map-marker-alt mr-2"></i>Ubicación
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
