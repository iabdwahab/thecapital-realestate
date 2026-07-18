export interface NewsFetchedObject {
  id: number;
  date: string;
  acf: {
    slug: string;
    image: string | false;
    title: string;
    short_description: string;
    news_info: string;
  };
}

export interface NewsData {
  id: number;
  slug: string;
  image: string | false;
  title: string;
  short_description: string;
  date: string;
  news_info: string;
}
