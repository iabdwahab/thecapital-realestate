export interface NewsGallery {
  image_1: string | false;
  image_2: string | false;
  image_3: string | false;
  image_4: string | false;
  image_5: string | false;
  image_6: string | false;
  video_1: string | false;
  video_2: string | false;
}

export interface NewsFetchedObject {
  id: number;
  date: string;
  acf: {
    slug: string;
    image: string | false;
    title: string;
    short_description: string;
    news_info: string;
    news_gallery: NewsGallery;
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
  news_gallery: NewsGallery;
}
