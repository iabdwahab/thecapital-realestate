export interface PageHeadingFetchedObject {
  id: number;
  slug: string;
  acf: {
    title: string;
    description: string;
  };
}

export interface SectionHeadingData {
  id: number;
  slug: string;
  title: string;
  description: string;
}
