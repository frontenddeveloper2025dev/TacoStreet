export default function ContactSection() {
  const openWhatsApp = () => {
    window.open('https://wa.me/5512345678?text=¡Hola! Me interesan sus tacos', '_blank');
  };

  const makeCall = () => {
    window.open('tel:5512345678');
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Calle+Revolución+123,+Colonia+Centro,+Ciudad+de+México', '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-taco-red mb-4">
            VISÍTANOS
          </h2>
          <p className="text-xl text-gray-600">Estamos en el corazón del barrio</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          
          {/* Location Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-taco-red text-center shadow-lg">
            <div className="bg-taco-red rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fas fa-map-marker-alt text-white text-lg sm:text-2xl"></i>
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-taco-red mb-2">UBICACIÓN</h3>
            <p className="text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Calle Revolución 123</p>
            <p className="text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">Colonia Centro</p>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Ciudad de México</p>
            <button 
              onClick={openGoogleMaps}
              className="bg-taco-red text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 text-sm sm:text-base w-full sm:w-auto"
            >
              Ver en Maps
            </button>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-taco-yellow text-center shadow-lg">
            <div className="bg-taco-yellow rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fas fa-clock text-taco-black text-lg sm:text-2xl"></i>
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-taco-yellow mb-2">HORARIOS</h3>
            <p className="text-gray-800 mb-1 text-sm sm:text-base">Lun - Vie: 10:00 - 23:00</p>
            <p className="text-gray-800 mb-1 text-sm sm:text-base">Sábados: 10:00 - 01:00</p>
            <p className="text-gray-800 text-sm sm:text-base">Domingos: 12:00 - 22:00</p>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-taco-green text-center shadow-lg sm:col-span-2 lg:col-span-1">
            <div className="bg-taco-green rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i className="fas fa-phone text-white text-lg sm:text-2xl"></i>
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-taco-green mb-2">CONTACTO</h3>
            <p className="text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">📱 55-1234-5678</p>
            <p className="text-gray-800 mb-3 sm:mb-2 text-sm sm:text-base">📞 55-8765-4321</p>
            <button 
              onClick={openWhatsApp}
              className="bg-taco-green text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600 mt-2 text-sm sm:text-base w-full sm:w-auto"
            >
              <i className="fab fa-whatsapp mr-2"></i>WhatsApp
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-gradient-to-r from-taco-red to-red-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl sm:text-3xl text-white mb-3 sm:mb-4">¿Antojo de tacos?</h3>
            <p className="text-white mb-4 sm:mb-6 text-base sm:text-lg">¡Ordena ahora y disfruta los mejores tacos del barrio!</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button 
                onClick={makeCall}
                className="bg-white text-taco-red px-6 sm:px-8 py-3 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-gray-100 w-full sm:w-auto"
              >
                <i className="fas fa-phone mr-2"></i>Llamar Ahora
              </button>
              <button 
                onClick={openWhatsApp}
                className="border-2 border-white text-white hover:bg-white hover:text-taco-red px-6 sm:px-8 py-3 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg w-full sm:w-auto"
              >
                <i className="fab fa-whatsapp mr-2"></i>WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
