import menuImage from "@assets/carta_1755737282272.png";

export default function MenuSection() {
  const menuCategories = [
    {
      title: "TACOS",
      icon: "fas fa-pepper-hot",
      color: "taco-red",
      items: [
        { name: "Pastor", description: "Carne marinada con piña", price: "$18" },
        { name: "Bistec", description: "Carne de res jugosa", price: "$16" },
        { name: "Chorizo", description: "Chorizo artesanal", price: "$16" },
        { name: "Suadero", description: "Carne suave y jugosa", price: "$18" },
      ]
    },
    {
      title: "TORTAS",
      icon: "fas fa-hamburger",
      color: "taco-green",
      items: [
        { name: "Torta Ahogada", description: "Con salsa roja picante", price: "$45" },
        { name: "Torta de Pastor", description: "Con toda la garnición", price: "$50" },
        { name: "Torta Cubana", description: "Con múltiples carnes", price: "$65" },
        { name: "Torta de Chorizo", description: "Chorizo artesanal", price: "$48" },
      ]
    },
    {
      title: "BEBIDAS",
      icon: "fas fa-glass-whiskey",
      color: "taco-yellow",
      items: [
        { name: "Agua Fresca", description: "Horchata, jamaica, tamarindo", price: "$25" },
        { name: "Refresco", description: "Coca-Cola, Sprite, Fanta", price: "$20" },
        { name: "Cerveza", description: "Corona, Tecate, Modelo", price: "$35" },
        { name: "Jugo Natural", description: "Naranja, piña, guayaba", price: "$30" },
      ]
    },
    {
      title: "EXTRAS",
      icon: "fas fa-plus",
      color: "orange-500",
      items: [
        { name: "Guacamole", description: "Aguacate fresco", price: "$15" },
        { name: "Quesadilla", description: "Con queso Oaxaca", price: "$35" },
        { name: "Frijoles Charros", description: "Con chorizo y cilantro", price: "$25" },
        { name: "Salsa Extra", description: "Verde o roja", price: "$5" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl text-taco-red mb-4">
            MENÚ
          </h2>
          <p className="text-xl text-gray-600">Sabores auténticos de la calle</p>
        </div>

        {/* Menu Image */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <img 
            src={menuImage} 
            alt="Menú de Tacos - Tacos, Tortas, Bebidas y Extras" 
            className="w-full max-w-sm sm:max-w-xl lg:max-w-2xl h-auto rounded-2xl sm:rounded-3xl border-3 sm:border-4 border-taco-red"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <div key={index} className={`bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-${category.color}`}>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`bg-${category.color} rounded-full p-2 sm:p-3 mr-3 sm:mr-4`}>
                  <i className={`${category.icon} text-white text-lg sm:text-xl`}></i>
                </div>
                <h3 className={`font-display text-2xl sm:text-3xl text-${category.color}`}>{category.title}</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 rounded-lg border border-gray-300 gap-2 sm:gap-0">
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-sm sm:text-base">{item.name}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{item.description}</p>
                    </div>
                    <span className="text-taco-red font-bold text-base sm:text-lg self-start sm:self-center">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
