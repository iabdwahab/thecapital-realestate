export interface NewsFetchedObject {
  id: number;
  date: string;
  acf: {
    image: string | false;
    title: string;
    short_description: string;
  };
}

export interface NewsData {
  id: number;
  image: string | false;
  title: string;
  short_description: string;
  date: string;
}
