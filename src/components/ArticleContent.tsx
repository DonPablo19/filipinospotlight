import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Calendar } from "lucide-react";

interface ArticleContentProps {
  title?: string;
  description?: string;
  publishedDate?: string;
  readTime?: string;
  content?: string;
  author?: {
    name: string;
    avatar: string;
  };
}

const ArticleContent = ({
  title = "The Future of Artificial Intelligence in Healthcare",
  description = "Exploring how AI is revolutionizing medical diagnostics, treatment plans, and patient care across the healthcare industry.",
  publishedDate = "May 15, 2023",
  readTime = "8 min read",
  content = `<p>Artificial intelligence is rapidly transforming the healthcare landscape, offering unprecedented opportunities to improve patient outcomes, reduce costs, and enhance the efficiency of medical services.</p>

<p>Recent advancements in machine learning algorithms have enabled AI systems to analyze medical images with accuracy that rivals—and sometimes exceeds—that of human specialists. These systems can detect subtle patterns in X-rays, MRIs, and CT scans that might be missed by even the most experienced radiologists.</p>

<p>Beyond diagnostics, AI is making significant inroads into treatment planning. By analyzing vast datasets of patient outcomes, AI can help physicians develop personalized treatment plans tailored to individual patients' unique genetic makeup, medical history, and lifestyle factors.</p>

<p>In the realm of patient care, AI-powered chatbots and virtual assistants are providing 24/7 support, answering questions, reminding patients to take medications, and even monitoring vital signs through connected devices. This continuous monitoring allows for early intervention when problems arise, potentially preventing hospital readmissions and emergency room visits.</p>

<p>Despite these promising developments, challenges remain. Issues of data privacy, algorithm bias, and the need for regulatory frameworks that can keep pace with technological innovation are all active areas of concern and research.</p>

<p>As we look to the future, the integration of AI into healthcare will likely accelerate, driven by advances in computing power, improvements in algorithm design, and the growing digitization of medical records. The potential benefits are enormous: more accurate diagnoses, more effective treatments, and more accessible healthcare for people around the world.</p>`,
  author = {
    name: "Dr. Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
  },
}: ArticleContentProps) => {
  return (
    <Card className="w-full bg-white shadow-sm">
      <CardContent className="p-6 md:p-8">
        <div className="space-y-6">
          {/* Article Header */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>

            <p className="text-xl text-gray-600">{description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{publishedDate}</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="h-6 w-6 rounded-full"
                />
                <span>{author.name}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleContent;
