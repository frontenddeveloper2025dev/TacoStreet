import promoImage from "@assets/Tacos_1755737289519.png";

export default function PromotionSection() {
  const orderPromotion = () => {
    window.open('https://wa.me/5512345678?text=¡Hola! Me interesa la promoción 2x1 en tacos al pastor', '_blank');
  };

  return (
    <section id="promociones" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-taco-red mb-4">
            ¡PROMOCIONES!
          </h2>
          <p className="text-xl text-gray-600">Ofertas que te van a encantar</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 border-4 border-taco-red shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="bg-white text-taco-red border-2 border-taco-red rounded-xl px-6 py-2 inline-block mb-4 font-bold text-lg">
                  OFERTA ESPECIAL
                </div>
                <h3 className="font-display text-5xl md:text-7xl text-taco-red mb-4">2X1</h3>
                <h4 className="font-display text-2xl md:text-3xl text-gray-800 mb-6">TACOS AL PASTOR</h4>
                <p className="text-gray-700 text-lg mb-6">
                  Compra 2 tacos al pastor y llévate otro completamente GRATIS. ¡La mejor carne de la ciudad!
                </p>
                <button 
                  onClick={orderPromotion}
                  className="bg-taco-red text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-red-600"
                >
                  <i className="fas fa-fire mr-2"></i>¡Quiero Mi 2x1!
                </button>
              </div>
              
              <div className="flex-1 relative">
                <div className="relative flex justify-center">
                  <img 
                    src={promoImage} 
                    alt="Promoción 2x1 Tacos al Pastor - Pastor, Bistec, Chorizo, Suadero" 
                    className="w-full max-w-lg h-auto"
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
