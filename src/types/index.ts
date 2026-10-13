export type Item = {
  title: string;
  text: string;
  icon?: string;
  image?: string;
  slug?: string;
};

export type SectorMetric = {
  label: string;
  value: string;
  desc: string;
};

export type SectorItem = {
  title: string;
  slug: string;
  category: "all" | "resource" | "infrastructure" | "tactical" | "logistics" | "energy";
  categoryLabel: string;
  tagline: string;
  text: string;
  icon: string;
  image: string;
  metrics: SectorMetric[];
  applications: string[];
  capabilities: string[];
  integratedTech: string[];
  solutions: string[];
};

export type SolutionDetail = {
  heading: string;
  intro: string;
  cap: string[];
  sectors: string[];
  services: string[];
  tech: string[];
};

export type ServiceGroup = {
  title: string;
  intro: string;
  icon: string;
  items: string[];
};

export type TechGroup = {
  title: string;
  icon: string;
  items: string[];
};

export type NewsItem = {
  title: string;
  category: string;
  date: string;
  text: string;
  image: string;
};

export type TeamMember = {
  name: string;
  role: string;
  department: string;
  image: string;
  category: string;
  credential?: string;
};

export type CareerItem = {
  title: string;
  text: string;
  icon: string;
  department?: string;
  location?: string;
  type?: string;
};
