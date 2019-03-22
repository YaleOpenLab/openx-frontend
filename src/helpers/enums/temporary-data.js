export const DATA = {
  explore: [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/550x350",
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
      main: {
        id: 1,
        imageUrl: "https://via.placeholder.com/550x350",
        imageUrl2: "https://via.placeholder.com/150x90",
        status: "installed", // early stage, etc..
        title: "Pasto Public School - Poc 1kW",
        location: "india basin, san francisco",
        category: "donation", // MUNICIPAL BOND
        genLocation: "Yale / MIT",
        description: {
          text:
            "India Basin is an upcoming creative project based in San Francisco that seeks to invite innovators from all around to participate",
          list: [
            {text: "Research project on smart financing", id: 1},
            {text: "Critical loads to the Admin Building", id: 2},
            {text: "Grid-tied and storage", id: 3}
          ]
        },
        specificsOne: [
          { value: "1 kW", desc: "solar" }, // notice: value in here should be case sensitive
          { value: "250 Wh", desc: "storage" },
          { value: "0.0", desc: "tarrif" },
          { value: "7", desc: "stage" }
        ],
        specificsTwo: [
          { value: "0%", desc: "return" },
          { value: "n/a", desc: "rating" },
          { value: "n/a", desc: "tax" },
          { value: "2025", desc: "eta" }
        ],
        finances: {
          current: "$2356.23",
          target: "$50000",
          percentage: 4.71 // this is optional, since it can be calculated on front-end
        }
      },
      terms: {
        title: "Purpose",
        description:
          "Proceeds from this project's raise are invested in the development of a Proof-of-Concept installation in the Segunda Unidad Pasto School in Aibonito, Puerto Rico. The PoC is part of research initiative of the Yale OpenLab and the Digital Currency Initiative of the MIT Media Lab.",
        table: [
          {
            index: 1,
            variable: "security type",
            value: "municipal bond",
            relevantParty: "PR DofED",
            note: "promoted by pr governor's office",
            status: "demo",
            supportDoc: "doc_url"
          },
          {
            index: 2,
            variable: "security type",
            value: "municipal bond",
            relevantParty: "PR DofED",
            note: "promoted by pr governor's office",
            status: "demo",
            supportDoc: "doc_url"
          },
          {
            index: 3,
            variable: "security type",
            value: "municipal bond",
            relevantParty: "PR DofED",
            note: "promoted by pr governor's office",
            status: "demo",
            supportDoc: "doc_url"
          },
        ],
        securityNote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis",
        securityLink: "http://www.someurl.com"
      },
      projectOverview: {
        summary: [
          {
            title: "investment",
            icon: "money-icon",
            parts: [
              { value: "$ 5000", desc: "capex" },
              { value: "60 %", desc: "hardware" },
              { value: "30 %", desc: "first loss escrow" },
              { value: "n/a", desc: "certification cost" }
            ]
          },
          {
            title: "financials",
            icon: "handout-icon",
            parts: [
              { value: "3.1 %", desc: "return (tey)" },
              { value: "Premium", desc: "insurance" },
              { value: "0.24 ct/kWh", desc: "first loss escrow" },
              { value: "2028", desc: "maturity (variable)" }
            ]
          },
          {
            title: "project size",
            icon: "settings-icon",
            parts: [
              { value: "1 kW", desc: "pv solar" },
              { value: "200 Wh", desc: "storage" },
              { value: "2 %", desc: "% critical" },
              { value: "2.5 kW", desc: "inverter capacity" }
            ]
          },
          {
            title: "sustainability metrics",
            icon: "preferences-icon",
            parts: [
              { value: "0.1 t/kWh", desc: "carbon drawdpwn" },
              { value: "5/7", desc: "community value" },
              { value: "n/a", desc: "lca" },
              { value: "80 %", desc: "resilience rating" }
            ]
          }
        ],
        bannerImage: "https://via.placeholder.com/1500x450",
        opportunity: {
          partOne: [
            {
              title: "description",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius. Mauris lacinia porta faucibus."
            },
            {
              title: "badges & charasteristics",
              content: "https://via.placeholder.com/350x350" // image dimensions are just an example
            },
            {
              title: "impact & system metrics",
              content: "https://via.placeholder.com/350x350"
            }
          ],
          partTwo: [
            { image: "https://via.placeholder.com/350x350" },
            { image: "https://via.placeholder.com/350x350" }
          ]
        },
        context: {
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius. Mauris lacinia porta faucibus. Fusce eu est ac eros vulputate mollis in ac felis. Aenean commodo scelerisque mi sed imperdiet. Donec at hendrerit nisi, eget vestibulum nisi. Sed sit amet magna luctus, facilisis erat quis, sagittis ligula. Aenean dignissim velit quis leo consequat ultricies. Proin quis pretium justo. Vestibulum at eros nisl.",
          image: "https://via.placeholder.com/450x250"
        }
      },
      project: {
        architecture: [
          {
            title: "map layout",
            image: "https://via.placeholder.com/450x450"
          },
          {
            title: "solar output",
            image: "https://via.placeholder.com/450x250",
            list: [
              { value: "XXX", desc: "item name" },
              { value: "Text", desc: "item name" },
              { value: "000", desc: "item name" },
              { value: "Text", desc: "item name" }
            ]
          },
          {
            title: "Design Description",
            image: "https://via.placeholder.com/450x250",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius. Mauris lacinia porta faucibus. Fusce eu est ac eros vulputate mollis in ac felis. Aenean commodo scelerisque mi sed imperdiet. Donec at hendrerit nisi, eget vestibulum nisi. Sed sit amet magna luctus, facilisis erat quis, sagittis ligula. Aenean dignissim velit quis leo consequat ultricies. Proin quis pretium justo. Vestibulum at eros nisl. Fusce lobortis erat ante, eu cursus sapien molestie at. Pellentesque placerat ante diam, et euismod lacus dictum vel. Phasellus vitae sollicitudin mi. In pulvinar eleifend convallis. Suspendisse elit erat, venenatis eget ullamcorper ut, laoreet iaculis nisl. Sed porta, felis id rhoncus aliquet, quam ipsum pellentesque metus, in sodales quam nunc vitae risus. Quisque in venenatis massa. Phasellus neque risus, ornare quis nisl ultricies, ullamcorper consectetur orci."
          }
        ],
        engineering: {
          content: [
            {
              title: "installation archetype",
              image: "https://via.placeholder.com/350x350",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis."
            },
            {
              title: "installation archetype",
              image: "https://via.placeholder.com/450x250"
            },
            {
              title: "IT infrastructure",
              descriptionOne:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.",
              imageOne: "https://via.placeholder.com/450x250",
              descriptionTwo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugia",
              imageTwo: "https://via.placeholder.com/450x350"
            }
          ],
          linkToDocument: "https://www.someurl.com"
        },
        communityEngagement: {
          content: [
            {
              title: "consultation",
              image: "https://via.placeholder.com/450x350",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasdapibus vulputate diam eu pretium"
            },
            {
              title: "participation",
              image: "https://via.placeholder.com/450x350",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasdapibus vulputate diam eu pretium"
            },
            {
              title: "outreach",
              image: "https://via.placeholder.com/450x350",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasdapibus vulputate diam eu pretium"
            },
            {
              title: "governance",
              image: "https://via.placeholder.com/450x350",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasdapibus vulputate diam eu pretium"
            }
          ],
          linkToDocument: "https://www.someurl.com"
        },
        businessAndPayment: {
          content: [
            {
              title: "General Payment Logic",
              image: "https://via.placeholder.com/550x150",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasdapibus vulputate diam eu pretium"
            },
            {
              title: "Capital Expenditure",
              image: "https://via.placeholder.com/550x150",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasdapibus vulputate diam eu pretium"
            },
            {
              title: "Project Revenue",
              image: "https://via.placeholder.com/550x150",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasdapibus vulputate diam eu pretium"
            },
            {
              title: "Net Income",
              image: "https://via.placeholder.com/550x150",
              text:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crasdapibus vulputate diam eu pretium"
            }
          ],
          linkToDocument: "https://www.someurl.com"
        }
      },
      stageAndForecast: {
        graph: {
          imageUrl: "https://via.placeholder.com/50x50",
          stages: [
            { index: 0, title: "handshake", date: "Date" },
            { index: 1, title: "engagement", date: "Date" },
            { index: 2, title: "quotes", date: "Date" },
            { index: 3, title: "contracts", date: "Date" },
            { index: 4, title: "the raise", date: "Date" },
            { index: 5, title: "Construction", date: "Date" },
            { index: 6, title: "interconnection", date: "Date" },
            { index: 7, title: "legacy", date: "Date" },
            { index: 8, title: "the flip", date: "Date" }
          ],
          currentStage: 7,
          stageName: "Legacy",
          stageDescription:
            "The project is in the legacy stage, also known as O&M for Operations & Management. This means the system has been successfully funded and deployment, and the receiver is making appropriate schedule."
        },
        fullTimelineRecords: "https://www.someurl.com"
      },
      documents: {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.",
        docs: [
          {
            url: "https://www.documenturl.com",
            title: "project overview",
            category: "project portfolio"
          },
          {
            url: "https://www.documenturl.com",
            title: "ppa",
            category: "contract"
          },
          {
            url: "https://www.documenturl.com",
            title: "re certification agreement",
            category: "RECS"
          },
          {
            url: "https://www.documenturl.com",
            title: "guarantor agreement",
            category: "investor protection"
          }
        ],
        links: [
          { url: "https://www.somelink.com", title: "optional title" },
          { url: "https://www.somelink.com", title: "optional title" },
          { url: "https://www.somelink.com", title: "optional title" },
          { url: "https://www.somelink.com", title: "optional title" }
        ]
      }
    }
  ]
};
