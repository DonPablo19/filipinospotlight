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
      title: "Sara Duterte sees cuts in proposed P903-million OVP budget",
      description:
        "Vice President Sara Duterte said that she expected the proposed P903 million budget of the Office of the Vice President for 2026 to be reduced when the General Appropriations Act is passed.",
      image:
        "https://images.gmanews.tv/webpics/2025/08/Screenshot_2025-08-07_at_8_2025_08_07_20_55_47.png",
      category: "Nation",
      readTime: 4,
      date: "August 12, 2025",
      url:"https://www.gmanetwork.com/news/topstories/nation/955554/sara-duterte-ovp-budget-p903-million-reduction/story/",
    },
    {
      id: "2",
      title: "Bus conductor cut in half after getting hit by car, truck in Cavite",
      description:
        "The body of a bus conductor was cut in half after he was hit by a car and then a truck on Sunday morning in General Trias, Cavite.",
      image:
        "https://images.gmanews.tv/webpics/2025/08/Screenshot_2025-08-11_at_9_2025_08_11_21_33_25.png",
      category: "Nation",
      readTime: 5,
      date: "August 11, 2025",
      url:"https://www.gmanetwork.com/news/topstories/nation/955535/bus-conductor-cut-in-half-after-getting-hit-by-car-truck-in-cavite/story/",
    },
    {
      id: "3",
      title: "Lawmakers want names, accountability over flood control projects",
      description:
        "Will contractors of anomalous government flood control projects face charges?",
      image:
        "https://images.gmanews.tv/webpics/2025/08/320_tinio_san_fernando_composite_2025_08_11_16_38_04.jpg",
      category: "Nation",
      readTime: 3,
      date: "August 11, 2025",
      url:"https://www.gmanetwork.com/news/topstories/nation/955487/lawmakers-want-names-accountability-over-flood-control-projects/story/",
    },
    {
      id: "4",
      title: "Schools urged to report bullying cases",
      description:
          "The Council for the Welfare of Children (CWC) on Monday urged schools to report bullying cases to authorities as the implementing rules and regulations of the Anti-Bullying Act mandates educational institutions to respond promptly on such cases.",
      image:
        "https://images.gmanews.tv/webpics/2022/10/reeltime5_2022_10_25_19_16_26.jpg",
      category: "Nation",
      readTime: 4,
      date: "August 11, 2025",
      url:"https://www.gmanetwork.com/news/topstories/nation/955504/schools-urged-to-report-bullying-cases-by-cwc/story/",
    },
    ],
  title = "Related News",
}: RelatedArticlesProps) => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg hover:-translate-y-1"
              onClick={() => window.open(article.url, '_blank')}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <Badge className="absolute top-3 right-3 bg-blue-600 hover:bg-blue-700 border-0">
                  {article.category}
                </Badge>
              </div>
              <CardContent className="flex-grow pt-6">
                <CardTitle className="line-clamp-2 mb-3 text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-sm text-gray-600 leading-relaxed">
                  {article.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="pt-0 pb-6 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center text-blue-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="font-medium">{article.readTime} min read</span>
                </div>
                <span className="text-gray-400">{article.date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
