type RetailerURL = {
  root: string;
  paths: string[];
};

const pbtech: RetailerURL = {
  root: "https://www.pbtech.co.nz/category/components",
  paths: [
    "/cpus/amd-desktop-cpus",
    "/cpus/intel-desktop-cpus",
    "/graphics-cards/nvidia-desktop-graphics-cards",
    "/graphics-cards/amd-desktop-graphics-cards",
    "/graphics-cards/intel-desktop-graphics-cards",
  ],
};

const computerlounge: RetailerURL = {
  root: "https://www.computerlounge.co.nz/collections",
  paths: ["/cpus-and-processors", "/graphics-cards"],
};

const mightyape: RetailerURL = {
  root: "https://www.mightyape.co.nz/mn/shop/category/computers",
  paths: ["/pc-parts/cpus", "/graphics-cards"],
};

// TODO: Add playtech URLs
const playtech: RetailerURL = {
  root: "",
  paths: ["", ""],
};

export default { pbtech, computerlounge, mightyape, playtech };
