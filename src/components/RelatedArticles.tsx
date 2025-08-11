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
  url: string;
}

interface RelatedArticlesProps {
  articles?: RelatedArticle[];
  title?: string;
}

const RelatedArticles = ({
  articles = [
    {
      id: "1",
      title: "'Tumataya na sila sa llamado': Senate archive vote has 2028 implications - analyst",
      description:
        "A political analyst believes senators who voted to archive the impeachment complaint against Vice President Sara Duterte may have already made up their minds on who they will back in the 2028 presidential election.",
      image:
        "https://i.ytimg.com/vi/adLaCd9sX9I/mqdefault.jpg",
      category: "Nation",
      readTime: 4,
      date: "Aug 11, 2025",
      url:"https://www.abs-cbn.com/news/nation/2025/8/8/refiling-of-impeachment-complaint-against-sara-duterte-in-feb-2026-possible-lawmaker-says-1843",
    },
    {
      id: "2",
      title: "'Senate's not your playground': Escudero calls out Sotto for 'backing' House pursuits",
      description:
        "MANILA — Senate President Francis 'Chiz' Escudero on Monday flagged Senate Minority Leader Vicente 'Tito' Sotto III for supposedly backing the alleged push for a new Charter change by Speaker Martin Romualdez and the House of Representatives.",
      image:
        "https://od2-image-api.abs-cbn.com/prod/editorImage/1754885548882cropped-Screen%20Shot%202025-08-11%20at%2012.11.02%20PM.png",
      category: "Nation",
      readTime: 3,
      date: "Aug 11, 2025",
      url:"https://www.abs-cbn.com/news/nation/2025/8/11/-senate-s-not-your-playground-escudero-calls-out-sotto-for-backing-house-pursuits-1226",
    },
    {
      id: "3",
      title: "WRAP: ‘No cost’ Metro Manila flood solution raises question of hidden price tags",
      description:
        "MANILA — Billionaire Ramon Ang, chairman of San Miguel Corp., announced this week that he and his conglomerate are volunteering to solve Metro Manila’s flooding, an announcement met with applause by mayors and officials at the event.",
      image:
        "https://od2-image-api.abs-cbn.com/prod/20250810100848/d35005b9603517656190c789a773661047c09a0f3bef8efbf1535f71eb1a638b.png?w=306&h=204",
      category: "Nation",
      readTime: 6,
      date: "Aug 10, 2025",
      url:"https://www.abs-cbn.com/news/nation/2025/8/10/-no-cost-metro-manila-flood-solution-raises-question-of-hidden-price-tags-2004",
    },
    {
      id: "4",
      title: "House bill seeks to prioritize on-site, in-city, and near-city resettlement",
      description:
        "MANILA — A House bill has been filed seeking to institutionalize a policy for on-site, in-city or near-city resettlement for communities evicted from their homes.",
      image:
        "https://od2-image-api.abs-cbn.com/prod/editorImage/175481096796720230810-cbd-skyline-shanties-MD-6.jpg",
      category: "Nation",
      readTime: 4,
      date: "Aug 10, 2025",
      url:"https://www.abs-cbn.com/news/nation/2025/8/10/house-bill-seeks-to-prioritize-on-site-in-city-and-near-city-resettlement-1604",
    },
  ],
  title = "Related News",
}: RelatedArticlesProps) => {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => window.open(article.url, '_blank')}
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
