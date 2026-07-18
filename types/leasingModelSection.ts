export interface LeasingModelTrack {
  label: string;
  title: string;
  description: string;
}

export interface LeasingModelStep {
  title: string;
  description: string;
}

export interface LeasingModelButton {
  text: string;
  href: string;
}

export interface LeasingModelSectionFetchedObject {
  acf: LeasingModelSectionData;
}

export interface LeasingModelSectionData {
  kicker: string;
  title: string;
  description: string;
  track_1: LeasingModelTrack;
  track_2: LeasingModelTrack;
  merge_label: string;
  step_1: LeasingModelStep;
  step_2: LeasingModelStep;
  step_3: LeasingModelStep;
  banner_title: string;
  banner_description: string;
  banner_button: LeasingModelButton;
}
