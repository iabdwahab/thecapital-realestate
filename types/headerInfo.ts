export interface HeaderInfoFetchedObject {
  acf: HeaderInfo;
}

export interface NavLink {
  text: string;
  href: string;
}

export interface HeaderInfo {
  nav_links: Record<string, NavLink>;
}
