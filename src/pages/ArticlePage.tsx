import React from "react";
import ArticleContent from "../components/ArticleContent";
import LatestPostsSidebar from "../components/LatestPostsSidebar";
import RelatedArticles from "../components/RelatedArticles";

const ArticlePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Phagenda</h1>
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
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Phagenda</h3>
              <p className="text-gray-300 mb-4">
                Your trusted source for breaking news, exclusive reports, and in-depth coverage of the most important stories happening around the world. 
                Stay informed with real-time updates and expert analysis.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/philippine-police-chief-tracker-teams-on-standby-to-rearrest-freed-convicts" className="text-gray-300 hover:text-white">News</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Categories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Reporters</a></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4">News Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Breaking News</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Technology</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Politics</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">World</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 text-sm">
                © 2025 Phagenda. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</a>
                <a href="#" className="text-gray-300 hover:text-white text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage;
