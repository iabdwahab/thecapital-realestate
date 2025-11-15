export interface AboutPageInfoFetchedObject {
  acf: AboutPageInfo;
}

export interface AboutPageInfoCard {
  icon: string | false;
  title: string;
  description: string;
}

export interface AboutPageInfo {
  our_story_section: OurStorySectionInfo;
  vision_message: {
    card_1: AboutPageInfoCard;
    card_2: AboutPageInfoCard;
  };
}

export interface OurStorySectionInfo {
  title: string;
  description: string;
  image: string | false;
  vision_image: string | false;
}
