import { Home, Camera, Zap, Shield, CheckCircle, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-semibold">Property Intel</span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="/analyze" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Try Free
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">
            AI-Powered Property Analysis
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload photos. Get instant property reports. Detect style, rooms, amenities, views, and more.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/analyze" className="bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-600 transition flex items-center gap-2">
              Analyze Property Free
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="bg-gray-100 text-gray-900 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-200 transition">
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • 5 free analyses per month
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Property Intel Detects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-2xl">
              <Camera className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Style Detection</h3>
              <p className="text-gray-600">
                Spanish Colonial, Modern, Traditional, Farmhouse, Mid-Century, and more.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl">
              <Zap className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Amenities & Features</h3>
              <p className="text-gray-600">
                Pool, jacuzzi, outdoor kitchen, fireplace, gym, wine cellar, home theater.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-2xl">
              <Shield className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Room Analysis</h3>
              <p className="text-gray-600">
                Detect rooms, count bedrooms/bathrooms, identify views from windows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload Photos</h3>
              <p className="text-gray-600">
                Drag and drop property photos. Supports JPG, PNG, WebP.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our AI analyzes each photo for style, rooms, and features.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Report</h3>
              <p className="text-gray-600">
                Instant property report with all detected details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            Built For
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Real Estate Agents', desc: 'Generate listing descriptions instantly' },
              { title: 'Property Managers', desc: 'Create inventory reports fast' },
              { title: 'Investors', desc: 'Analyze properties before buying' },
              { title: 'Appraisers', desc: 'Speed up property assessments' },
            ].map((useCase, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-500 mb-3" />
                <h3 className="font-semibold mb-1">{useCase.title}</h3>
                <p className="text-sm text-gray-600">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Simple Pricing
          </h2>
          <p className="text-gray-600 text-center mb-16">
            Start free. Upgrade when you need more.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-4">$0<span className="text-lg font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>5 properties/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Basic analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>PDF reports</span>
                </li>
              </ul>
              <a href="/analyze" className="block text-center bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition">
                Get Started
              </a>
            </div>
            <div className="bg-blue-500 text-white p-8 rounded-2xl relative">
              <div className="absolute top-0 right-0 bg-blue-700 text-xs px-3 py-1 rounded-bl-lg rounded-tr-2xl">
                Popular
              </div>
              <h3 className="text-lg font-semibold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-4">$49<span className="text-lg font-normal opacity-80">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>50 properties/month</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Full reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Reverse image search</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Priority processing</span>
                </li>
              </ul>
              <a href="/analyze" className="block text-center bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition font-medium">
                Start Free Trial
              </a>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Team</h3>
              <div className="text-4xl font-bold mb-4">$149<span className="text-lg font-normal text-gray-500">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Unlimited properties</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>API access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Custom reports</span>
                </li>
              </ul>
              <a href="/analyze" className="block text-center bg-gray-100 text-gray-900 py-3 rounded-lg hover:bg-gray-200 transition">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Analyze Properties?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Start with 5 free analyses. No credit card required.
          </p>
          <a href="/analyze" className="inline-block bg-blue-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-blue-600 transition">
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-blue-500" />
            <span className="font-medium">Property Intel</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 Property Intel. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}