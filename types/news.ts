export interface NewsFetchedObject {
  id: number;
  acf: {
    image: string | false;
    title: string;
    short_description: string;
    date: string;
  };
}

export interface NewsData {
  id: number;
  image: string | false;
  title: string;
  short_description: string;
  date: string;
}
