import React from "react";
import { Card } from "@/components/ui/card";
import ArticleContent from "@/components/ArticleContent";
import LatestPostsSidebar from "@/components/LatestPostsSidebar";
import RelatedArticles from "@/components/RelatedArticles";

const ArticlePage = () => {
  // Mock article data
  const article = {
    title: "The Future of Renewable Energy: Innovations and Challenges",
    description:
      "An in-depth look at the latest developments in renewable energy technology and the obstacles that still need to be overcome for widespread adoption.",
    publishedDate: "May 15, 2023",
    publishedTime: "10:30 AM",
    readTime: "8 min read",
    content: `<p>Renewable energy has come a long way in the past decade. With advancements in solar, wind, and hydroelectric technologies, we're seeing unprecedented growth in clean energy adoption worldwide.</p>
      <p>Solar panel efficiency has increased dramatically while costs have plummeted. Wind turbines are now larger and more efficient than ever before. And new innovations in energy storage are helping to solve the intermittency problem that has long plagued renewable sources.</p>
      <h2>The Solar Revolution</h2>
      <p>Perhaps the most dramatic transformation has occurred in the solar industry. Photovoltaic cells that once converted only a small percentage of sunlight into electricity now routinely achieve efficiency ratings above 20%. Meanwhile, the cost per watt has fallen by more than 70% since 2010.</p>
      <p>This combination of higher efficiency and lower costs has made solar energy competitive with fossil fuels in many markets, even without subsidies. Large-scale solar farms are now common sights in sunny regions, while residential solar installations continue to grow exponentially.</p>
      <h2>Wind Power Scales Up</h2>
      <p>Wind energy has seen similar progress. Modern wind turbines now stand over 200 meters tall with blades longer than football fields. These massive structures can generate enough electricity to power thousands of homes from a single installation.</p>
      <p>Offshore wind farms, once considered too expensive and technically challenging, are now being built at an accelerating pace. These installations take advantage of stronger, more consistent winds over open water, producing more reliable power than their land-based counterparts.</p>
      <h2>The Storage Challenge</h2>
      <p>Despite these advances, one significant challenge remains: storage. Unlike fossil fuels, which can be burned on demand, renewable energy is often produced when it's not immediately needed. Solving this mismatch between supply and demand is critical for renewables to fully replace conventional power sources.</p>
      <p>Battery technology is improving rapidly, with lithium-ion batteries becoming more affordable and energy-dense. Alternative storage methods, such as pumped hydro, compressed air, and hydrogen production, are also being developed and deployed at scale.</p>
      <h2>Looking Ahead</h2>
      <p>The path to a fully renewable energy system still faces obstacles. Grid infrastructure needs updating, regulatory frameworks must evolve, and certain industries remain difficult to decarbonize. However, the momentum behind clean energy is now undeniable.</p>
      <p>With continued innovation and investment, renewable energy has the potential to transform our relationship with electricity, reducing environmental impacts while providing affordable, reliable power to communities worldwide.</p>`,
    author: {
      name: "Dr. Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      title: "Energy Policy Analyst",
    },
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80",
  };

  // Mock latest posts data
  const latestPosts = [
    {
      id: "1",
      title: "Global Climate Summit Reaches Historic Agreement",
      category: "Environment",
      imageUrl:
        "https://images.unsplash.com/photo-1623177623442-558a6f63c891?w=400&q=80",
      publishedAt: new Date("May 12, 2023"),
      author: {
        name: "John Smith",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      },
    },
    {
      id: "2",
      title: "New Study Shows Dramatic Decline in Arctic Ice",
      category: "Science",
      imageUrl:
        "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?w=400&q=80",
      publishedAt: new Date("May 10, 2023"),
      author: {
        name: "Emma Wilson",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      },
    },
    {
      id: "3",
      title: "Electric Vehicle Sales Surpass Traditional Cars in Europe",
      category: "Technology",
      imageUrl:
        "https://images.unsplash.com/photo-1593941707882-a5bba13938c9?w=400&q=80",
      publishedAt: new Date("May 8, 2023"),
      author: {
        name: "Alex Johnson",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      },
    },
    {
      id: "4",
      title: "Breakthrough in Sustainable Building Materials Announced",
      category: "Innovation",
      imageUrl:
        "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=400&q=80",
      publishedAt: new Date("May 5, 2023"),
      author: {
        name: "Maria Garcia",
        avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
      },
    },
  ];

  // Mock related articles data
  const relatedArticles = [
    {
      id: "1",
      title: "How Community Solar Projects Are Changing Energy Access",
      description:
        "Local initiatives are making clean energy available to those previously left out of the solar revolution.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
      date: "May 2, 2023",
    },
    {
      id: "2",
      title: "The Hidden Environmental Cost of Battery Production",
      description:
        "As demand for batteries soars, researchers are working to minimize the ecological impact of mining and manufacturing.",
      image:
        "https://images.unsplash.com/photo-1593941707882-a5bba13938c9?w=600&q=80",
      date: "April 28, 2023",
    },
    {
      id: "3",
      title: "Geothermal Energy: The Overlooked Renewable Resource",
      description:
        "While solar and wind get the headlines, geothermal power offers reliable, constant energy with minimal environmental impact.",
      image:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600&q=80",
      date: "April 22, 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">PHagenda News</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article content - takes up more space */}
          <div className="lg:w-2/3">
            <Card className="p-6 bg-card">
              <ArticleContent
                title={article.title}
                description={article.description}
                publishedDate={article.publishedDate}
                publishedTime={article.publishedTime}
                readTime={article.readTime}
                content={article.content}
                author={article.author}
                image={article.image}
              />
            </Card>
          </div>

          {/* Sidebar - takes up less space */}
          <div className="lg:w-1/3">
            <Card className="p-6 bg-card sticky top-4">
              <LatestPostsSidebar posts={latestPosts} />
            </Card>
          </div>
        </div>

        {/* Related articles section */}
        <div className="mt-12">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2023 PHagenda News. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage;
