const mockData = {
	booksData: [
		{
			id: 1,
			name: 'De men phieu luu ki',
			genre: 'Adventure',
			authorId: 4,
		},
		{
			id: 2,
			name: 'Lam giau khong kho',
			genre: 'Education',
			authorId: 5,
		}
	],
	authorsData: [
		{
			id: 4,
			name: 'Ngo Tat To',
			age: 127,
			// bookIds: [1]
		},
		{
			id: 5,
			name: 'Vu Trong Phung',
			age: 109,
			// bookIds: [2]
		},
		{
			id: 6,
			name: 'Nam Cao',
			age: 106,
			// bookIds: []
		}
	]
}

export const mockEventList = [
  {
    id: '6b06f967-5954-4d3b-9d20-7025d2dd3f8e',
    name: 'Atleticom We Run Rome',
    status: 'Published',
    imageUrl: '/images/we-run-rome.png',
    distanceKeys: [
			'637f53b9-b018-41ae-9aeb-d9bec0c89538',
			'0551252a-e1bc-4367-a519-9c8f55e280b1',
			'c33884b9-0ea9-4d69-867d-66fa7fd69d1e',
    ],
    eventLocation: 'Viale delle Caracalla, Rome, Italy',
    eventDate: '2025-12-31T17:00:00.000Z',
    registerStartDate: '2025-12-31T17:00:00.000Z',
    registerEndDate: '2025-12-31T17:00:00.000Z',
    charityIds: ['1', '2', '3', '4', '5']
  },
  {
    id: 'eba0a253-66e1-4fc2-a0be-011d08d71dcd',
    name: 'Il Miglio di Roma - Atleticom',
    status: 'Published',
    imageUrl: '/images/roma-aleticom.png',
    distanceKeys: [
			'637f53b9-b018-41ae-9aeb-d9bec0c89538',
			'0551252a-e1bc-4367-a519-9c8f55e280b1',
			'c33884b9-0ea9-4d69-867d-66fa7fd69d1e',
    ],
    eventLocation: 'Rome, Italy',
    eventDate: '2025-11-09T17:00:00.000Z',
    registerStartDate: '2025-10-01T17:00:00.000Z',
    registerEndDate: '2025-10-T30:00:00.000Z',
    charityIds: ['5', '7']
  },

  {
    id: '70180549-64af-4296-bbd2-6956f9c17dfa',
    name: 'Half Marathon (draft)',
    status: 'Draft',
    imageUrl: '/images/event-image.svg',
    distanceKeys: [
			'637f53b9-b018-41ae-9aeb-d9bec0c89538',
			'0551252a-e1bc-4367-a519-9c8f55e280b1',
			'c33884b9-0ea9-4d69-867d-66fa7fd69d1e',
			'98520cf4-485a-41d6-aa77-c0aeee9d0123',
    ],
    eventLocation: 'Viale delle Terme di Caracalla, Rome',
    eventDate: '31 December 2025'
  },
  {
    id: '63491cce-5006-46d5-bbf1-54f0454933a1',
    name: 'Full Marathon (draft)',
    status: 'Draft',
    imageUrl: '/images/event-image.svg',
    distanceKeys: [
			'637f53b9-b018-41ae-9aeb-d9bec0c89538',
			'0551252a-e1bc-4367-a519-9c8f55e280b1',
			'c33884b9-0ea9-4d69-867d-66fa7fd69d1e',
			'98520cf4-485a-41d6-aa77-c0aeee9d0123',
    ],
    eventLocation: 'Tràng An, Ninh Bình, Việt Nam',
    eventDate: '9 November 2025 '
  },
  {
    id: 'a4016e23-3394-4ad8-a16c-ee6e5e9ad82f',
    name: 'City Run (draft)',
    status: 'Draft',
    imageUrl: '/images/event-image.svg',
    distanceKeys: [
			'637f53b9-b018-41ae-9aeb-d9bec0c89538',
			'0551252a-e1bc-4367-a519-9c8f55e280b1',
    ],
    eventLocation: 'Miri, Sarawak, Malaysia.',
    eventDate: '13 April 2025 '
  }
]

export const distanceMockData = [
  {
    key: '62cc09b8-a2f4-45f4-957a-22e9018de81b',
    distance: '5km',
    feeType: 'flat-fee',
    fee: 20
  },
  {
    key: '57426476-3c38-4baf-acd7-a82647142749',
    distance: '10km',
    feeType: 'flat-fee',
    fee: 60
  },
  {
    key: '2e18808c-263d-4414-9d26-52eada6f7379',
    distance: 'Half marathon',
    feeType: 'flat-fee',
    fee: 80
  },
  {
    key: 'c33884b9-0ea9-4d69-867d-66fa7fd69d1e',
    distance: 'Full marathon',
    feeType: 'flat-fee',
    fee: 100
  }
]

export const mockCharities = [
  {
    id: '1',
    code: 'C-1',
    name: 'Save the children',
    email: 'savechildren@gmail.com',
    description:
      'Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Established from 1/3',
    phoneNumber: '+1 (416) 555-1234',
    isConnectedStripe: true,
    imageUrl: '/images/save-the-children-charity.png'
  },
  {
    id: '2',
    code: 'C-2',
    name: 'American Cancer Society',
    email: 'american.cancer.society@gmail.com',
    description:
      'Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Established from 1/3',
    phoneNumber: '+1 (416) 989-1928',
    isConnectedStripe: true,
    imageUrl: '/images/american-cancer-society-charity.svg'
  },
  {
    id: '3',
    code: 'C-3',
    name: 'Habitat for Humanity',
    email: 'contact@worldwildlife.org',
    description:
      'Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Established from 1/3',
    phoneNumber: '+1 (416) 999-3344',
    isConnectedStripe: true,
    imageUrl: '/images/habitat-for-humanity-charity.svg'
  },
  {
    id: '4',
    code: 'C-4',
    name: 'Medecins sans frontieres',
    email: 'support@unicef.org',
    description:
      'Médecins Sans Frontières (Doctors Without Borders) is an international humanitarian organization providing medical assistance to people affected by conflict, epidemics, natural disasters, and exclusion from healthcare. With a commitment to independence and impartiality, our teams deliver life-saving care in over 70 countries worldwide.',
    phoneNumber: '+1 (416) 555-7890',
    isConnectedStripe: false,
    imageUrl: '/images/doctors-without-borders-charity.png'
  },
  {
    id: '5',
    code: 'C-5',
    name: 'World Wildlife Fund',
    email: 'info@redcross.org',
    description:
      'Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Established from 1/3',
    phoneNumber: '+1 (416) 555-4567',
    isConnectedStripe: true,
    imageUrl: '/images/world-wildlife-fund-charity.png'
  },
  {
    id: '6',
    code: 'C-6',
    name: 'Feeding America',
    email: 'donate@feedingamerica.org',
    description:
      'Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Established from 1/3',
    phoneNumber: '+1 (416) 777-0123',
    isConnectedStripe: false,
    imageUrl: '/images/feeding-america-charity.png'
  },
  {
    id: '7',
    code: 'C-7',
    name: 'The Nature Conservancy',
    email: 'help@habitatforhumanity.org',
    description:
      'Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Established from 1/3',
    phoneNumber: '+1 (416) 888-5678',
    isConnectedStripe: true,
    imageUrl: '/images/habitat-for-humanity-charity.svg'
  },
  {
    id: '8',
    code: 'C-8',
    name: 'Oxfam International',
    email: 'volunteer@stjude.org',
    description:
      'Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Established from 1/3',
    phoneNumber: '+1 (416) 555-2345',
    isConnectedStripe: false,
    imageUrl: '/images/oxfam-international-charity.png'
  },
  {
    id: '9',
    code: 'C-9',
    name: "St. Jude Children's Research Hospital",
    email: 'donations@doctorswithoutborders.org',
    description:
      'Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Established from 1/3',
    phoneNumber: '+1 (416) 222-3456',
    isConnectedStripe: false,
    imageUrl: '/images/jude-children-research-hospital-charity.png'
  },
  {
    id: '10',
    code: 'C-10',
    name: 'The Red Cross',
    email: 'outreach@nature.org',
    description:
      'Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Provides education, healthcare, and emergency aid to children in need worldwide. Established from 1/3',
    phoneNumber: '+1 (416) 444-6789',
    isConnectedStripe: false,
    imageUrl: '/images/red-cross-charity.png'
  }
];


export default mockData;
