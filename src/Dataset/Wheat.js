export const Wheat = [
  {
    id: 1,
    Name: "Common wheat",
    Kingdom: "Plantae",
    Genus: "Triticum",
    Species: "Triticum aestivum",
    Location: "Punjab, India",
    Latitude: 31.6,
    Longitude: 74.9,
    Diseases: {
      disease1: "Black Chaff",
      disease2: "Wheat Streak Mosaic Virus",
      disease3: "Fusarium Head Blight",
      disease4: "Wheat Dwarf Virus",
    },
    Varieties: [
      {
        index: 1,
        code: "PBW 343",
        type: "Hard Wheat",
        usage: "Bread and baked goods",
      },
      {
        index: 2,
        code: "PBW 502",
        type: "Hard Wheat",
        usage: "Bread and baked goods",
      },
      {
        index: 3,
        code: "HD 2967",
        type: "Soft Wheat",
        usage: "Biscuits and pastries",
      },
      {
        index: 4,
        code: "DL 788-2",
        type: "Durum Wheat",
        usage: "Pasta production",
      },
    ],
    ImageUrl:
      "https://static.grainews.ca/wp-content/uploads/2015/02/black-chaff-on-wheat-universityofnebraska.jpg",
  },
  {
    id: 2,
    Name: "Durum wheat",
    Kingdom: "Plantae",
    Genus: "Triticum",
    Species: "Triticum durum",
    Location: "Haryana, India",
    Latitude: 29.7,
    Longitude: 76.9,
    Diseases: {
      disease1: "Bacterial Mosaic",
      disease2: "Cephalosporium Stripe",
    },
    Varieties: [
      {
        index: 1,
        code: "DL 788-2",
        type: "Durum Wheat",
        usage: "Pasta production",
      },
    ],
    ImageUrl:
      "https://cropwatch.unl.edu/images/hero/2019/wheat-bacterial-streak.jpg",
  },
  {
    id: 3,
    Name: "Emmer wheat",
    Kingdom: "Plantae",
    Genus: "Triticum",
    Species: "Triticum dicoccum",
    Location: "Uttar Pradesh, India",
    Latitude: 26.8,
    Longitude: 80.9,
    Diseases: { disease1: "Root Gall Nematode" },
    Varieties: [
      {
        index: 1,
        code: "PBW 621",
        type: "Disease-Resistant Variety",
        usage: "General wheat production",
      },
    ],
    ImageUrl: "https://bugwoodcloud.org/images/3072x2048/1493005.jpg",
  },
  {
    id: 4,
    Name: "Spelt wheat",
    Kingdom: "Plantae",
    Genus: "Triticum",
    Species: "Triticum spelta",
    Location: "Madhya Pradesh, India",
    Latitude: 23.3,
    Longitude: 77.4,
    Diseases: { disease1: "Fusarium Head Blight" },
    Varieties: [
      {
        index: 1,
        code: "HD 2932",
        type: "High-Yielding Variety",
        usage: "General wheat production",
      },
    ],
    ImageUrl:
      "https://andersonscanada.com/wp-content/uploads/2015/05/FusariumHeadBlight_wheat.jpg",
  },
];
