// Portfolio Data - Easy Manual Updates
// Simply add, edit, or remove items from this array to update your portfolio

const portfolioData = [
    {
        id: 1,
        title: 'Brand Identity Design',
        category: 'print',
        description: 'Complete brand identity package',
        images: ['https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1000&fit=crop'], // Can add multiple images in array
        dateAdded: '2025-01-01'
    },
    {
        id: 2,
        title: 'Social Media Graphics',
        category: 'pubmats',
        description: 'Engaging social media content',
        images: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1000&fit=crop'],
        dateAdded: '2025-01-02'
    },
    {
        id: 3,
        title: 'Magazine Layout',
        category: 'print',
        description: 'Editorial design for lifestyle magazine',
        images: ['https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=1200&fit=crop'],
        dateAdded: '2025-01-03'
    },
    {
        id: 4,
        title: 'Logo Design',
        category: 'apparel',
        description: 'Modern minimalist logo',
        images: ['https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=800&fit=crop'],
        dateAdded: '2025-01-04'
    },
    {
        id: 5,
        title: 'Web Design',
        category: 'pubmats',
        description: 'Modern website interface',
        images: ['https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop'],
        dateAdded: '2025-01-05'
    },
    {
        id: 6,
        title: 'Business Cards',
        category: 'print',
        description: 'Professional business card design',
        images: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=1000&fit=crop'],
        dateAdded: '2025-01-06'
    },
    {
        id: 7,
        title: 'Esports MVP',
        category: 'apparel',
        description: 'Esports team branding and merchandise design',
        images: ['designs/esports-mvp.png'], // Example with one image
        dateAdded: '2025-01-07'
    }
];

// HOW TO ADD NEW DESIGNS WITH MULTIPLE IMAGES:
// For a project with multiple related images, just add them all to the images array:
/*
    {
        id: 8,
        title: 'Product Packaging Design',
        category: 'print',
        description: 'Complete packaging design with multiple views',
        images: [
            'designs/packaging-front.jpg',
            'designs/packaging-back.jpg',
            'designs/packaging-side.jpg',
            'designs/packaging-mockup.jpg'
        ],
        dateAdded: '2025-12-21'
    },
*/

// The first image in the array will be shown as the thumbnail
// Click on the portfolio item to view all images in a gallery with navigation arrows

// HOW TO UPDATE:
// - Just edit the title, description, or image paths of any item above
// - Save the file and refresh your browser (or deploy to Netlify)

// HOW TO DELETE:
// - Simply remove the entire object {} from the array
// - Make sure to keep proper comma separation between items
