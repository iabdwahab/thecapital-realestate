export interface WhyUsReasonFetchedObject {
  id: number;
  acf: {
    title: string;
    description: string;
    icon: string | false;
  };
}

export interface WhyUsReasonData {
  id: number;
  title: string;
  description: string;
  icon: string | false;
}
