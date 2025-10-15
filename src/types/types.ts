export interface card {
  image: string;
  name: string;
  pronunciation: string;
  english_name: string;
  description: string;
  showImage?: boolean;
}

export interface CardWithState extends card {
  showImage: boolean;
  flipped: boolean;
  image: string;
}