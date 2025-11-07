export interface ReviewsStatisticsFetchedObject {
  id: number;
  acf: {
    statistics_1: StatisticItem;
    statistics_2: StatisticItem;
    statistics_3: StatisticItem;
  };
}

export interface StatisticItem {
  title: string;
  rating: string;
}
