import { Target, Heart, Zap, Store } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About EVO"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About EVO</h1>
          <p className="text-xl text-gray-200">Redefining Fashion Excellence</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            EVO – a brand built on timeless style and dependable quality, crafted for every generation. From its early beginnings in 2005 to today, EVO has been dedicated to delivering fashion and everyday practicality that resonate with you, your family, and your friends. Whether you’re shopping for yourself, outfitting your household, or sharing with loved ones, EVO strives to offer versatile choices that fit diverse tastes, ages, and lifestyles. Our commitment is to help you express individuality, stay comfortable, and enjoy lasting value across generations, so style remains accessible and relevant for everyone, today and tomorrow.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img
              src="https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="EVO Store"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
            <img
              src="https://images.pexels.com/photos/1884582/pexels-photo-1884582.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fashion Display"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              At EVO, we curate collections that blend timeless elegance with contemporary trends. Our team of fashion experts travels the world to source the finest materials and work with talented designers who share our commitment to quality and innovation.
            </p>
            <p className="mb-6">
              With over 15 locations across the country, we've built a community of fashion-forward individuals who value authenticity, style, and exceptional service. Each store is designed to provide an immersive shopping experience where customers can explore, experiment, and discover their unique style.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Target className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Constantly evolving to bring you the latest in fashion trends and technology
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Heart className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Passion</h3>
              <p className="text-gray-600">
                Driven by our love for fashion and commitment to customer satisfaction
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                Uncompromising quality in every piece we offer to our customers
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Store className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                Building connections and inspiring confidence in every neighborhood
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">15+ Locations and Growing</h2>
          <p className="text-xl mb-8 text-orange-100">
            Our expansion reflects the trust and loyalty of our customers. Each new store is a testament to our commitment to bringing premium fashion closer to you.
          </p>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-orange-100">Stores</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-orange-100">Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-orange-100">Products</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
