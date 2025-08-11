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
  publishedAt: Date;
  author: {
    name: string;
    avatarUrl: string;
  };
}

interface LatestPostsSidebarProps {
  posts?: Post[];
}

const LatestPostsSidebar = ({
  posts = defaultPosts,
}: LatestPostsSidebarProps) => {
  return (
    <div className="w-full bg-background p-4 rounded-lg border">
      <h2 className="text-xl font-bold mb-4">Latest Posts</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="overflow-hidden hover:shadow-md transition-shadow"
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
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src={post.author?.avatarUrl}
                      alt={post.author?.name || "Author"}
                    />
                    <AvatarFallback>
                      {post.author?.name?.charAt(0) || "A"}
                    </AvatarFallback>
                  </Avatar>
                  <span className="truncate">
                    {post.author?.name || "Anonymous"}
                  </span>
                </div>
                <span>
                  {formatDistanceToNow(post.publishedAt, { addSuffix: true })}
                </span>
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
    title: "Understanding the Impact of AI on Modern Journalism",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1677442135136-760c813170d3?w=500&q=80",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    author: {
      name: "Sarah Johnson",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
  },
  {
    id: "2",
    title:
      "Climate Change: New Study Reveals Accelerated Impact on Coastal Regions",
    category: "Environment",
    imageUrl:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500&q=80",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
    author: {
      name: "Michael Chen",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
  },
  {
    id: "3",
    title: "Global Markets React to New Economic Policies",
    category: "Finance",
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    author: {
      name: "Elena Rodriguez",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=elena",
    },
  },
  {
    id: "4",
    title: "The Rise of Remote Work: How Companies Are Adapting",
    category: "Business",
    imageUrl:
      "https://images.unsplash.com/photo-1584931423298-c576fda54bd2?w=500&q=80",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 36), // 1.5 days ago
    author: {
      name: "David Wilson",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  },
  {
    id: "5",
    title: "New Breakthrough in Renewable Energy Storage",
    category: "Science",
    imageUrl:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&q=80",
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
    author: {
      name: "Priya Patel",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    },
  },
];

export default LatestPostsSidebar;
