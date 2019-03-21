export const DATA = {
  all: [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/350x350",
      status: "installed", // early stage, etc..
      title: "Pasto Public School - Poc 1kW",
      location: "india basin, san francisco",
      category: "donation", // MUNICIPAL BOND
      genLocation: "Yale / MIT",
      description: {
        text:
          "India Basin is an upcoming creative project based in San Francisco that seeks to invite innovators from all around to participate",
        list: [
          "Research project on smart financing",
          "Critical loads to the Admin Building",
          "Grid-tied and storage"
        ]
      },
      specificsOne: [
        { value: "1 kW", description: "solar" }, // notice: value in here should be case sensitive
        { value: "250 Wh", description: "storage" },
        { value: "0.0", description: "tarrif" },
        { value: "7", description: "stage" }
      ],
      specificsTwo: [
        { value: "0%", description: "return" },
        { value: "n/a", description: "rating" },
        { value: "n/a", description: "tax" },
        { value: "2025", description: "eta" }
      ],
      finances: {
        current: "$2356.23",
        target: "$50000",
        percentage: "4.71%" // this is optional, since it can be calculated on front-end
      }
    }
  ],
  project: [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/350x350",
      status: "installed", // early stage, etc..
      title: "Pasto Public School - Poc 1kW",
      location: "india basin, san francisco",
      category: "donation", // MUNICIPAL BOND
      genLocation: "Yale / MIT",
      description: {
        text:
          "India Basin is an upcoming creative project based in San Francisco that seeks to invite innovators from all around to participate",
        list: [
          "Research project on smart financing",
          "Critical loads to the Admin Building",
          "Grid-tied and storage"
        ]
      },
      specificsOne: [
        { value: "1 kW", description: "solar" }, // notice: value in here should be case sensitive
        { value: "250 Wh", description: "storage" },
        { value: "0.0", description: "tarrif" },
        { value: "7", description: "stage" }
      ],
      specificsTwo: [
        { value: "0%", description: "return" },
        { value: "n/a", description: "rating" },
        { value: "n/a", description: "tax" },
        { value: "2025", description: "eta" }
      ],
      finances: {
        current: "$2356.23",
        target: "$50000",
        percentage: "4.71%" // this is optional, since it can be calculated on front-end
      }
    }
  ]
};
