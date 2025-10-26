export interface ServiceFetchedObject {
  id: number;
  acf: {
    title: string;
    description: string;
    image: string | false;
    icon: string | false;
  };
}

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string | false;
  icon: string | false;
}
