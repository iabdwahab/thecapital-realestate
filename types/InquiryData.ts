export interface InquiryDataFetchedObject {
  acf: InquiryData;
}

export interface InquiryData {
  links: {
    link_1: {
      text: string;
      href: string;
      icon: string | false;
    };
    link_2: {
      text: string;
      href: string;
      icon: string | false;
    };
  };
}
