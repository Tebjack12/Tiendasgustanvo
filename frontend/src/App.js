import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Componente de Navegación
const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-black">
            MODA.STYLE
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black font-medium">
              Inicio
            </Link>
            <Link to="/colecciones" className="text-gray-700 hover:text-black font-medium">
              Colecciones
            </Link>
            <Link to="/productos" className="text-gray-700 hover:text-black font-medium">
              Productos
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.8 7.2M7 13h12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Página de Inicio
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen bg-gray-50">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/9558761/pexels-photo-9558761.jpeg"
            alt="Fashion Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-6">
              Nueva Temporada
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Descubre las últimas tendencias en moda
            </p>
            <Link
              to="/colecciones"
              className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explorar Colección
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-16">Categorías Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/32405408/pexels-photo-32405408.jpeg"
                  alt="Mujer"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium text-center">Mujer</h3>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg"
                  alt="Hombre"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium text-center">Hombre</h3>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img
                  src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg"
                  alt="Accesorios"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium text-center">Accesorios</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-16">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d"
                  alt="Producto"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Conjunto Casual</h3>
                <p className="text-gray-600 mb-2">Cardigan y jeans</p>
                <p className="font-semibold">€45.99</p>
              </div>
            </div>
            <div className="bg-white group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/32357423/pexels-photo-32357423.jpeg"
                  alt="Producto"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Traje Azul</h3>
                <p className="text-gray-600 mb-2">Elegante y moderno</p>
                <p className="font-semibold">€129.99</p>
              </div>
            </div>
            <div className="bg-white group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/32443818/pexels-photo-32443818.jpeg"
                  alt="Producto"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">Blazer Verde</h3>
                <p className="text-gray-600 mb-2">Perfecto para oficina</p>
                <p className="font-semibold">€89.99</p>
              </div>
            </div>
            <div className="bg-white group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/32401765/pexels-photo-32401765.jpeg"
                  alt="Producto"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">T-shirt Verde</h3>
                <p className="text-gray-600 mb-2">Casual y cómoda</p>
                <p className="font-semibold">€24.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Página de Colecciones
const Colecciones = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-light text-center mb-16">Nuestras Colecciones</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd"
                alt="Colección Mujer"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl font-light mb-2">Colección Mujer</h2>
                <p className="text-lg">Elegancia y estilo contemporáneo</p>
              </div>
            </div>
          </div>
          
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6">
              <img
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22"
                alt="Colección Hombre"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-colors"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h2 className="text-3xl font-light mb-2">Colección Hombre</h2>
                <p className="text-lg">Sofisticación moderna</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-light mb-8">Accesorios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1569388330292-79cc1ec67270"
                alt="Accesorios Primavera"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Accesorios Primavera</h3>
                <p className="text-gray-600">Complementa tu look con nuestros accesorios de temporada</p>
              </div>
            </div>
            <div className="group cursor-pointer">
              <img
                src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg"
                alt="Colección Básicos"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Básicos Esenciales</h3>
                <p className="text-gray-600">Piezas fundamentales para tu guardarropa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Página de Productos
const Productos = () => {
  const productos = [
    {
      id: 1,
      name: "Conjunto Casual",
      price: "€45.99",
      image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d",
      description: "Cardigan gris con jeans azules y zapatos marrones"
    },
    {
      id: 2,
      name: "Traje Azul",
      price: "€129.99",
      image: "https://images.pexels.com/photos/32357423/pexels-photo-32357423.jpeg",
      description: "Elegante traje azul para ocasiones especiales"
    },
    {
      id: 3,
      name: "Blazer Verde",
      price: "€89.99",
      image: "https://images.pexels.com/photos/32443818/pexels-photo-32443818.jpeg",
      description: "Blazer verde perfecto para el ambiente profesional"
    },
    {
      id: 4,
      name: "T-shirt Verde",
      price: "€24.99",
      image: "https://images.pexels.com/photos/32401765/pexels-photo-32401765.jpeg",
      description: "Camiseta verde casual y cómoda"
    },
    {
      id: 5,
      name: "Conjunto Blanco",
      price: "€69.99",
      image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg",
      description: "Jeans azules con suéter blanco elegante"
    },
    {
      id: 6,
      name: "Colección Minimalista",
      price: "€99.99",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      description: "Prendas minimalistas en tonos neutros"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-light mb-4">Todos los Productos</h1>
          <p className="text-gray-600 text-lg">Descubre nuestra colección completa de moda contemporánea</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-100 p-1 rounded-lg">
            <button className="px-6 py-2 bg-white rounded-md shadow-sm font-medium">Todos</button>
            <button className="px-6 py-2 text-gray-600 hover:text-black">Mujer</button>
            <button className="px-6 py-2 text-gray-600 hover:text-black">Hombre</button>
            <button className="px-6 py-2 text-gray-600 hover:text-black">Accesorios</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src={producto.image}
                  alt={producto.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-medium text-lg mb-2">{producto.name}</h3>
                <p className="text-gray-600 mb-3">{producto.description}</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-lg">{producto.price}</p>
                  <button className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors">
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border border-gray-300 text-gray-700 px-8 py-3 hover:bg-gray-50 transition-colors">
            Cargar más productos
          </button>
        </div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">MODA.STYLE</h3>
            <p className="text-gray-400">
              Tu destino para la moda contemporánea y las últimas tendencias.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Comprar</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Mujer</a></li>
              <li><a href="#" className="hover:text-white">Hombre</a></li>
              <li><a href="#" className="hover:text-white">Accesorios</a></li>
              <li><a href="#" className="hover:text-white">Nuevos productos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Contacto</a></li>
              <li><a href="#" className="hover:text-white">Envíos</a></li>
              <li><a href="#" className="hover:text-white">Devoluciones</a></li>
              <li><a href="#" className="hover:text-white">Guía de tallas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MODA.STYLE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colecciones" element={<Colecciones />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;