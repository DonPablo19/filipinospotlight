import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    avatar: string;
  };
  url: string;
}

interface LatestPostsSidebarProps {
  posts?: Post[];
}

const LatestPostsSidebar = ({
  posts = [
    {
      id: 1,
      title: "Marcos: 15 firms corner big flood control works",
      excerpt: "MANILA, Philippines — As the investigation into nearly 10,000 flood control projects in the past three years gets underway, President Marcos on Monday expressed surprise upon learning that only a small number among the more than 2,000 contracting entities were handling the big-ticket projects of the government.",
      category: "National",
      readTime: "4 min read",
      publishedDate: "August 12, 2025",
      author: {
        name: "INQUIRER.net",
        avatar: "https://newsinfo.inquirer.net/wp-content/uploads/2025/08/inquirer-logo.png"
      },
              url: "https://www.filipinospotlight.online/marcos-15-firms-corner-big-flood-control-works"
    },
    {
      id: 2,
      title: "‘Bad Boy’ Robin Padilla to head Senate ethics body?",
      excerpt: "MANILA, Philippines — Sen. Robinhood “Robin” Padilla, who has been dubbed the “Bad Boy” of Philippine cinema, is being considered to head the Senate committee on ethics.",
      category: "National",
      readTime: "5 min read",
      publishedDate: "August 12, 2025",
      author: {
        name: "INQUIRER.net",
        avatar: "https://newsinfo.inquirer.net/wp-content/uploads/2025/08/inquirer-logo.png"
      },
             url: "https://www.filipinospotlight.online/bad-boy-robin-padilla-to-head-senate-ethics-body"
    },
    {
      id: 3,
      title: "Chinese ships collide while pursuing PH vessel",
      excerpt: "SAN ANTONIO, ZAMBALES, Philippines — Philippine vessels were again harassed by China during another mission on Monday to Panatag (Scarborough) Shoal in the West Philippine Sea (WPS).",
      category: "National",
      readTime: "3 min read",
      publishedDate: "August 12, 2025",
      author: {
        name: "INQUIRER.net",
        avatar: "https://newsinfo.inquirer.net/wp-content/uploads/2025/08/inquirer-logo.png"
      },
             url: "https://www.filipinospotlight.online/chinese-ships-collide-while-pursuing-ph-vessel"
    },
    {
      id: 4,
      title: "Vico Sotto: Discayas own 2 of top 15 firms in gov’t flood control deals",
      excerpt: "MANILA, Philippines — Two of the top 15 contractor firms that received the majority of flood control projects from the government are owned by the Discayas, Pasig Mayor Vico Sotto said Monday as he vowed to identify any “red flags” related to these projects and forward the information to President Ferdinand Marcos Jr.",
      category: "National",
      readTime: "3 min read",
      publishedDate: "August 12, 2025",
      author: {
        name: "INQUIRER.net",
        avatar: "https://newsinfo.inquirer.net/wp-content/uploads/2025/08/inquirer-logo.png"
      },
             url: "https://www.filipinospotlight.online/vico-sotto-discayas-own-2-of-top-15-firms-in-govt-flood-control-deals"
    },
    {
      id: 5,
      title: "Public urged to go to President’s website for tips on infra problems",
      excerpt: "MANILA, Philippines — Got a tip about anomalies in the flood control projects in your community? Report it straight to President Marcos.",
      category: "National",
      readTime: "4 min read",
      publishedDate: "August 12, 2025",
      author: {
        name: "INQUIRER.net",
        avatar: "https://newsinfo.inquirer.net/wp-content/uploads/2025/08/inquirer-logo.png"
      },
             url: "https://www.filipinospotlight.online/public-urged-to-go-to-presidents-website-for-tips-on-infra-problems"
    }
  ]
}: LatestPostsSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Sidebar Header */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Latest Posts
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Stay updated with the latest developments in Philippine politics, economy, foreign relations, and current events from FILIPINO SPOTLIGHT.
        </p>
      </div>

      {/* Latest Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-3">
                                  <Badge variant="secondary" className="text-xs font-medium bg-pink-100 text-pink-800 hover:bg-pink-200">
                  {post.category}
                </Badge>
              </div>
              
                              <h4 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-200 line-clamp-2 leading-tight">
                {post.title}
              </h4>
              
              <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback className="text-xs bg-pink-100 text-pink-800">
                      {post.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-gray-500 font-medium">
                    {post.author.name}
                  </span>
                </div>
                <span className="text-xs text-gray-400">
                  {post.readTime}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  {post.publishedDate}
                </span>
                <a 
                  href={post.url}
                  className="text-xs text-pink-600 hover:text-pink-800 font-medium transition-colors duration-200"
                >
                  Read More →
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-br from-pink-600 to-red-600 text-white border-0 shadow-lg">
        <CardContent className="p-6">
          <h4 className="text-lg font-bold mb-2">
            Stay Informed
          </h4>
                     <p className="text-pink-100 text-sm mb-4">
             Get the latest Philippine news and updates from FILIPINO SPOTLIGHT delivered to your inbox.
           </p>
          <button className="w-full bg-white text-pink-600 font-semibold py-2 px-4 rounded-lg hover:bg-pink-50 transition-colors duration-200">
            Subscribe Now
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LatestPostsSidebar;
