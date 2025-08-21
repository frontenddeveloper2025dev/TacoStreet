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
    <section id="contacto" className="py-20 bg-street-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-taco-red neon-glow mb-4">
            VISÍTANOS
          </h2>
          <p className="text-xl text-gray-300">Estamos en el corazón del barrio</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Location Card */}
          <div className="bg-taco-black rounded-2xl p-6 border-2 border-taco-red card-hover text-center">
            <div className="bg-taco-red rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-map-marker-alt text-white text-2xl"></i>
            </div>
            <h3 className="font-display text-2xl text-taco-red mb-2">UBICACIÓN</h3>
            <p className="text-white mb-2">Calle Revolución 123</p>
            <p className="text-white mb-2">Colonia Centro</p>
            <p className="text-gray-400 mb-4">Ciudad de México</p>
            <button 
              onClick={openGoogleMaps}
              className="bg-taco-red text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition-colors"
            >
              Ver en Maps
            </button>
          </div>

          {/* Hours Card */}
          <div className="bg-taco-black rounded-2xl p-6 border-2 border-taco-yellow card-hover text-center">
            <div className="bg-taco-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-clock text-taco-black text-2xl"></i>
            </div>
            <h3 className="font-display text-2xl text-taco-yellow mb-2">HORARIOS</h3>
            <p className="text-white mb-1">Lun - Vie: 10:00 - 23:00</p>
            <p className="text-white mb-1">Sábados: 10:00 - 01:00</p>
            <p className="text-white">Domingos: 12:00 - 22:00</p>
          </div>

          {/* Contact Card */}
          <div className="bg-taco-black rounded-2xl p-6 border-2 border-taco-green card-hover text-center">
            <div className="bg-taco-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-phone text-white text-2xl"></i>
            </div>
            <h3 className="font-display text-2xl text-taco-green mb-2">CONTACTO</h3>
            <p className="text-white mb-2">📱 55-1234-5678</p>
            <p className="text-white mb-2">📞 55-8765-4321</p>
            <button 
              onClick={openWhatsApp}
              className="bg-taco-green text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600 transition-colors mt-2"
            >
              <i className="fab fa-whatsapp mr-2"></i>WhatsApp
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-taco-red to-red-600 rounded-2xl p-8 max-w-2xl mx-auto card-hover">
            <h3 className="font-display text-3xl text-white mb-4">¿Antojo de tacos?</h3>
            <p className="text-white mb-6 text-lg">¡Ordena ahora y disfruta los mejores tacos del barrio!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={makeCall}
                className="bg-white text-taco-red px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                <i className="fas fa-phone mr-2"></i>Llamar Ahora
              </button>
              <button 
                onClick={openWhatsApp}
                className="border-2 border-white text-white hover:bg-white hover:text-taco-red px-8 py-3 rounded-xl font-bold text-lg transition-colors"
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
