"use client"

import { useState } from "react"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import headOffice from "../../assets/headoffice.jpg"
import eliana from "../../assets/eliana.jpg"
import kera from "../../assets/lion-of-judah-and-legehar.jpg"
import bulgaria from "../../assets/africa-union.jpg"
interface Location {
  id: string
  name: string
  address: string
  city: string
  phone: string
  hours: string
  coordinates: { lat: number; lng: number }
  image: string
}

const locations: Location[] = [
  {
    id: "1",
    name: "EVO Addis Ababa - Main Store",
    address: "Signal, Near to Signal Business Center and Dema Hope Real state",
    city: "Addis Ababa",
    phone: "+251 (0) 116463767",
    hours: "Mon - Sat: 10:00 AM - 8:00 PM\nSun: 12:00 PM - 6:00 PM",
    coordinates: { lat:9.021404792196227, lng: 38.786532270008934 },
    image:headOffice },
  {
    id: "2",
    name: "EVO Addis Ababa - Piazza Store",
    address: "Grand Eliana Hotel, Churchill Avenue, Piazza, Arada, Addis Ababa",
    city: "Addis Ababa",
    phone: "+251 11 234 5678",
    hours: "Mon - Sun: 11:00 AM - 9:00 PM",
    coordinates: { lat: 9.0419, lng: 38.7469 },
    image: eliana },
  {
    id: "3",
    name: "EVO Addis Ababa - Kera Store",
    address: "Muaritiu Street, Kera, Addis Ababa",
    city: "Addis Ababa",
    phone: "++251 (0) 116463767",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM\nSun: 1:00 PM - 6:00 PM",
    coordinates: { lat: 8.986589852498403, lng:  38.75077436988747 },
    image:kera},
  {
    id: "4",
    name: "EVO Addis Ababa - Bulgaria Mazorya Store ",
    address: "Bulgaria Mazorya, behind to Merci hotel",
    city: "Addis Ababa",
    phone: "+251 (0) 116463767",
    hours: "Mon - Sat: 10:00 AM - 8:00 PM\nSun: 2:00 PM - 7:00 PM",
    coordinates: { lat:8.994134748023601, lng: 38.74770465253713 },
    image:bulgaria},
]

export default function Directions() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(locations[0])

  const handleGetDirections = (lat: number, lng: number) => {
    const mapsUrl = `https://www.google.com/maps/search/${lat},${lng}`
    window.open(mapsUrl, "_blank")
  }

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  return (
    <div className="min-h-screen pt-20 pb-20 bg-gray-50">
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Visit Our Stores</h1>
          <p className="text-center text-gray-600 text-lg">
            Find EVO locations across Ethiopia and discover our latest collections
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map and Location List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <div className="space-y-3">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedLocation?.id === location.id
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{location.name}</h3>
                      <p className="text-sm text-gray-600">{location.city}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Location Details */}
          {selectedLocation && (
            <div className="space-y-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={selectedLocation.image || "/placeholder.svg"}
                  alt={selectedLocation.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedLocation.name}</h2>
                  <p className="text-gray-600 mb-6">{selectedLocation.address}</p>

                  {/* Location Info Cards */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 pb-4 border-b">
                      <Clock className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                        <p className="text-sm text-gray-600 whitespace-pre-line">{selectedLocation.hours}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pb-4 border-b">
                      <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <button
                          onClick={() => handleCall(selectedLocation.phone)}
                          className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                        >
                          {selectedLocation.phone}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Coordinates</h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {selectedLocation.coordinates.lat.toFixed(4)}, {selectedLocation.coordinates.lng.toFixed(4)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <button
                      onClick={() =>
                        handleGetDirections(selectedLocation.coordinates.lat, selectedLocation.coordinates.lng)
                      }
                      className="flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </button>
                    <button
                      onClick={() => handleCall(selectedLocation.phone)}
                      className="flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call Store
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
