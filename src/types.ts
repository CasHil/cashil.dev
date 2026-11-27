export interface TimelineItemImage {
  uri: string;
  alt: string;
}

export interface TimelineItemData {
  title: string;
  subtitle: string;
  image?: TimelineItemImage;
  text?: string;
  startDate: string;
  endDate: string;
  skills?: string[];
  current?: boolean;
}
