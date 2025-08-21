import promoImage from "@assets/Tacos_1755737289519.png";

export default function PromotionSection() {
  const orderPromotion = () => {
    window.open('https://wa.me/5512345678?text=¡Hola! Me interesa la promoción 2x1 en tacos al pastor', '_blank');
  };

  return (
    <section id="promociones" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-taco-red mb-4">
            ¡PROMOCIONES!
          </h2>
          <p className="text-xl text-gray-600">Ofertas que te van a encantar</p>
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
                <div className="relative flex justify-center">
                  <img 
                    src={promoImage} 
                    alt="Promoción 2x1 Tacos al Pastor - Pastor, Bistec, Chorizo, Suadero" 
                    className="w-full max-w-sm h-auto floating"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
