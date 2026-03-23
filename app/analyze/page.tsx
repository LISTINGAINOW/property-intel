import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Analyze Property - Property Intel',
  description: 'Upload property photos and get instant AI analysis',
}

export default function AnalyzePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Analyze Your Property</h1>
          <p className="text-gray-600">
            Upload photos and get instant style, room, and amenity detection
          </p>
        </div>

        {/* Upload Area */}
        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 text-center hover:border-blue-500 transition cursor-pointer">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">Drop photos here</h3>
          <p className="text-gray-500 mb-4">or click to browse</p>
          <p className="text-sm text-gray-400">
            Supports JPG, PNG, WebP • Max 30 photos
          </p>
          <input 
            type="file" 
            multiple 
            accept="image/*" 
            className="hidden" 
          />
        </div>

        {/* Preview Area */}
        <div className="mt-8 bg-white rounded-2xl p-6 hidden">
          <h3 className="font-medium mb-4">Photos Uploaded</h3>
          <div className="grid grid-cols-4 gap-4" id="preview-grid">
            {/* Photos will appear here */}
          </div>
          <button className="mt-6 w-full bg-blue-500 text-white py-4 rounded-xl font-medium hover:bg-blue-600 transition">
            Analyze Property
          </button>
        </div>

        {/* Results Area */}
        <div className="mt-8 bg-white rounded-2xl p-6 hidden">
          <h3 className="text-xl font-bold mb-6">Analysis Results</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Architectural Style</h4>
              <p className="text-lg font-semibold text-blue-600">Modern Minimalist</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Confidence</h4>
              <p className="text-lg font-semibold">85%</p>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Rooms Detected</h4>
            <div className="flex flex-wrap gap-2">
              {['Living Room', 'Kitchen', 'Master Bedroom', 'Bathroom'].map(room => (
                <span key={room} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {room}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-500 mb-2">Amenities</h4>
            <div className="flex flex-wrap gap-2">
              {['Pool', 'Large Windows', 'Fireplace', 'Stainless Steel Appliances'].map(amenity => (
                <span key={amenity} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {amenity}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Bedrooms Visible</h4>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-2">Bathrooms Visible</h4>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition">
              Download PDF Report
            </button>
            <button className="flex-1 bg-gray-100 text-gray-900 py-3 rounded-xl font-medium hover:bg-gray-200 transition">
              Analyze Another Property
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}