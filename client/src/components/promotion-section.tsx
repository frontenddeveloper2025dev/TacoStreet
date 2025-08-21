export default function PromotionSection() {
  const orderPromotion = () => {
    window.open('https://wa.me/5512345678?text=¡Hola! Me interesa la promoción 2x1 en tacos al pastor', '_blank');
  };

  return (
    <section id="promociones" className="py-20 bg-street-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-taco-red neon-glow mb-4">
            ¡PROMOCIONES!
          </h2>
          <p className="text-xl text-gray-300">Ofertas que te van a encantar</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-taco-red to-red-600 rounded-3xl p-8 card-hover border-4 border-taco-yellow">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="bg-white text-taco-red rounded-full px-6 py-2 inline-block mb-4 font-bold text-lg">
                  OFERTA ESPECIAL
                </div>
                <h3 className="font-display text-5xl md:text-7xl text-white mb-4">2X1</h3>
                <h4 className="font-display text-2xl md:text-3xl text-taco-yellow mb-6">TACOS AL PASTOR</h4>
                <p className="text-white text-lg mb-6">
                  Compra 2 tacos al pastor y llévate otro completamente GRATIS. ¡La mejor carne de la ciudad!
                </p>
                <button 
                  onClick={orderPromotion}
                  className="bg-white text-taco-red px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  <i className="fas fa-fire mr-2"></i>¡Quiero Mi 2x1!
                </button>
              </div>
              
              <div className="flex-1 relative">
                <div className="relative">
                  <div className="w-full max-w-md mx-auto bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-8 floating">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🌮</div>
                      <div className="text-2xl font-bold text-white mb-2">AL PASTOR</div>
                      <div className="text-orange-200">Con piña y cilantro</div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-taco-yellow text-taco-black rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl">
                    🔥
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
