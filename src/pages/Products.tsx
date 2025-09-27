import React, { useState } from 'react';
import { Package, Star, Scale, ShoppingCart } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'A Grade Makhana',
      grade: '6 & 6+',
      size: '18-24mm',
      category: 'premium',
      image: './img7.jpeg',
      description: 'Premium quality makhana with the largest size grade, perfect for premium retail and gourmet applications.',
      features: ['Largest size (18-24mm)', 'Premium quality', 'Hand-sorted', 'Minimum breakage'],
      packaging: '10kg bags, 100gm plastic packets',
      priceRange: '₹450-500/kg'
    },
    {
      id: 2,
      name: 'Premium Phool Makhana',
      grade: '5+',
      size: '15-18mm',
      category: 'premium',
image: './img22.jpeg',      description: 'High-quality makhana with excellent texture and taste, ideal for premium snack products.',
      features: ['Large size (15-18mm)', 'Uniform texture', 'Superior taste', 'Low moisture content'],
      packaging: '10kg bags, 100gm plastic packets',
      priceRange: '₹380-420/kg'
    },
    {
      id: 3,
      name: '6 Suta Makhana',
      grade: '6',
      size: '18-20mm',
      category: 'premium',
image: './img8.jpeg',      description: 'Hand-picked premium grade makhana, perfect for high-end retail and export markets.',
      features: ['Hand-picked quality', '18-20mm size', 'Export quality', 'Premium texture'],
      packaging: '10kg bags, 100gm plastic packets',
      priceRange: '₹420-460/kg'
    },
    {
      id: 4,
      name: 'Standard Makhana',
      grade: '4 & 5',
      size: '13-18mm',
      category: 'standard',
image: './img5.jpeg',      description: 'Good quality makhana suitable for general retail and food processing applications.',
      features: ['Medium to large size', 'Good texture', 'Value for money', 'Versatile use'],
      packaging: '10kg bags, 100gm plastic packets',
      priceRange: '₹320-360/kg'
    },
    {
      id: 5,
      name: 'Economical Phool Makhana',
      grade: '3, 4 & 5',
      size: '10-18mm',
      category: 'economical',
image: './img25.jpeg',      description: 'Cost-effective makhana mix suitable for bulk processing and value retail products.',
      features: ['Mixed sizes', 'Cost-effective', 'Good for processing', 'Bulk availability'],
      packaging: '10kg bags, 100gm plastic packets',
      priceRange: '₹280-320/kg'
    },
    {
      id: 6,
      name: 'Makhana Mixture',
      grade: '3 to 6+',
      size: '10-24mm',
      category: 'economical',
image: './img12.jpeg',      description: 'Mixed grade makhana perfect for snack manufacturing and bulk food processing.',
      features: ['All sizes mixed', 'Best value', 'Processing grade', 'High volume'],
      packaging: '10kg bags, 100gm plastic packets',
      priceRange: '₹260-300/kg'
    },
    {
      id: 7,
      name: 'Makhana Powder',
      grade: 'Powder',
      size: 'Fine Powder',
      category: 'specialty',
image:'./powder.webp',     description: '100% natural lotus seed powder, ideal for health supplements, baby food, and gluten-free baking.',
      features: ['Fine powder', 'Gluten-free', 'High protein', 'Versatile ingredient'],
      packaging: 'Plastic packets (500gm, 1kg)',
      priceRange: '₹400-450/kg'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'premium', name: 'Premium Grade', count: products.filter(p => p.category === 'premium').length },
    { id: 'standard', name: 'Standard Grade', count: products.filter(p => p.category === 'standard').length },
    { id: 'economical', name: 'Economical', count: products.filter(p => p.category === 'economical').length },
    { id: 'specialty', name: 'Specialty', count: products.filter(p => p.category === 'specialty').length }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'premium': return 'bg-yellow-100 text-yellow-800';
      case 'standard': return 'bg-blue-100 text-blue-800';
      case 'economical': return 'bg-green-100 text-green-800';
      case 'specialty': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Product Range</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Premium makhana in various grades and sizes to meet all your business needs. 
            From premium retail to bulk processing, we have the right product for you.
          </p>
        </div>

        {/* Size Reference */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Makhana Size Grading Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600">3+ Soota</div>
              <div className="text-gray-600 mt-1">10-13mm</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600">4+ Soota</div>
              <div className="text-gray-600 mt-1">13-15mm</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600">5+ Soota</div>
              <div className="text-gray-600 mt-1">15-18mm</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-green-600">6+ Soota</div>
              <div className="text-gray-600 mt-1">18-24mm</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover fade-in-up stagger-${(index % 4) + 1}`}
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(product.category)}`}>
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-700">Grade {product.grade}</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* Specifications */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <Scale className="w-4 h-4 mr-1" />
                      Size:
                    </span>
                    <span className="font-medium">{product.size}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-gray-600">
                      <Package className="w-4 h-4 mr-1" />
                      Grade:
                    </span>
                    <span className="font-medium">{product.grade}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Packaging & Price */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Packaging:</span>
                    <span className="text-sm font-medium">{product.packaging}</span>
                  </div>
                  {/* <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">Price Range:</span>
                    <span className="text-lg font-bold text-green-600">{product.priceRange}</span>
                  </div> */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 btn-hover">
                      <ShoppingCart className="w-4 h-4 inline mr-1" />
                      Get Quote
                    </button>
                    <button className="px-4 py-2 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors duration-200">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Order CTA */}
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking for Bulk Orders?</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            We offer special pricing for bulk orders and long-term partnerships. 
            Contact us for customized quotes and flexible packaging options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sales@bodhimakhana.com"
              className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 btn-hover"
            >
              Email for Bulk Quote
            </a>
            <a
              href="tel:+918123234746"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-lg transition-all duration-300"
            >
              Call: +91 81232 34746
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;