export type LpStep = {
  title: string;
  description: string;
};

export type LpFaq = {
  question: string;
  answer: string;
};

export type LpOption = {
  title: string;
  description: string;
};

export type LpData = {
  slug: string;
  title: string;
  lead: string;
  ctaLabel: string;
  affiliateUrl: string;
  options: LpOption[];
  steps: LpStep[];
  faqs: LpFaq[];
};

// Keep empty until affiliate links are approved.
// Add entries here when A8.net partnership is confirmed.
export const lpItems: LpData[] = [];
