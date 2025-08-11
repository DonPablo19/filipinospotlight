import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface RelatedArticle {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: number;
  date: string;
}

interface RelatedArticlesProps {
  articles?: RelatedArticle[];
  title?: string;
}

const RelatedArticles = ({
  articles = [
    {
      id: "1",
      title: "Understanding the Impact of Climate Change on Global Agriculture",
      description:
        "New research reveals how changing weather patterns are affecting crop yields worldwide.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      category: "Environment",
      readTime: 5,
      date: "May 15, 2023",
    },
    {
      id: "2",
      title: "Tech Giants Announce New Collaboration on AI Ethics",
      description:
        "Major technology companies form coalition to establish standards for responsible AI development.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      category: "Technology",
      readTime: 4,
      date: "May 12, 2023",
    },
    {
      id: "3",
      title: "Global Economic Forum Addresses Post-Pandemic Recovery",
      description:
        "World leaders gather to discuss strategies for sustainable economic growth.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Economy",
      readTime: 6,
      date: "May 10, 2023",
    },
    {
      id: "4",
      title: "Breakthrough in Renewable Energy Storage Technology",
      description:
        "Scientists develop new battery technology that could revolutionize clean energy adoption.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
      category: "Science",
      readTime: 3,
      date: "May 8, 2023",
    },
  ],
  title = "Related Articles",
}: RelatedArticlesProps) => {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <Badge className="absolute top-3 right-3">
                  {article.category}
                </Badge>
              </div>
              <CardContent className="flex-grow pt-6">
                <CardTitle className="line-clamp-2 mb-2 text-lg">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-sm text-muted-foreground">
                  {article.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0 pb-4 flex items-center text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{article.readTime} min read</span>
                </div>
                <span className="mx-2">•</span>
                <span>{article.date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
