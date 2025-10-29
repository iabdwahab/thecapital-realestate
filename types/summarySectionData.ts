export interface SummarySectionDataFetchedObject {
  acf: SummarySectionData;
}

export interface SummarySectionData {
  title: string;
  description: string;
  section_button: {
    text: string;
    href: string;
  };
  image: string | false;
}
