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
        <div className="flex justify-center mb-12">
          <img 
            src={menuImage} 
            alt="Menú de Tacos - Tacos, Tortas, Bebidas y Extras" 
            className="w-full max-w-2xl h-auto rounded-3xl border-4 border-taco-red card-hover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <div key={index} className={`bg-gray-50 rounded-2xl p-6 border-2 border-${category.color} card-hover`}>
              <div className="flex items-center mb-6">
                <div className={`bg-${category.color} rounded-full p-3 mr-4`}>
                  <i className={`${category.icon} text-white text-xl`}></i>
                </div>
                <h3 className={`font-display text-3xl text-${category.color}`}>{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center p-3 rounded-lg menu-item border border-gray-300">
                    <div>
                      <p className="font-bold text-gray-800">{item.name}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    <span className="text-taco-red font-bold">{item.price}</span>
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
