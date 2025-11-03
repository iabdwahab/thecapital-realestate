export interface HeroSectionFetchedObject {
  acf: HeroSectionData;
}

export interface HeroSectionData {
  logo: string | false;
  title: string;
  description: string;
  link: {
    text: string;
    href: string;
  };
  video_url?: string | false;
}
