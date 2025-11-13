export interface ProjectFetchedObject {
  id: number;
  acf: {
    title: string;
    description: string;
    image: string | false;
    icon: string | false;
    location: string;
    units: string;
    area: string;
    type: "سكني" | "تجاري";
    status: string;
    card_link: {
      text: string;
      href: string;
    };
  };
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string | false;
  icon: string | false;
  location: string;
  units: string;
  area: string;
  type: "سكني" | "تجاري";
  status: string;
  card_link: {
    text: string;
    href: string;
  };
}
