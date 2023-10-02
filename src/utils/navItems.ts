const navItems = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Services',
    submenu: [
      {
        id: 3,
        title: 'Sub-Menu 1',
        url: 'sub1',
      },
      {
        id: 4,
        title: 'Sub-Menu 2',
        submenu: [
          {
            id: 5,
            title: 'Turpis consectetur 3',
            url: 'sub-sub1',
          },
          {
            id: 6,
            title: 'Senectus cursus pretium malesuada.',
            url: 'sub-sub2',
          },
          {
            id: 7,
            title: 'Senectus cursus pretium malesuada.',
            url: 'sub-sub3',
          },
        ],
      },
      {
        id: 8,
        title: 'Turpis consectetur 3',
        url: 'sub3',
      },
      {
        id: 9,
        title: 'Luctus neque frin 4',
        url: 'sub4',
      },
    ],
  },
  {
    id: 10,
    title: 'About',
    url: '/about',
    submenu: [
      {
        id: 15,
        title: 'Sub-Menu 1',
        url: 'sub1',
      },
      {
        id: 16,
        title: 'Sub-Menu 2',
        submenu: [
          {
            id: 17,
            title: 'Turpis consectetur 3',
            url: 'sub-sub1',
          },
          {
            id: 18,
            title: 'Senectus cursus pretium malesuada.',
            url: 'sub-sub2',
          },
          {
            id: 19,
            title: 'Senectus cursus pretium malesuada.',
            url: 'sub-sub3',
          },
        ],
      },
    ],
  },
  {
    id: 11,
    title: 'Book now',
    url: '/book',
  },
  {
    id: 12,
    title: 'Shop',
    submenu: [
      {
        id: 20,
        title: 'Sub-Menu 2',
        submenu: [
          {
            id: 21,
            title: 'Turpis consectetur 3',
            url: 'sub-sub1',
          },
          {
            id: 22,
            title: 'Senectus cursus pretium malesuada.',
            url: 'sub-sub2',
          },
          {
            id: 23,
            title: 'Senectus cursus pretium malesuada.',
            url: 'sub-sub3',
          },
        ],
      },
    ],
  },
  {
    id: 13,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 14,
    title: 'Contact',
    url: '/contact',
  },
];

export default navItems;
