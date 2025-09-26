import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: 'health-benefits-makhana',
      title: '10 Amazing Health Benefits of Makhana You Didn\'t Know',
      excerpt: 'Discover why makhana is considered a superfood and how it can transform your health and wellness routine.',
      content: 'Full article content here...',
      image: 'https://images.pexels.com/photos/4113890/pexels-photo-4113890.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Priya Sharma',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Health & Nutrition'
    },
    {
      id: 2,
      slug: 'makhana-farming-bihar',
      title: 'Traditional Makhana Farming in Bihar: A Legacy Preserved',
      excerpt: 'Explore the ancient art of makhana cultivation and how modern farmers are keeping this tradition alive.',
      content: 'Full article content here...',
      image: 'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Rajesh Kumar',
      date: '2025-01-12',
      readTime: '7 min read',
      category: 'Agriculture'
    },
    {
      id: 3,
      slug: 'makhana-recipes-snacks',
      title: '5 Delicious Makhana Recipes for Healthy Snacking',
      excerpt: 'Transform simple makhana into gourmet snacks with these easy and healthy recipes.',
      content: 'Full article content here...',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Chef Anita Verma',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Recipes'
    },
    {
      id: 4,
      slug: 'sustainable-farming-practices',
      title: 'Sustainable Makhana Farming: Our Environmental Commitment',
      excerpt: 'Learn how our farming practices protect biodiversity while ensuring premium quality makhana.',
      content: 'Full article content here...',
      image: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Environmental Team',
      date: '2025-01-08',
      readTime: '8 min read',
      category: 'Sustainability'
    },
    {
      id: 5,
      slug: 'makhana-business-opportunities',
      title: 'Growing Business Opportunities in Makhana Industry',
      excerpt: 'Discover the expanding market potential and business opportunities in the makhana industry.',
      content: 'Full article content here...',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Business Analyst',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Business'
    },
    {
      id: 6,
      slug: 'quality-grading-guide',
      title: 'Understanding Makhana Quality Grades: A Buyer\'s Guide',
      excerpt: 'Complete guide to makhana grades, sizes, and quality parameters for informed purchasing decisions.',
      content: 'Full article content here...',
      image: 'https://images.pexels.com/photos/4198009/pexels-photo-4198009.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Quality Expert',
      date: '2025-01-03',
      readTime: '9 min read',
      category: 'Education'
    }
  ];

  const categories = ['All', 'Health & Nutrition', 'Agriculture', 'Recipes', 'Sustainability', 'Business', 'Education'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Health & Nutrition': 'bg-green-100 text-green-800',
      'Agriculture': 'bg-blue-100 text-blue-800',
      'Recipes': 'bg-orange-100 text-orange-800',
      'Sustainability': 'bg-emerald-100 text-emerald-800',
      'Business': 'bg-purple-100 text-purple-800',
      'Education': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Makhana <span className="text-gradient">Knowledge Hub</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights on makhana farming, health benefits, 
            recipes, and industry trends. Your go-to resource for everything makhana.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-auto">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(filteredPosts[0].category)}`}>
                      Featured
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(filteredPosts[0].category)}`}>
                      {filteredPosts[0].category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {filteredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {filteredPosts[0].author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(filteredPosts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${filteredPosts[0].slug}`}
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
                    >
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <article
              key={post.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover fade-in-up stagger-${(index % 4) + 1}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
                >
                  Read Full Article <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest articles, farming insights, 
            and industry news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 btn-hover">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;