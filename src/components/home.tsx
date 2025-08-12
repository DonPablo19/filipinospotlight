import React from "react";
import ArticleContent from "./ArticleContent";
import LatestPostsSidebar from "./LatestPostsSidebar";
import RelatedArticles from "./RelatedArticles";
import CookieConsent from "./CookieConsent";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 border-b shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold text-white tracking-wide">Bayan Today</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Article Content - Takes 3 columns */}
          <div className="lg:col-span-3">
            <ArticleContent />
          </div>

          {/* Sidebar - Takes 1 column */}
          <div className="lg:col-span-1">
            <LatestPostsSidebar />
          </div>
        </div>
      </div>

      {/* Related Articles Section - Full width below */}
      <RelatedArticles />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <h3 className="text-2xl font-bold text-blue-100">Bayan Today</h3>
              </div>
              <p className="text-blue-100 mb-4 leading-relaxed">
                Bayan Today is your premier destination for comprehensive Philippine news coverage, delivering breaking stories, investigative reports, and in-depth analysis. 
                We bring you the latest developments from across the Philippines with accuracy, integrity, and Filipino perspective.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-100">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-blue-100 hover:text-white transition-colors duration-200">Home</a></li>
                <li><a href="/pnp-chief-albayalde-urges-public-to-move-on-from-ninja-cops-controversy" className="text-blue-100 hover:text-white transition-colors duration-200">News</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Categories</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Reporters</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-100">News Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Breaking News</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Technology</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Politics</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">World</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-blue-500 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-100 text-sm">
                © 2025 Bayan Today. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
                <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Consent Popup */}
      <CookieConsent />
    </div>
  );
}

export default Home;
