import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import women from "../../assets/women.jpg"
import men from "../../assets/menoutfit2.jpg"
import womenbag from "../../assets/womenbag.jpg"
import pant from "../../assets/pant.jpg"
import menbag from "../../assets/menbag.jpg"
import eveninggown from "../../assets/eveninggawan.jpg"
import summerdress from "../../assets/menandWomen.jpg"
import hoodie from "../../assets/hodie.jpg"
import hero from "../../assets/main.jpg"
import womencollection from "../../assets/womencollection.jpg"
const lookbookImages = [
  {
    id: 1,
    url: hero
    , title: 'Urban Elegance',
    season: 'Spring 2024',
  },
  {
    id: 2,
    url: men, title: 'Modern Professional',
    season: 'Spring 2024',
  },
  {
    id: 3,
    url: womencollection,title: 'Summer Vibes',
    season: 'Summer 2024',
  },
  {
    id: 4,
    url: eveninggown,
    title: 'Evening Glamour',
    season: 'Fall 2024',
  },
  {
    id: 5,
    url: hoodie,title: 'Street Style',
    season: 'Fall 2024',
  },
  {
    id: 6,
    url: pant,title: 'Casual Chic',
    season: 'Summer 2024',
  },
  {
    id: 7,
    url:womenbag
    , title: 'Denim Days',
    season: 'Spring 2024',
  },
  {
    id: 8,
    url: image1, title: 'Timeless Classic',
    season: 'Fall 2024',
  },
  {
    id: 9,
    url: image2,title: 'Bold & Beautiful',
    season: 'Winter 2024',
  },
];

export default function Lookbook() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero} alt="Lookbook Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Lookbook</h1>
          <p className="text-xl text-gray-200">Inspiration for Every Season</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Collections</h2>
            <p className="text-gray-600 text-lg">
              Explore our carefully curated seasonal collections and find your inspiration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lookbookImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer ${
                  index === 0 || index === 4 || index === 8 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 || index === 4 || index === 8 ? 'h-[600px]' : 'h-80'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-orange-400 font-medium">{image.season}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1884582/pexels-photo-1884582.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Behind the Scenes"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Behind the Scenes</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Each lookbook is a carefully crafted story that showcases the versatility and elegance of our collections. Our creative team works tirelessly to bring you fresh perspectives on style and fashion.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                From concept to execution, every detail is designed to inspire your personal style journey. We collaborate with talented photographers and stylists to create visuals that resonate with our community.
              </p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
                View All Collections
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Style Inspiration Weekly</h2>
          <p className="text-xl mb-8 text-orange-100">
            Subscribe to receive exclusive lookbook previews and styling tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
