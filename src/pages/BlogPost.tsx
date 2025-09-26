import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share, Heart } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();

  // This would typically come from an API or CMS
  const post = {
    id: 1,
    slug: 'health-benefits-makhana',
    title: '10 Amazing Health Benefits of Makhana You Didn\'t Know',
    excerpt: 'Discover why makhana is considered a superfood and how it can transform your health and wellness routine.',
    image: 'https://images.pexels.com/photos/4113890/pexels-photo-4113890.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Dr. Priya Sharma',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Health & Nutrition',
    content: `
      <p class="text-lg text-gray-600 leading-relaxed mb-6">
        Makhana, also known as fox nuts or lotus seeds, has been a treasured ingredient in Indian cuisine and Ayurvedic medicine for centuries. But did you know that this humble snack is packed with incredible health benefits that can transform your wellness journey?
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">What Makes Makhana a Superfood?</h2>
      <p class="text-gray-600 leading-relaxed mb-6">
        Makhana is not just another snack – it's a nutritional powerhouse that offers a unique combination of protein, fiber, minerals, and antioxidants. Unlike processed snacks that are high in unhealthy fats and sodium, makhana provides clean nutrition that your body can actually use.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Top 10 Health Benefits</h2>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">1. Rich in Protein for Muscle Health</h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        Makhana contains about 9-10 grams of protein per 100 grams, making it an excellent plant-based protein source. This is particularly beneficial for vegetarians and vegans looking to meet their protein requirements.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">2. Low in Calories, High in Satisfaction</h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        With only about 350 calories per 100 grams, makhana is a guilt-free snack that helps with weight management. The high fiber content keeps you feeling full longer, reducing the urge to overeat.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">3. Heart-Healthy Properties</h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        Makhana is naturally low in sodium and high in potassium, which helps regulate blood pressure. The magnesium content supports heart rhythm and muscle function.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">4. Anti-Aging Antioxidants</h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        Packed with flavonoids and other antioxidants, makhana helps fight free radicals that cause aging and cellular damage. Regular consumption may help maintain youthful skin and overall vitality.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">5. Supports Digestive Health</h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        The high fiber content in makhana promotes healthy digestion, prevents constipation, and supports a healthy gut microbiome.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">6. Blood Sugar Management</h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        Makhana has a low glycemic index, making it an ideal snack for people managing diabetes. It provides steady energy without causing blood sugar spikes.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">7. Bone Health Support</h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        Rich in calcium and phosphorus, makhana supports bone density and may help prevent osteoporosis, especially important as we age.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">8. Natural Stress Relief</h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        In Ayurveda, makhana is known for its calming properties. The natural compounds may help reduce stress and promote better sleep quality.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">9. Kidney Health Benefits</h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        Traditional medicine credits makhana with supporting kidney function and helping to maintain proper fluid balance in the body.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 mb-3">10. Cancer-Fighting Properties</h3>
      <p class="text-gray-600 leading-relaxed mb-4">
        Preliminary research suggests that certain compounds in makhana may have anti-cancer properties, though more research is needed to confirm these effects.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">How to Incorporate Makhana into Your Diet</h2>
      <p class="text-gray-600 leading-relaxed mb-4">
        The beauty of makhana lies in its versatility. You can enjoy it roasted with a pinch of salt as a healthy snack, add it to your favorite curry, or even grind it into powder for smoothies and baking.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4">Choosing Quality Makhana</h2>
      <p class="text-gray-600 leading-relaxed mb-6">
        Not all makhana is created equal. Look for premium grades that are properly processed, naturally white in color, and free from artificial additives. At Bodhi, we ensure that our makhana meets the highest quality standards while supporting sustainable farming practices.
      </p>
    `
  };

  const relatedPosts = [
    {
      title: 'Traditional Makhana Farming in Bihar',
      slug: 'makhana-farming-bihar',
      image: 'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: '5 Delicious Makhana Recipes',
      slug: 'makhana-recipes-snacks',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      title: 'Understanding Makhana Quality Grades',
      slug: 'quality-grading-guide',
      image: 'https://images.pexels.com/photos/4198009/pexels-photo-4198009.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div className="py-8 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <span className="text-gray-600 font-medium">Share:</span>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Share className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              <Heart className="w-4 h-4" />
              Like
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h4>
              <p className="text-gray-600">
                Nutrition expert and wellness advocate with over 10 years of experience 
                in promoting healthy lifestyle choices through natural foods and traditional wisdom.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <Link
                key={index}
                to={`/blog/${relatedPost.slug}`}
                className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience Premium Makhana?</h2>
          <p className="text-green-100 mb-6">
            Discover our range of premium quality makhana products sourced directly from Bihar farmers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 btn-hover"
            >
              Shop Our Products
            </Link>
            <a
              href="mailto:sales@bodhimakhana.com"
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold rounded-lg transition-all duration-300"
            >
              Get B2B Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;