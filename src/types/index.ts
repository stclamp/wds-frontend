export interface INavItem {
  id: number;
  title: string;
  url: string;
  submenu?: INavItem[];
}
