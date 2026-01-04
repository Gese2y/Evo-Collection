import { MapPin, Phone, Clock } from 'lucide-react';

const stores = [
  {
    id: 1,
    name: 'EVO Flagship - Downtown',
    address: '123 Fashion Avenue, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
    image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'EVO Beverly Hills',
    address: '456 Rodeo Drive, Beverly Hills, CA 90210',
    phone: '+1 (555) 234-5678',
    hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM',
    image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'EVO Miami Beach',
    address: '789 Ocean Drive, Miami Beach, FL 33139',
    phone: '+1 (555) 345-6789',
    hours: 'Mon-Sun: 10AM-10PM',
    image: 'https://images.pexels.com/photos/1884582/pexels-photo-1884582.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    name: 'EVO Chicago Loop',
    address: '321 Michigan Avenue, Chicago, IL 60601',
    phone: '+1 (555) 456-7890',
    hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 5,
    name: 'EVO Las Vegas Strip',
    address: '555 Las Vegas Blvd, Las Vegas, NV 89109',
    phone: '+1 (555) 567-8901',
    hours: 'Mon-Sun: 10AM-11PM',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 6,
    name: 'EVO Boston Commons',
    address: '888 Boylston Street, Boston, MA 02116',
    phone: '+1 (555) 678-9012',
    hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
    image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 7,
    name: 'EVO Seattle Downtown',
    address: '999 Pine Street, Seattle, WA 98101',
    phone: '+1 (555) 789-0123',
    hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM',
    image: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 8,
    name: 'EVO Austin 6th Street',
    address: '777 Congress Avenue, Austin, TX 78701',
    phone: '+1 (555) 890-1234',
    hours: 'Mon-Sun: 10AM-8PM',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 9,
    name: 'EVO San Francisco Union Square',
    address: '444 Powell Street, San Francisco, CA 94102',
    phone: '+1 (555) 901-2345',
    hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
    image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 10,
    name: 'EVO Denver LoDo',
    address: '222 Larimer Street, Denver, CO 80202',
    phone: '+1 (555) 012-3456',
    hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 11,
    name: 'EVO Portland Pearl District',
    address: '333 NW 10th Avenue, Portland, OR 97209',
    phone: '+1 (555) 123-7890',
    hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 12,
    name: 'EVO Atlanta Buckhead',
    address: '666 Peachtree Street, Atlanta, GA 30308',
    phone: '+1 (555) 234-8901',
    hours: 'Mon-Sat: 10AM-9PM, Sun: 12PM-6PM',
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 13,
    name: 'EVO Dallas Uptown',
    address: '111 McKinney Avenue, Dallas, TX 75201',
    phone: '+1 (555) 345-9012',
    hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
    image: 'https://images.pexels.com/photos/2710/fashion-person-woman-hand.jpg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 14,
    name: 'EVO Philadelphia Rittenhouse',
    address: '888 Walnut Street, Philadelphia, PA 19103',
    phone: '+1 (555) 456-0123',
    hours: 'Mon-Sat: 10AM-8PM, Sun: 11AM-6PM',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 15,
    name: 'EVO Nashville Broadway',
    address: '555 Broadway, Nashville, TN 37203',
    phone: '+1 (555) 567-1234',
    hours: 'Mon-Sun: 10AM-9PM',
    image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Stores() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visit Our Stores</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience EVO fashion in person at any of our 15+ premium locations across the country
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={store.image}
                  alt={store.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{store.name}</h3>

                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{store.address}</span>
                    </div>

                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{store.phone}</span>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{store.hours}</span>
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find a Store Near You?</h2>
          <p className="text-gray-600 text-lg mb-8">
            We're constantly expanding! Sign up to be notified when we open a new location in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-orange-500"
            />
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
