export interface PartnersCTAFetchedObject {
  acf: {
    card_1: PartnersCTACard;
    card_2: PartnersCTACard;
  };
}

export interface PartnersCTACard {
  title: string;
  description: string;
  features: Record<string, string>;
  link: {
    text: string;
    href: string;
  };
}

export interface PartnersCTAData {
  card_1: PartnersCTACard;
  card_2: PartnersCTACard;
}
