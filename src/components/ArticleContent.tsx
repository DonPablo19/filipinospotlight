import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

interface ArticleContentProps {
  title?: string;
  description?: string;
  publishedDate?: string;
  readTime?: string;
  content?: string;
}

const ArticleContent = ({
  title = "ALBAYALDE VOWED POLICE REFORMS IN TRAINING INSTITUTE LAUNCH",
  description = "CALAMBA CITY, Philippines — In a public speech released via video on October 7, 2019, Philippine National Police (PNP) Chief General Oscar Albayalde promised that shifting of control of the National Police Training Institute (NPTI) to the PNP would expectedly result in a cleaner police force.",
  publishedDate = "October 7, 2019",
  readTime = "3 min read",
  content = `<p class="mb-6">CALAMBA CITY, Philippines — In a public speech released via video on October 7, 2019, Philippine National Police (PNP) Chief General Oscar Albayalde promised that shifting of control of the National Police Training Institute (NPTI) to the PNP would expectedly result in a cleaner police force.</p>

<p class="mb-6">During the ceremony of the the formal turnover happened at Camp Gen. Vicente Lim, the PNP Chief emphasized that assuming full control over training institutions was necessary to address the existing issues in the conduct and operations of the police force.</p>

<p class="mb-6">Albayalde argued the transfer would empower the organization to implement meaningful reforms through standardized instruction by active-duty and veteran PNP personnel thus fostering discipline, morality, and competence among new recruits and in-service officers.</p>

<p class="mb-6">He had a consistent message discipline, echoing earlier promises following his assumption as PNP Chief in April 2018. He promised a nationwide implementation of the strict enforcement style he championed as former NCRPO Chief. As part of it are intensified surprise inspections, swift dismissals, and zero tolerance for off duty misconduct for internal cleansing across the 190,000 police force.</p>

<p class="mb-6">The endeavor was to directly oversee police training as a strategic solution to systemic corruption, with calls for accountability rooted in command responsibility down to precinct level. He maintained that grounding officers in ethics from the outset was critical to transform the culture of policing.</p>

<p class="mb-6">By taking charge of its own training pipeline, the PNP under Albayalde aimed to bridge policy directives with practical enforcement on the ground. The newly restructured training system was envisioned as the blueprint of a broader disciplinary and reform initiatives.</p>`,
}: ArticleContentProps) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Article Header */}
      <div className="p-8 border-b border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="destructive" className="text-sm font-semibold">
            Police Reform
          </Badge>
          <Badge variant="secondary" className="text-sm">
            Training Institute
          </Badge>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>
        
        <div className="flex items-center gap-6 text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">{publishedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">{readTime}</span>
          </div>
        </div>
        
        <p className="text-xl text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Article Content */}
      <div className="p-8">
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          style={{
            '--tw-prose-spacing': '1.5rem',
            '--tw-prose-paragraph-spacing': '1.5rem'
          } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* Article Footer */}
      <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm font-medium text-gray-900">FILIPINO SPOTLIGHT</p>
              <p className="text-xs text-gray-600">Philippine News Network</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Published on {publishedDate}</p>
            <p className="text-xs text-gray-500">Last updated: {publishedDate}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleContent;
