import { useState } from "react";
import { Link } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b-2 border-taco-red shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="font-display text-2xl text-taco-red">
            <i className="fas fa-pepper-hot mr-2"></i>
            Los Pinos
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('menu')} 
              className="text-gray-800 hover:text-taco-red transition-colors font-medium"
            >
              Menú
            </button>
            <button 
              onClick={() => scrollToSection('promociones')} 
              className="text-gray-800 hover:text-taco-red transition-colors font-medium"
            >
              Promociones
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="text-gray-800 hover:text-taco-red transition-colors font-medium"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-taco-red transition-colors"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

          {/* Order Button */}
          <button 
            onClick={() => window.open('tel:5512345678')}
            className="hidden md:block bg-taco-red hover:bg-red-600 px-4 py-2 rounded-lg font-bold transition-colors"
          >
            <i className="fas fa-phone mr-2"></i>Ordenar
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-300">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('menu')} 
                className="text-left text-gray-800 hover:text-taco-red transition-colors font-medium"
              >
                Menú
              </button>
              <button 
                onClick={() => scrollToSection('promociones')} 
                className="text-left text-gray-800 hover:text-taco-red transition-colors font-medium"
              >
                Promociones
              </button>
              <button 
                onClick={() => scrollToSection('contacto')} 
                className="text-left text-gray-800 hover:text-taco-red transition-colors font-medium"
              >
                Contacto
              </button>
              <button 
                onClick={() => window.open('tel:5512345678')}
                className="bg-taco-red hover:bg-red-600 px-4 py-2 rounded-lg font-bold transition-colors text-left"
              >
                <i className="fas fa-phone mr-2"></i>Ordenar
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
