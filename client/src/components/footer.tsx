export default function Footer() {
  const openFacebook = () => {
    window.open('https://facebook.com/tacosdelospinos', '_blank');
  };

  const openInstagram = () => {
    window.open('https://instagram.com/tacosdelospinos', '_blank');
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5512345678', '_blank');
  };

  return (
    <footer className="bg-taco-black py-8 border-t-2 border-taco-red">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <i className="fas fa-pepper-hot text-taco-red text-2xl mr-3"></i>
            <span className="font-display text-xl text-white">Tacos de Los Pinos</span>
          </div>
          
          <div className="flex space-x-6">
            <button 
              onClick={openFacebook}
              className="text-gray-400 hover:text-taco-red transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </button>
            <button 
              onClick={openInstagram}
              className="text-gray-400 hover:text-taco-red transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </button>
            <button 
              onClick={openWhatsApp}
              className="text-gray-400 hover:text-taco-red transition-colors"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-gray-400">© 2024 Tacos de Los Pinos. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-500 mt-2">Los mejores tacos del barrio desde 1995</p>
        </div>
      </div>
    </footer>
  );
}
