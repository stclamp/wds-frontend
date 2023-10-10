export interface INavItem {
  id: number;
  title: string;
  url?: string;
  submenu?: INavItem[];
}

export interface IPost {
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

export interface IFormDataPost {
  id: number;
  title: string;
  text: string;
  author: string;
  category: string;
  image: FileList | string;
  image_alt: string;
  read_time: number;
  createdAt: string;
}

export interface IFooterLink {
  title: string;
  url: string;
  icon?: string;
}
