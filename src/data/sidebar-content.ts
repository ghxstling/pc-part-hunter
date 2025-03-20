export type SidebarContentData = {
  name: string;
  navMain: {
    title: string;
    items: { title: string; url: string; active: boolean }[];
  }[];
};

export const CPU: SidebarContentData = {
  name: "CPUs",
  navMain: [
    {
      title: "CPU Family",
      items: [
        {
          title: "AMD Ryzen 3",
          url: "#",
          active: false,
        },
        {
          title: "AMD Ryzen 5",
          url: "#",
          active: false,
        },
        {
          title: "AMD Ryzen 7",
          url: "#",
          active: false,
        },
        {
          title: "AMD Ryzen 9",
          url: "#",
          active: false,
        },
        {
          title: "Intel Core i3",
          url: "#",
          active: false,
        },
        {
          title: "Intel Core i5 / Ultra 5",
          url: "#",
          active: false,
        },
        {
          title: "Intel Core i7 / Ultra 7",
          url: "#",
          active: false,
        },
        {
          title: "Intel Core i9 / Ultra 9",
          url: "#",
          active: false,
        },
      ],
    },
    {
      title: "CPU Generation",
      items: [
        {
          title: "AMD Ryzen 3000 Series",
          url: "#",
          active: false,
        },
        {
          title: "AMD Ryzen 5000 Series",
          url: "#",
          active: false,
        },
        {
          title: "AMD Ryzen 7000 Series",
          url: "#",
          active: false,
        },
        {
          title: "AMD Ryzen 9000 Series",
          url: "#",
          active: false,
        },
        {
          title: "Intel 12th Generation",
          url: "#",
          active: false,
        },
        {
          title: "Intel 13th Generation",
          url: "#",
          active: false,
        },
        {
          title: "Intel 14th Generation",
          url: "#",
          active: false,
        },
        {
          title: "Intel Core Ultra 200",
          url: "#",
          active: false,
        },
      ],
    },
    {
      title: "CPU Socket",
      items: [
        {
          title: "AMD AM4",
          url: "#",
          active: false,
        },
        {
          title: "AMD AM5",
          url: "#",
          active: false,
        },
        {
          title: "Intel LGA1700",
          url: "#",
          active: false,
        },
        {
          title: "Intel LGA1851",
          url: "#",
          active: false,
        },
      ],
    },
  ],
};

export const GPU: SidebarContentData = {
  name: "Graphics Cards",
  navMain: [
    {
      title: "GPU Generation",
      items: [
        {
          title: "NVIDIA RTX 3000 Series",
          url: "#",
          active: false,
        },
        {
          title: "NVIDIA RTX 4000 Series",
          url: "#",
          active: false,
        },
        {
          title: "NVIDIA RTX 5000 Series",
          url: "#",
          active: false,
        },
        {
          title: "AMD RX 5000",
          url: "#",
          active: false,
        },
        {
          title: "AMD RX 7000",
          url: "#",
          active: false,
        },
        {
          title: "AMD RX 9000",
          url: "#",
          active: false,
        },
      ],
    },
    {
      title: "Brand",
      items: [
        {
          title: "ASUS",
          url: "#",
          active: false,
        },
        {
          title: "Gigabyte",
          url: "#",
          active: false,
        },
        {
          title: "MSI",
          url: "#",
          active: false,
        },
        {
          title: "GALAX",
          url: "#",
          active: false,
        },
        {
          title: "PNY",
          url: "#",
          active: false,
        },
        {
          title: "Zotac",
          url: "#",
          active: false,
        },
        {
          title: "Asrock",
          url: "#",
          active: false,
        },
        {
          title: "Powercolor",
          url: "#",
          active: false,
        },
        {
          title: "Sapphire",
          url: "#",
          active: false,
        },
      ],
    },
  ],
};
