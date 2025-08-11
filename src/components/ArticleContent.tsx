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
  title = "PHILIPPINE POLICE CHIEF: TRACKER TEAMS ON STANDBY TO REARREST FREED CONVICTS",
  description = "Manila, Philippines — In the middle of the rising public outrage over the early release of heinous crime convicts, the Philippine National Police (PNP) lead by General Oscar Albayalde has organized specialized tracker teams ready to rearrest individuals previously freed under the Good Conduct Time Allowance (GCTA) law.",
  publishedDate = "September 4, 2019",
  readTime = "4 min read",
  content = `<p>Manila, Philippines — In the middle of the rising public outrage over the early release of heinous crime convicts, the Philippine National Police (PNP) lead by General Oscar Albayalde has organized specialized tracker teams ready to rearrest individuals previously freed under the Good Conduct Time Allowance (GCTA) law.</p>

<div class=" rounded-lg p-4 text-center my-8">
  <img src="https://thumbs.dreamstime.com/b/cooling-men-s-shampoo-gel-splashing-water-ice-cubes-realistic-plastic-hair-packaging-ad-poster-care-product-design-d-138725540.jpg" alt="Advertisement 1" class="w-96 h-48 mx-auto" />
  <p class="text-sm text-gray-500 mt-2">Sponsored Content</p>
</div>

<p>In an interview, the PNP Chief announced that these teams have been mobilized to closely monitor the freed convicts and act swiftly should the Department of Justice (DOJ) or relevant authorities nullify the inmates' release orders.</p>

<p>Albayalde expressed that they already have tracker teams on standby. He also stressed the police force's preparedness to locate and apprehend the former inmates. He emphasized that they will only act on official orders, reiterating that the rearrests will be carried out in accordance with legal procedures.</p>
<div class=" rounded-lg p-4 text-center my-8">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-JmSei74MZtk7cewhUVsv3RLRqR7NCKjl4w&s" alt="Advertisement 1" class="w-96 h-48 mx-auto" />
  <p class="text-sm text-gray-500 mt-2">Sponsored Content</p>
</div>
<p>The statement follows nationwide backlash after it was revealed that hundreds of inmates convicted of heinous crimes as to rape, murder, and drug trafficking were prematurely released due to the GCTA provision under Republic Act No. 10592. This has drawn strong criticism from the people and lawmakers alike, prompting the government to reevaluate and suspend the implementation of the law for those who were convicted of heinous crimes.</p>

<p>Albayalde gave assurance to the public that the PNP is closely coordinating with the Bureau of Corrections (BuCor) and the DOJ to determine who among the released convicts are subject for rearrest. He also urged the former inmates to voluntarily surrender in case their release is deemed erroneous.</p>
`,
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

             
            </div>
          </div>

          <Separator />

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleContent;
