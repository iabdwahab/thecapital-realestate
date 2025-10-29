export interface PartnerFetchedObject {
  id: number;
  acf: {
    icon: string | false;
    name: string;
    partnership_field: string;
  };
}

export interface PartnerData {
  id: number;
  icon: string | false;
  name: string;
  partnership_field: string;
}
