export interface ReviewsFetchedObject {
  id: number;
  acf: {
    text: string;
    rating: "1" | "2" | "3" | "4" | "5";
    author: {
      image: string | false;
      name: string;
      title: string;
    };
  };
}

export interface ReviewData {
  id: number;
  text: string;
  rating: "1" | "2" | "3" | "4" | "5";
  author: {
    image: string | false;
    name: string;
    title: string;
  };
}
