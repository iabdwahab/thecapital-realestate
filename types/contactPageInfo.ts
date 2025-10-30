export interface ContactPageInfoFetchedObject {
  acf: ContactPageInfo;
}

export interface ContactPageInfoCard {
  icon: string | false;
  title: string;
  description: string;
}

export interface ContactPageInfo {
  contact_info: Record<string, ContactPageInfoCard>;
  google_maps_location: string;
}
