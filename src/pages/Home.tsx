import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Leaf, Award, Users, TrendingUp } from 'lucide-react';

const Home = () => {
  const benefits = [
    { icon: Shield, title: 'Anti-Cancerous Properties', desc: 'Supports cellular health' },
    { icon: Heart, title: 'Heart Friendly', desc: 'Supports cardiovascular health' },
    { icon: Leaf, title: '100% Natural & Organic', desc: 'No preservatives or chemicals' },
    { icon: Award, title: 'Protein Rich', desc: 'Helps muscle growth & recovery' },
  ];

  const features = [
    { icon: Users, title: 'Direct from Farmers', desc: 'Ethically sourced from Bihar farmers' },
    { icon: Award, title: 'Premium Quality', desc: 'Multiple grades available' },
    { icon: TrendingUp, title: 'B2B Solutions', desc: 'Bulk orders for businesses' },
    { icon: Shield, title: 'Quality Assured', desc: 'Traditional processing methods' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Snack Your Way to{' '}
                <span className="text-gradient">Wellness</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Discover the goodness of nature's own superfood – Makhana (Foxnuts). 
                Handpicked from the fertile fields of Bihar and packed with purity, 
                nutrition, and love. More than a snack – it's a lifestyle choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full btn-hover"
                >
                  Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+918123234746"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-full transition-all duration-300"
                >
                  Get Quote
                </a>
              </div>
            </div>
            <div className="fade-in-up stagger-2 float-animation">
              <img
                src="./pack.jpeg"
                alt="Premium Makhana in hands"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bodhi Makhana?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From our farmers' ponds to your business, we ensure the highest quality 
              makhana with complete transparency and authenticity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg card-hover fade-in-up stagger-${index + 1}`}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Makhana: A Treasure Chest of{' '}
                <span className="text-gradient">Nutrition</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                More than just a crunchy snack, makhana is packed with essential nutrients 
                that support your health and well-being. Perfect for fitness enthusiasts, 
                health-conscious families, and anyone seeking nutritious alternatives.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm card-hover fade-in-up stagger-${index + 1}`}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in-up stagger-2">
              <img
                src="https://images.pexels.com/photos/4113890/pexels-photo-4113890.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Healthy lifestyle with makhana"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <img
                src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farmers working in Bihar fields"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="fade-in-up stagger-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Direct from{' '}
                <span className="text-gradient">Farmers to You</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Bodhi, we believe that the journey of our makhana should be as pure as 
                the product itself. We work hand-in-hand with local farmers in Bihar, 
                where makhana has been cultivated for generations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                By cutting out intermediaries, we ensure farmers receive fair prices for 
                their hard work, and you receive makhana that is fresh, authentic, and 
                full of natural goodness.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                Learn More About Our Story <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join our network of satisfied B2B clients and offer premium makhana 
              to your customers. Get competitive prices and reliable supply.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 btn-hover"
              >
                View Product Catalog <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="mailto:sales@bodhimakhana.com"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-full transition-all duration-300"
              >
                Get B2B Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;