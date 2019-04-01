export const extraProjectData = [
  {
    id: 5,
    terms: {
      description: 'Proceeds from this project\'s raise are invested in the development of a Proof-of-Concept installation in the Segunda Unidad Pasto School in Aibonito, Puerto Rico. The PoC is part of research initiative of the Yale OpenLab and the Digital Currency Initiative of the MIT Media Lab.',
    },
    opportunity: [
      {
        width: 12,
        content: [
          {
            type: 'title', value: 'Opportunity'
          }
        ]
      },
      {
        width: 8,
        content: [
          {type: 'header', value: 'Description'},
          {
            type: 'text',
            value: 'The public school of SU Pasto is a Montessori-based school located in the town of Aibonito, Puerto Rico and operated by the Instituto Nueva Escuela. After hurricanes Maria and Irma affected the island of Puerto Rico, the school was out of power for over 6 months. However, it operated as a defacto community shelter since its Parent-Teacher Association is a strong cohesive group in the Aibonito community. The school had an emergency generator and was able to cater to community needs during the aftermath. The most important aspect missing for the school was a resilient telecommunication system to connect with first responders.'
          },
          {
            type: 'text',
            value: 'The current project entails the installation of a 1kW system connected to the administrative building’s subpanel. The solar system powers critical loads in the admin building, including emergency lights, a telecommunication system, the principal\'s computer and a mini fridge for first aids. The project is a proof-of-concept installation design and developed by the Yale Openlab and the DCI at the MIT Media Lab. The object is to test the interconnection of the system and the internet connected sensors powering simulated payment mechanisms.'
          },
        ]
      },
      {
        width: 4,
        content: [
          {type: 'header', value: 'Badges & Characteristics'},
          {type: 'image', value: 'https://via.placeholder.com/450x450', height: 348},
        ]
      },
      {
        width: 6,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/7_YaleMIT/2.jpg', height: 319},
        ]
      },
      {
        width: 6,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/7_YaleMIT/5.jpg', height: 319},
        ]
      },
    ],
    context: [
      {
        width: 12,
        content: [
          {type: 'title', value: 'Context'},
        ]
      },
      {
        width: 8,
        content: [
          {
            type: 'text',
            value: 'One and a half years after hurricane Maria hit the island, schools are still exposed to a centralized and high-carbon energy system vulnerable to climate impacts. At the same time, most schools are becoming grass roots community centers facilitating discussions of concerned parents on how to increase climate & social resilience in the whole community.'
          },
          {
            type: 'text',
            value: 'The Puerto Rican (PR) government and the department of education are working to appoint schools as emergency shelters —nodes with robust energy and communication systems— for the community to reach out in the event of unavoidable climate shocks. Financing is a key gap.'
          },
          {
            type: 'text',
            value: 'This project acts as a proof-of-concept finance mechanism and school that be one of emergency shelter school appointed by the government. Its strong role in the Aibonito community also makes it eligible for the solar system to expand into a community microgrid system.'
          },
        ]
      },
      {
        width: 4,
        content: [
          {type: 'image', value: 'https://via.placeholder.com/450x450', height: 248},
        ]
      },
    ],
    engineering: [
      {
        width: 12,
        content: [
          {type: 'title', value: 'Architecture / Project Design'},
        ]
      },
      {
        width: 5,
        content: [
          {type: 'header', value: 'Map Layout'},
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/7_YaleMIT/7.png', height: 538},
        ]
      },
      {
        width: 3,
        content: [
          {type: 'header', value: 'Solar Output'},
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/7_YaleMIT/9.png', height: 538},
        ]
      },
      {
        width: 4,
        content: [
          {type: 'header', value: 'Design Description'},
          {
            type: 'text',
            value: 'The installation was performed over the administration building where the principal office and the representative of the Department of Education sit.. The school has 14 buildings connected to a 300kW substation. The solar system is expected to cover 20% of the admin building for critical loads only.'
          },
          {
            type: 'text',
            value: 'The system size can be expanded from 1 kW up to 5kW to cover a greater % of the building load.'
          },
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/7_YaleMIT/normal.jpg', height: 203},
        ]
      },
    ],
    architecture: [
      {
        width: 12,
        content: [
          {type: 'title', value: 'Engineering / Solar Layout'},
        ]
      },
      {
        width: 5,
        content: [
          {type: 'header', value: 'Installation Archetype'},
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/7_YaleMIT/6.jpg', height: 230},
          {
            type: 'text',
            value: 'This is a model installation in that the solar and battery support only a subpanel of the building circuitry, where only critical loads have been connected. The system is configured as a grid-tied installation, in that the main grid can also support other loads in the panel, and can also be used to power the battery bank. The installation allows for the interconnection of an emergency generator but it is currently not permanently linked to the system.'
          },
        ]
      },
      {
        width: 7,
        content: [
          {type: 'header', value: 'Engineering Layout'},
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/7_YaleMIT/8.png', height: 431},
        ]
      },
      {
        width: 4,
        content: [
          {type: 'header', value: 'IT Infrastructure'},
          {
            type: 'text',
            value: 'Different layers of IoT energy monitoring devices informs of the energy generated by the solar system and the energy consumed by the end-user. This energy data that will eventually use an intermediary oracle, activates payment transactions per kWh at a specified tariff rate and at specific intervals. Energy payment transactions occur between the end-users wallet/account and a main escrow smart contract that accrues the funds and issues payment of interests (i.e. coupons) to investors. Once the accrued funds can cover the original principle, the contracts pays off investors and the bonds matures.'
          },
        ]
      },
      {
        width: 4,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/7_YaleMIT/10.jpg'},
          {
            type: 'text',
            value: 'IoT meters include a Schneider Commbox and the Yale Open Powermer devices equiped with WiFi and Zigbee transfer protocol. A Rasberry Pi acts as a light clients'
          },
        ]
      },
      {
        width: 4,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/7_YaleMIT/11.png', height: 303},
        ]
      },
    ],
    community: [
      {
        width: 12,
        content: [
          {type: 'title', value: 'Community Engagement'},
        ]
      },
      {
        width: 3,
        content: [
          {type: 'header', value: 'Consultation'},
          {type: 'image', value: 'https://via.placeholder.com/450x350', height: 162},
          {
            type: 'text',
            value: 'The MIT and Yale team convened a meeting with the Parent-Teacher Organisation, led by principal Janice Alejandro. Over 50 members of the community gathered to discuss the project, with unanimous approval and significant interest for its replication.'
          },
        ]
      },
      {
        width: 3,
        content: [
          {type: 'header', value: 'Participation'},
          {type: 'image', value: 'https://via.placeholder.com/450x350', height: 162},
          {
            type: 'text',
            value: 'The principal, deputy principal, janitor, two teachers and one parent have volunteered as caretakers of the system to monitor its status, report any qualitative information and coordinate with the operation & maintenance required.'
          },
        ]
      },
      {
        width: 3,
        content: [
          {type: 'header', value: 'Outreach'},
          {type: 'image', value: 'https://via.placeholder.com/450x350', height: 162},
          {
            type: 'text',
            value: 'The system has been installed with instructions so that it can act as a pedagogical site for students to learn about the merits of solar energy, electricity and basic electronics. Talk about solar energy will be given every semester in the context of climate change communication to the community.'
          },
        ]
      },
      {
        width: 3,
        content: [
          {type: 'header', value: 'Governance'},
          {type: 'image', value: 'https://via.placeholder.com/450x350', height: 162},
          {
            type: 'text',
            value: 'The board of the Parent-Teacher Organisation, composed of 5 chairs, will coordinate with the director of the Yale Openlab and the head of strategy at the MIT DCI to define any governance steps that the system requires.'
          },
        ]
      },
    ],
    business: [
      {
        width: 12,
        content: [
          {type: 'title', value: 'Business Numbers & Payment Scheme'},
        ]
      },
      {
        width: 12,
        content: [
          {type: 'header', value: 'General Payment Logic'},
        ]
      },
      {
        width: 7,
        content: [
          {type: 'image', value: 'https://via.placeholder.com/450x450'},
        ]
      },
      {
        width: 5,
        content: [
          {
            type: 'text',
            value: 'The bond issued by the PR Department of Education covered the principle cost, used for labor and materials. The PPA revenue accrues to pay coupons and mature the bond. The MIT is registered as a first-loss guarantor.'
          },
        ]
      },
      {
        width: 12,
        content: [
          {type: 'header', value: 'Capital Expenditure'},
        ]
      },
      {
        width: 9,
        content: [
          {type: 'image', value: 'https://via.placeholder.com/450x450'},
        ]
      },
      {
        width: 3,
        content: [
          {type: 'header', value: 'Note'},
          {
            type: 'text',
            value: 'The expected capital cost of the project were met with a superavit of $3000 thanks to the low-cost labor provided by Genmoji Solar.'
          },
        ]
      },
      {
        width: 12,
        content: [
          {type: 'header', value: 'Project Revenue'},
        ]
      },
      {
        width: 9,
        content: [
          {type: 'image', value: 'https://via.placeholder.com/450x450'},
        ]
      },
      {
        width: 3,
        content: [
          {type: 'header', value: 'Note'},
          {
            type: 'text',
            value: 'The bond issued by the PR Department of Education covered the principle cost, used for labor and materials. The PPA revenue accrues to pay coupons and mature the bond. The MIT is registered as a first-loss guarantor.'
          },
        ]
      },
      {
        width: 12,
        content: [
          {type: 'header', value: 'Project Expenses'},
        ]
      },
      {
        width: 9,
        content: [
          {type: 'image', value: 'https://via.placeholder.com/450x450'},
        ]
      },
      {
        width: 3,
        content: [
          {type: 'header', value: 'Note'},
          {
            type: 'text',
            value: 'The project has an allocated O&M (Operation & Management) expense of $1000 every six months with roll-overs.'
          },
        ]
      },
      {
        width: 12,
        content: [
          {type: 'header', value: 'Net Income'},
        ]
      },
      {
        width: 9,
        content: [
          {type: 'image', value: 'https://via.placeholder.com/450x450'},
        ]
      },
      {
        width: 3,
        content: [
          {type: 'header', value: 'Note'},
          {
            type: 'text',
            value: 'At the present rate of payments, the DofEd is expected to pay off the bond and become full owner of the system by 2025.'
          },
        ]
      },


    ],
    stageAndForecast: {
      graph: {
        imageUrl: 'https://via.placeholder.com/50x50',
        stages: [
          {index: 0, title: 'handshake', date: 'Date'},
          {index: 1, title: 'engagement', date: 'Date'},
          {index: 2, title: 'quotes', date: 'Date'},
          {index: 3, title: 'contracts', date: 'Date'},
          {index: 4, title: 'the raise', date: 'Date'},
          {index: 5, title: 'Construction', date: 'Date'},
          {index: 6, title: 'interconnection', date: 'Date'},
          {index: 7, title: 'legacy', date: 'Date'},
          {index: 8, title: 'the flip', date: 'Date'}
        ],
        currentStage: 7,
        stageName: 'Legacy',
        stageDescription:
          'The project is in the legacy stage, also known as O&M for Operations & Management. This means the system has been successfully funded and deployment, and the receiver is making appropriate schedule.'
      },
      fullTimelineRecords: 'https://www.someurl.com'
    },
    documents: {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus vulputate diam eu pretium. Mauris elit orci, ultricies id fermentum vel, porta et eros. Vestibulum condimentum lectus in convallis feugiat. Sed vulputate fringilla felis. Aliquam ut arcu et dui feugiat scelerisque eu quis diam. Mauris placerat congue dui sit amet blandit. Phasellus condimentum libero vel velit auctor, sit amet tincidunt velit varius.',
      docs: [
        {
          url: 'https://www.documenturl.com',
          title: 'project overview',
          category: 'project portfolio'
        },
        {
          url: 'https://www.documenturl.com',
          title: 'ppa',
          category: 'contract'
        },
        {
          url: 'https://www.documenturl.com',
          title: 're certification agreement',
          category: 'RECS'
        },
        {
          url: 'https://www.documenturl.com',
          title: 'guarantor agreement',
          category: 'investor protection'
        }
      ],
      links: [
        {url: 'https://www.somelink.com', title: 'optional title'},
        {url: 'https://www.somelink.com', title: 'optional title'},
        {url: 'https://www.somelink.com', title: 'optional title'},
        {url: 'https://www.somelink.com', title: 'optional title'}
      ]
    }
  },
  {
    id: 6,
    terms: {
      description: 'Proceeds from this project\'s raise are used to develop a 1MW solar array with a 210 kWh battery bank. The funds will be managed by a smart escrow visible and trackable by investors. $1.5M have been raised previous to this public offering via a Qualified Opportunity Fund ($1M) and the Green Bank ($0.5M). The project has a single solar developer, First Solar, contracted for EPC and O&M.  ',
    },
    opportunity: [
      {
        width: 12,
        content: [
          {
            type: 'title', value: 'OPPORTUNITY'
          }
        ]
      },
      {
        width: 12,
        content: [
          {type: 'header', value: 'Overview'},
          {
            type: 'text',
            value: 'This neighborhood 1 MW solar array will be installed in the the field and warehouse rooftop near the Lancaster Elementary School. The project is originated by the head of the community organization, Ben Northworth, who is also an active member the parent teacher association (PTA). The city of Lancaster, owner of the field and warehouse, has agreed to give a 20 year lease of the land to the project subject to the school owning the solar array after the lease expires. The site is located in an opportunity zone and eligible for tax benefits with capital gains. '
          },
          {type: 'header', value: 'Raise Details'},
          {
            type: 'text',
            value: 'The $2M project cost has already been  capitalized with a blended capital stack: the Catalyst OZ fund provided debt ($1M), the New Hampshire Green Bank has approved low-cost debt for $500k and a guaranteed first-loss escrow of $50’000. The Lancaster Lumber Mill Coop has signed as to the tax equity investor. The present offering seeks to raise the remaining $500K as crowdfunded equity. '
          },
        ]
      },
      {
        width: 6,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/7.jpg', height: 319, imageTitle: 'Lancaster Elementary will own the system after a 15 year lease'},
        ]
      },
      {
        width: 6,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/6.jpg', height: 319, imageTitle: 'First Solar has won the public tender, signing EPC and O&M.'},
        ]
      },
      {
        width: 12,
        content: [
          {type: 'header', value: 'Contractors'},
          {
            type: 'text',
            value: 'Since the project involves government land and property, it went into a public tender. An approved independent engineer designed the RFP,  and the competitive tender was won by First Solar, a recognized solar developer. First Solar contract includes both EPC (Engineering, Procurement and Construction) as well as O&M (Operation & Management). A Tesla Powerpack (210 kWh) battery was donated by the New Hampshire FireFighting Association emergency sheltering.'
          },
          {type: 'header', value: 'Offtakers'},
          {
            type: 'text',
            value: 'The project has a multi-party offtake agreement: Lancaster Elementary School has procured 150kW, the city of Lancaster has agreed to purchase 400 kW (to achieve its climate goal of 80% renewable by 2020), and the Lancaster Lumber Mill Company approved a 150 kW agreement. The remaining 300 kW is in advanced negotiation with New Hampshire Elec Co-op Inc, who will aggregate to provide renewable energy for 400 neighborhood residents (including a subsidy to the 50 lowest income bracket residents). \n'
          },
        ]
      },
      {
        width: 6,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/4.jpg', height: 319},
        ]
      },
      {
        width: 6,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/3.jpg', height: 319},
        ]
      },
      {
        width: 12,
        content: [
          {
            type: 'text',
            value: 'The town of Lancaster has signed the largest offtake agreement to achieve its climate target of 80% renewable by 2020. ',
          },
        ]
      },
    ],
    context: [
      {
        width: 12,
        content: [
          {type: 'title', value: 'Context'},
        ]
      },
      {
        width: 8,
        content: [
          {type: 'text', value: 'The town of Lancaster, New Hampshire is in a registered Opportunity Zone by census tract 06083002502. It belongs to Coos County, and crossed by the Connecticut River. The town is named after the city of Lancaster in England. As of the 2010 census, the town population was 3,507, the second largest in the county after Berlin.[1] It is the county seat of Coos County and gateway to the Great North Woods Region. Lancaster, which includes the villages of Grange and South Lancaster, is home to Weeks State Park and the Lancaster Fair. Part of the White Mountain National Forest is in the eastern portion. The town is part of the Berlin, NH−VT Micropolitan Statistical Area.'},
          {type: 'text', value: 'The primary settlement in town, where 1,725 people resided at the 2010 census,[1] is defined as the Lancaster census-designated place (CDP) and is located at the junctions of U.S. Route 3 and U.S. Route 2, along the Israel River.'},
        ]
      },
      {
        width: 4,
        content: [
          {type: 'image', value: 'https://via.placeholder.com/450x450', height: 248},
        ]
      },
    ],
    engineering: [
      {
        width: 12,
        content: [
          {type: 'title', value: 'Architecture / Project Design'},
        ]
      },
      {
        width: 5,
        content: [
          {type: 'header', value: 'Space Layout'},
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/2.jpg', height: 538},
        ]
      },
      {
        width: 3,
        content: [
          {type: 'header', value: 'Solar Output'},
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/normal.png', height: 169},
        ]
      },
      {
        width: 4,
        content: [
          {type: 'header', value: 'Design Description'},
          {type: 'text', value: 'The 1MW solar array will be distributed in 3 main segments. 400kW will be placed on top of the Lancaster Warehouse, and two 300kW arrays in the nearby field. The system is projects with three inverters, and a utility grade battery bank in one of the fields. The Point of Common Coupling is situated at the Elementary School substation, only 25 meters from the site. The site upgrades are minimum. '},
          {type: 'text', value: 'The fields are not used for any productive purpose so no opportunity cost has been factored in. The fields are not used for any productive purpose so no opportunity cost has been factored in. However, row spacing and panel height will not prevent grass from growing'},
        ]
      },
    ],
    architecture: [
      {
        width: 12,
        content: [
          {type: 'title', value: 'ENGINEERING / SOLAR PROPERTIES'},
        ]
      },
      {
        width: 5,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/9.png', height: 437},
        ]
      },
      {
        width: 7,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/8.png', height: 437},
        ]
      },
      {
        width: 12,
        content: [
          {
            type: 'text',
            value: 'Initial engineering and financial calculations were performed by HST Solar.  The equipment was placed in a way to reduce material and labor costs associated with DC and AC wiring, starting from the Point of Common Coupling. This served as a the basis for the ‘Request for Proposal’ that went into public tender, and won by First Solar. Final engineering documents are available below.'
          },
        ]
      },
    ],
    community: [
      {
        width: 12,
        content: [
          {type: 'title', value: 'Community Engagement'},
        ]
      },
      {
        width: 6,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/5.jpg', height: 320},

        ]
      },
      {
        width: 6,
        content: [
          {type: 'header', value: 'Climate Education, Awareness & Governance'},
          {
            type: 'text',
            value: 'The Parent-Teacher Association at Lancaster’s Elementary has organised a semesterly schedule on climate days in the school. These will engage students on climate change education and awareness, as well organise workshops for both students and teacher on renewable energy. The 1MW solar system will be used in the workshops. The events will also serve to organise town-based climate action organisations such a reforestation projects, and more community energy projects. '
          },
          {
            type: 'text',
            value: 'The board of Lancaster Mutual Solar will convene quarterly at the school, and have agreed to explore digital forms or governance including blockchain based voting. '
          },
          {
            type: 'link',
            link: '#',
            value: 'Access the community engagement report >',
          },
        ]
      },
    ],
    business: [
      {
        width: 12,
        content: [
          {type: 'title', value: 'Business Numbers & Payment Scheme'},
        ]
      },
      {
        width: 12,
        content: [
          {type: 'header', value: 'General Payment Logic'},
        ]
      },
      {
        width: 7,
        content: [
          {type: 'image', value: 'https://via.placeholder.com/450x450'},
        ]
      },
      {
        width: 5,
        content: [
          {
            type: 'text',
            value: 'The project is financed through mixed capitalization. Investment segments include:  finance-first debt through an opportunity fund scheme, low-interest debt, tax-equity, and an impact-first breach guarantor. The current raise will cover the remaining funds through regulation equity crowdfunding. Equity crowdfunders are non-voting partners. '
          },
          {
            type: 'text',
            value: 'The total project cost will be managed by the smart escrow enable by the OpenSolar platform. Waterfall payment to contractors, service providers and dividends will be automatized from the central account. Log-in as a registered party to see account details.'
          },
        ]
      },
      {
        width: 12,
        content: [
          {type: 'header', value: 'Capital Expenditure'},
        ]
      },
      {
        width: 8,
        content: [
          {type: 'image', value: 'https://via.placeholder.com/450x450'},
        ]
      },
      {
        width: 4,
        content: [
          {type: 'header', value: 'Note'},
          {
            type: 'text',
            value: 'The expected capital cost of the project are expected to be met with an excess of $160’000 thanks to the donation of the battery by the Firefight Association.'
          },
        ]
      },
      {
        width: 12,
        content: [
          {type: 'text',highlight: true, value: 'The following are preliminary forecasts and should not be taken as contractual values. Equity investments have embedded risks that may jeopardize these projections. Neither the OpenSolar platform nor project owners are liable for any false interpretations or deviations from these presented numbers. They are orientative alone.'},
        ]
      },
      {
        width: 12,
        content: [
          {type: 'header', value: 'Project Revenue'},
        ]
      },
      {
        width: 6,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/10.png', height: 422},
          {
            type: 'text',
            value: 'The 4 offtakers, each at agreed PPA, constitute the primary source of revenue. Off takers are the school, the town, a local business and a utility aggregator. The other source of revenue comes from the selling of Renewable Energy Certificates to the city of Lancaster. '
          },
        ]
      },
      {
        width: 6,
        content: [
          {type: 'image', value: 'https://images.openx.solar/OpenSolarProjects/4_NH_Lancaster/11.png', height: 432},
          {
            type: 'text',
            value: 'The project has a lifespan of 35 years. As of 2026 (year 7) community member of the mutual will be eligible to acquire the 25% of the company belonging to the equity crowdfunding investors. The land lease has a 15 year period, after which the school and community members become full owners of the system. '
          },
        ]
      },
      {
        width: 12,
        content: [
          {type: 'link',link: '#', value: 'Link to financial projections >'},
        ]
      },
    ],
  }
];