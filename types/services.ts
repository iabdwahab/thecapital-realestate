export interface ServiceFetchedObject {
  id: number;
  acf: {
    title: string;
    description: string;
    image: string | false;
    icon: string | false;
    card_link: {
      text: string;
      href: string;
    };
  };
}

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string | false;
  icon: string | false;
  card_link: {
    text: string;
    href: string;
  };
}
