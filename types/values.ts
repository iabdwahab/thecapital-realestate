export interface ValueFetchedObject {
  id: number;
  acf: {
    title: string;
    description: string;
    icon: string | false;
  };
}

export interface ValueData {
  id: number;
  title: string;
  description: string;
  icon: string | false;
}
