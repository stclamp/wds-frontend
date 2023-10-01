export interface INavItem {
  id: number;
  title: string;
  url: string;
  submenu?: INavItem[];
}

export interface ICard {
  id: number;
  title: string;
  text: string;
  author: string;
  category: string;
  image: string;
  image_alt: string;
  read_time: number;
  createdAt: string;
}
