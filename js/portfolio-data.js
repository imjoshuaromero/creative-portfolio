// Portfolio Data - Easy Manual Updates
// Simply add, edit, or remove items from this array to update your portfolio

const portfolioData = [
    {
        id: 1,
        title: 'JERSEY Design',
        category: 'apparel',
        description: 'Department team jersey design',
        images: ['designs/shirt-jersey.jpg', 'designs/sando-jersey.jpg', 'designs/warmer.png'], // Can add multiple images in array
        dateAdded: '2025-01-01'
    },
    {
        id: 2,
        title: 'Polo Shirt Design',
        category: 'apparel',
        description: 'Strand Shirt',
        images: ['designs/polo-shirt1.png'],
        dateAdded: '2025-01-02'
    },
    {
        id: 3,
        title: 'Polo Shirt Design',
        category: 'apparel',
        description: 'Editorial design for lifestyle magazine',
        images: ['designs/orgshirt.png', 'designs/orgshirt2.jpg'],
        dateAdded: '2025-01-03'
    },
    {
        id: 4,
        title: 'Track Selection',
        category: 'pubmats',
        description: 'Track selection material',
        images: ['designs/track-pubmat.jpg'],
        dateAdded: '2025-01-04'
    },
    {
        id: 5,
        title: 'DP Blast',
        category: 'pubmats',
        description: 'Department promotional blast design',
        images: ['designs/dp-blast.jpg'],
        dateAdded: '2025-01-05'
    },
    {
        id: 6,
        title: 'Magazine',
        category: 'print',
        description: 'Magazine Design Layout',
        images: ['designs/magazine/cover.jpg', 'designs/magazine/back.jpg', 'designs/magazine/content1.jpg', 'designs/magazine/content2.jpg', 'designs/magazine/content3.jpg'],
    },
    {
        id: 7,
        title: 'Esports MVP',
        category: 'pubmats',
        description: 'Esports team branding and merchandise design',
        images: ['designs/esports-mvp.png'], // Example with one image
        dateAdded: '2025-01-07'
    },
    {
        id: 8,
        title: 'XMAS Party Poster',
        category: 'pubmats',
        description: 'XMAS Party event poster design',
        images: ['designs/xmas-party-pubmat.jpg'],
        dateAdded: '2025-01-08'
    },
    {
        id: 9,
        title: 'Teachers Day Poster',
        category: 'pubmats',
        description: 'Teachers Day event poster design',
        images: ['designs/teachers-day.jpg'],
        dateAdded: '2025-01-09'
    },
    {
        id: 10,
        title: 'DP Blast',
        category: 'pubmats',
        description: 'Sportsfest Department DP Blast design',
        images: ['designs/intrams-dpblast.png'],
        dateAdded: '2025-01-10'
    },
    {
        id: 11,
        title: 'Block Cover',
        category: 'others',
        description: 'Group Chat Photo Cover',
        images: ['designs/block-cover.jpg'],
        dateAdded: '2025-01-11'
    },
    {
        id: 12,
        title: 'Top Students Poster',
        category: 'pubmats',
        description: 'Event poster design for top students recognition',
        images: ['designs/top-st1.jpg', 'designs/top-st2.jpg'],
        dateAdded: '2025-01-12'
    },
    {
        id: 13,
        title: 'Badminton Tryouts Poster',
        category: 'pubmats',
        description: 'Event poster design for badminton tryouts',
        images: ['designs/sports-tryouts/badminton.jpg'],
        dateAdded: '2025-01-13'
    },
    {
        id: 14,
        title: 'Chess Tryouts Poster',
        category: 'pubmats',
        description: 'Event poster design for chess tryouts',
        images: ['designs/sports-tryouts/chess.jpg'],
        dateAdded: '2025-01-13'
    },
    {
        id: 15,
        title: 'Partylist Poster',
        category: 'pubmats',
        description: 'Event poster design for partylist elections',
        images: ['designs/partylist/1.png', 'designs/partylist/2.png'],
        dateAdded: '2025-01-13'
    },
    {
        id: 16,
        title: 'Product Poster Design',
        category: 'print',
        description: 'Product advertisement poster design',
        images: ['designs/marketing-poster/1.png', 'designs/marketing-poster/2.png'],
        dateAdded: '2025-01-13'
    },
    {
        id: 17,
        title: 'Infographic Design',
        category: 'print',
        description: 'Informative infographic design',
        images: ['designs/infographics/1.jpg', 'designs/infographics/4.jpg', 'designs/infographics/5.jpg'],
        dateAdded: '2025-01-13'
    },
    {
        id: 18,
        title: 'Brochure Design',
        category: 'print',
        description: 'Promotional brochure design',
        images: ['designs/brochure/BACK.jpg', 'designs/brochure/FRONT.jpg'],
        dateAdded: '2025-01-13'
    },
    {
        id: 19,
        title: 'Debut Invitation Design',
        category: 'print',
        description: 'Elegant debut invitation card design',
        images: ['designs/debut-invi1.jpg', 'designs/debut-invi2.jpg'],
        dateAdded: '2025-01-13'
    },
    {
        id: 20,
        title: 'Top Students Poster',
        category: 'pubmats',
        description: 'Event poster design for top students recognition',
        images: ['designs/top-students-pubmat/1.jpg', 'designs/top-students-pubmat/CUDALA.jpg'],
        dateAdded: '2025-01-13'
    },
    {
        id: 21,
        title: 'Teaser Countdown Design',
        category: 'pubmats',
        description: 'Event teaser countdown design',
        images: ['designs/1DAY.png'],
        dateAdded: '2025-01-13'
    },
    {
        id: 22,
        title: 'Tarpaulin Designs',
        category: 'others',
        description: 'Event tarpaulin designs for various occasions',
        images: ['designs/birthday-tarp1.jpg', 'designs/christening-tarp1.jpg'],
        dateAdded: '2025-01-13'
    },
    {
        id: 23,
        title: 'Officers Posting Design',
        category: 'pubmats',
        description: 'Officers posting announcement design',
        images: ['designs/officers-posting/MAIN.jpg', 'designs/officers-posting/TEMPLATE.jpg'],
        dateAdded: '2025-01-13'
    },
    {
        id: 24,
        title: 'Birthday Poster Design',
        category: 'pubmats',
        description: 'Birthday event poster design',
        images: ['designs/JOSH.png'],
        dateAdded: '2025-01-13'
    },
    {
        id: 25,
        title: 'FCUP Event Poster',
        category: 'pubmats',
        description: 'Event poster design for FCUP',
        images: ['designs/fcup-pubmat.jpg'],
        dateAdded: '2025-01-13'
    },
    {
        id: 26,
        title: 'Graduates Poster Design',
        category: 'pubmats',
        description: 'Graduates recognition poster design',
        images: ['designs/graduates/33.jpg', 'designs/graduates/34.jpg', 'designs/graduates/35.jpg'],
        dateAdded: '2025-01-13'
    }
];

