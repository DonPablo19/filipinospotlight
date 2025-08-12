import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  url: string;
}

interface RelatedArticlesProps {
  articles?: Article[];
}

const RelatedArticles = ({
  articles = [
    {
      id: 1,
      title: "Villanueva: I don’t know any senator linked to 15 contractors Marcos named",
        excerpt: "MANILA, Philippines — Senate Majority Leader Joel Villanueva spoke on behalf of all senators in the 20th Congress, saying that neither he nor one of his colleagues",
        category: "National",
      readTime: "5 min read",
      publishedDate: "August 12, 2025",
      url: "https://newsinfo.inquirer.net/2094222/villanueva-i-dont-know-any-senator-linked-to-15-contractors-marcos-named",
    },
    {
      id: 2,
      title: "Marcos: 15 firms corner big flood control works",
      excerpt: "MANILA, Philippines — As the investigation into nearly 10,000 flood control projects in the past three years gets underway, President Marcos on Monday expressed surprise upon learning that only a small number among the more than 2,000 contracting entities were handling the big-ticket projects of the government.",
      category: "National",
      readTime: "4 min read",
      publishedDate: "August 12, 2025",
      url: "https://newsinfo.inquirer.net/2094388/marcos-15-firms-corner-big-flood-control-works?utm_source=(direct)&utm_medium=gallery"
    },
    {
      id: 3,
      title: "Marcos inspects Pasig–Marikina River Channel Improvement Project",
      excerpt: "MANILA, Philippines — President Ferdinand “Bongbong” Marcos Jr. on Monday led the inspection of the Pasig–Marikina River Channel Improvement Project Phase IV flood control in Barangay Sto. Niño, Marikina City.",
      category: "National",
      readTime: "3 min read",
      publishedDate: "August 11, 2025",
      url: "https://newsinfo.inquirer.net/2094242/marcos-inspects-pasig-marikina-river-channel-improvement-project?utm_source=(direct)&utm_medium=gallery"
    },
    {
      id: 4,
      title: "DILG: Deploy barangay tanods in public schools for students’ safety",
      excerpt: "MANILA, Philippines — Barangay tanods (watchmen) should be deployed in public schools nationwide this school year to ensure the safety of students, the Department of the Interior and Local Government (DILG) said on Tuesday.",
      category: "Foreign Relations",
      readTime: "4 min read",
      publishedDate: "August 12, 2025",
      url: "https://newsinfo.inquirer.net/2094456/fwd-dilg-deploy-barangay-tanods-to-public-schools-nationwide-to-ensure-safety-of-students",
    }
  ]
}: RelatedArticlesProps) => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Related Articles
          </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay informed with the latest developments in Philippine politics, economy, foreign relations, and current events from FILIPINO SPOTLIGHT.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="text-xs font-medium bg-pink-100 text-pink-800 hover:bg-pink-200">
                    {article.category}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-200 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{article.publishedDate}</span>
                  <span>{article.readTime}</span>
                </div>
                
                <a 
                  href={article.url}
                  className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium text-sm transition-colors duration-200"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
