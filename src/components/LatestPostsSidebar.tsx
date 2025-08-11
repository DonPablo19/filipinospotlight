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
    <div className="w-full bg-background p-4 rounded-lg border">
      <h2 className="text-xl font-bold mb-4">Latest News</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => window.open(post.url, '_blank')}
          >
            <div className="relative">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-32 object-cover"
              />
              <Badge variant="secondary" className="absolute top-2 left-2">
                {post.category}
              </Badge>
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium line-clamp-2 mb-2">{post.title}</h3>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="truncate">
                    {post.author?.name || "Anonymous"}
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
    title: "15 contractors cornered P100-B worth of flood control projects since 2022: Marcos",
    category: "Nation",
    imageUrl:
      "https://od2-image-api.abs-cbn.com/prod/editorImage/175487998219520250723-valenzuela-kadiwa-flooding-JC1371.jpg",
    author: {
      name: "ABS-CBN News",
    },
    url:"https://www.abs-cbn.com/news/nation/2025/8/11/15-contractors-cornered-p100-b-worth-of-flood-control-projects-since-2022-marcos-1053",
  },
  {
    id: "2",
    title: "Education budget for 2026 to reach 4 percent of GDP: Gatchalian",
    category: "Nation",
    imageUrl:
      "https://od2-image-api.abs-cbn.com/prod/editorImage/175488191530020240112-catch-up%20friday-pinyahan-elementary-school-MT-15.jpg",

    author: {
      name: "ABS-CBN News",
      },
      url:"https://www.abs-cbn.com/news/nation/2025/8/11/education-budget-for-2026-to-reach-4-percent-of-gdp-lawmaker-1240",
  },
  {
    id: "3",
    title: "Diesel, kerosene prices drop big in 2nd week of August",
    category: "Business",
    imageUrl:
      "https://od2-image-api.abs-cbn.com/prod/20250811020816/01dc3811b94d19002233e940855150e98088b443fb07b1e60bc14693b1079839.jpg?w=306&h=204",

    author: {
      name: "ABS-CBN News",
    },
    url:"https://www.abs-cbn.com/news/business/2025/8/11/diesel-kerosene-prices-drop-big-in-2nd-week-of-august-0938",
  },
  {
    id: "4",
    title: "'Sumbong sa Pangulo': Marcos launches website to seek public help in auditing flood control projects",
    category: "Nation",
    imageUrl:
      "https://od2-image-api.abs-cbn.com/prod/editorImage/175487369203220250804-marcos-india-visit-departure-PCO-4.jpg",

    author: {
      name: "ABS-CBN News",
      
    },
    url:"https://www.abs-cbn.com/news/nation/2025/8/11/marcos-launches-website-to-seek-public-help-in-auditing-flood-control-projects-0923",
  },
  {
    id: "5",
    title: "PBB Collab Edition housemates reunite in 'The Big ColLove'",
    category: "Events",
    imageUrl:
      "https://od2-image-api.abs-cbn.com/prod/editorImage/1754845397627viber_image_2025-08-11_00-51-07-324.jpg",

    author: {
      name: "ABS-CBN News",
      
    },
    url:"https://www.abs-cbn.com/entertainment/showbiz/events/2025/8/10/pbb-collab-edition-housemates-reunite-in-the-big-collove-0114",
  },
];

export default LatestPostsSidebar;
