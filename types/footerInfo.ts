export interface FooterInfoFetchedObject {
  acf: {
    contact_info: {
      location: string;
      phone_number: string;
      working_hours: string;
      email: string;
    };
    social_media: Record<string, SocialMediaAccount>;
  };
}

export interface FooterInfo {
  contact_info: FooterContactInfo;
  social_media: Record<string, SocialMediaAccount>;
}

export interface FooterContactInfo {
  location: string;
  phone_number: string;
  working_hours: string;
  email: string;
}

export interface SocialMediaAccount {
  logo: string | false;
  href: string;
}
