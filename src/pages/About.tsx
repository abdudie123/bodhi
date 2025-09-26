import React from 'react';
import { Users, Leaf, Award, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We promote sustainable farming practices that preserve the environment and support biodiversity.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Direct partnerships with farmers ensure fair trade and community empowerment.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Traditional processing methods combined with modern quality standards.'
    },
    {
      icon: Heart,
      title: 'Health',
      description: 'Committed to providing pure, natural products that promote wellness.'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Cultivation',
      description: 'Makhana plants thrive in serene ponds of Bihar during monsoon season.',
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: '2',
      title: 'Harvesting',
      description: 'Seeds are hand-harvested from water, ensuring minimal ecosystem damage.',
      image: 'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: '3',
      title: 'Processing',
      description: 'Traditional roasting and popping process transforms seeds into crunchy makhana.',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: '4',
      title: 'Grading',
      description: 'Manual sorting by size and quality ensures only the best reaches you.',
      image: 'https://images.pexels.com/photos/4198009/pexels-photo-4198009.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-gradient">Story</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Bodhi, we are inspired by the harmony of nature, health, and tradition. 
                Makhana – also known as lotus seeds or foxnuts – has been treasured in 
                Ayurveda and Indian culture for centuries.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                By working hand-in-hand with local farmers, we not only preserve this 
                age-old farming heritage but also ensure fair trade, sustainable practices, 
                and community growth.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Partner Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Natural Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">7</div>
                  <div className="text-sm text-gray-600">Product Grades</div>
                </div>
              </div>
            </div>
            <div className="fade-in-up stagger-2">
              <img
                src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farmers working in Bihar"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by our core values that reflect our 
              commitment to farmers, customers, and the environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl card-hover fade-in-up stagger-${index + 1}`}
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct from Farmers Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <img
                src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farmer harvesting makhana"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="fade-in-up stagger-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Direct from{' '}
                <span className="text-gradient">Farmers to You</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that the journey of our makhana should be as pure as the 
                product itself. That's why we work hand-in-hand with local farmers in 
                Bihar, where makhana has been cultivated for generations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Instead of going through middlemen, our team connects directly with 
                farming families, ensuring that every seed is ethically sourced and 
                fairly traded.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-gray-900 mb-3">Our Impact:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Fair pricing for farmers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Sustainable farming practices
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Community development programs
                  </li>
                  <li className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Preservation of traditional methods
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Art & Effort Behind Every{' '}
              <span className="text-gradient">Popped Makhana</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What may seem like a light, crunchy snack to us is the result of days of 
              painstaking labor by farmers. Each step requires skill, patience, and 
              generations of wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className={`relative fade-in-up stagger-${index + 1}`}
              >
                <div className="text-center">
                  <div className="relative">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-48 object-cover rounded-xl shadow-lg mb-4"
                    />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {/* Connector Arrow */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-green-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grading Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Grading Process –{' '}
                <span className="text-gradient">Sorting Nature's Jewels</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Once the makhana seeds are carefully harvested and popped, farmers begin 
                the next crucial step: grading. This process ensures that only the finest, 
                fluffiest seeds make their way into your Bodhi Premium Makhana pack.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Grading is done manually, often by hand, where farmers separate the popped 
                makhana based on size, texture, and quality. This meticulous sorting requires 
                a keen eye, patience, and years of experience.
              </p>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="font-bold text-gray-900 mb-3">Quality Standards:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-green-600">Size</div>
                    <div className="text-sm text-gray-600">Uniform grading</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-green-600">Texture</div>
                    <div className="text-sm text-gray-600">Crisp & fluffy</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-green-600">Color</div>
                    <div className="text-sm text-gray-600">Natural white</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-bold text-green-600">Purity</div>
                    <div className="text-sm text-gray-600">No impurities</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-up stagger-2">
              <img
                src="https://images.pexels.com/photos/4198009/pexels-photo-4198009.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Grading process"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Partner with us to bring premium, ethically sourced makhana to your customers. 
              Together, we can support farming communities while promoting healthy living.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:sales@bodhimakhana.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 btn-hover"
              >
                Partner with Us <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="tel:+918123234746"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-full transition-all duration-300"
              >
                Call: +91 81232 34746
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;