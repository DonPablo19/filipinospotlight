import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

interface Post {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  author: {
    name: string;
  };
  url: string;
  }

interface LatestPostsSidebarProps {
  posts?: Post[];
}

const LatestPostsSidebar = ({
  posts = defaultPosts,
}: LatestPostsSidebarProps) => {
  return (
    <div className="w-full bg-white p-6 rounded-xl border border-gray-100 shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
            onClick={() => window.open(post.url, '_blank')}
          >
            <div className="relative">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-32 object-cover transition-transform hover:scale-105 duration-300"
              />
              <Badge variant="secondary" className="absolute top-2 left-2 bg-blue-600 text-white border-0 hover:bg-blue-700">
                {post.category}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold line-clamp-2 mb-3 text-gray-900 hover:text-blue-600 transition-colors duration-200 leading-tight">
                {post.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="truncate font-medium text-blue-600">
                    {post.author?.name || "Bayan Today"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const defaultPosts: Post[] = [
  {
    id: "1",
    title: "Marcos: 15 contractors got 20% of P545-billion flood control contracts",
    category: "Nation",
    imageUrl:
      "https://images.gmanews.tv/webpics/2025/08/listoffloodcontrolpprojects_2025_08_11_13_54_00.jpg",
    author: {
      name: "GMA News",
    },
    url:"https://www.gmanetwork.com/news/topstories/nation/955471/list-15-contractors-with-most-flood-control-projects/story/",
  },
  {
    id: "2",
    title: "Gorio intensifies into typhoon; Habagat to bring cloudy skies, rains over most of PH",
    category: "Weather",
    imageUrl:
      "https://images.gmanews.tv/webpics/2025/08/Gorio_as_of_5am,_Tuesday_August_12,_2025_2025_08_12_05_33_43.jpg",
    author: {
      name: "GMA News",
      },
      url:"https://www.gmanetwork.com/news/scitech/weather/955565/gorio-intensifies-into-typhoon-habagat-to-bring-cloudy-skies-rains-over-most-of-ph/story/",
  },
  {
    id: "3",
    title: "BSP chief Remolona wants online gambling beyond reach of ayuda beneficiaries",
    category: "Business",
    imageUrl:"https://images.gmanews.tv/webpics/2025/07/bsp_gov_eli_remolona_jr_2025_07_03_17_48_57.jpg",
    author: {
      name: "GMA News",
    },
    url:"https://www.gmanetwork.com/news/money/economy/955505/bsp-chief-remolona-online-gambling-inaccessible-to-ayuda-beneficiaries/story/",
  },
  {
    id: "4",
    title: "Student kills teacher over 'failing grade' in Lanao Del Sur",
    category: "Nation",
    imageUrl:
      "https://www.rappler.com/tachyon/2025/08/Teachers-call-stronger-security-Lanao-del-sur-shooting-August-11-2025.jpg?resize=1280%2C720&zoom=1",
    author: {
      name: "GMA News",
      
    },
    url:"https://www.gmanetwork.com/news/topstories/regions/955550/student-kills-teacher-over-failing-grades-in-lanao-del-sur/story/",
  },
  {
    id: "5",
    title: "Suspended chief says GSIS’ billions-worth of investments have yielded gains",
    category: "Business",
    imageUrl:
      "https://mb.com.ph/manilabulletin/uploads/images/2025/07/25/29452.webp",
    author: {
      name: "GMA News",
      
    },
    url:"https://www.gmanetwork.com/news/money/companies/955520/suspended-chief-says-gsis-billions-worth-of-investments-have-yielded-gains/story/",
  },
];

export default LatestPostsSidebar;
