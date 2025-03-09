const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');

const prisma = new PrismaClient();

// Base product templates to use as reference
const baseProducts = [
  {
    name: 'Smartphone X',
    description: 'Latest smartphone with advanced camera and long battery life',
    price: 799.99,
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    name: 'Laptop Pro',
    description: 'High-performance laptop for professionals and gamers',
    price: 1299.99,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    name: 'Wireless Headphones',
    description: 'Noise-cancelling headphones with premium sound quality',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    name: 'Smart Watch',
    description: 'Fitness tracker and smartwatch with health monitoring features',
    price: 199.99,
    imageUrl: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    name: 'Tablet Ultra',
    description: 'Lightweight tablet with stunning display and fast processor',
    price: 499.99,
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    name: 'Wireless Earbuds',
    description: 'Compact earbuds with crystal clear sound and long battery life',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    name: 'Digital Camera',
    description: 'Professional-grade camera with 4K video recording',
    price: 899.99,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    name: 'Gaming Console',
    description: 'Next-generation gaming console with immersive gameplay',
    price: 499.99,
    imageUrl: 'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    name: 'Smart Speaker',
    description: 'Voice-controlled speaker with premium sound quality',
    price: 149.99,
    imageUrl: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    name: 'Wireless Mouse',
    description: 'Ergonomic wireless mouse with precision tracking',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
];

// Product categories
const categories = [
  'Electronics', 'Smartphones', 'Computers', 'Audio', 'Wearables', 
  'Gaming', 'Photography', 'Home Appliances', 'TV & Video', 'Accessories'
];

// Brands
const brands = [
  'Apple', 'Samsung', 'Sony', 'Google', 'Microsoft', 'Dell', 'HP', 
  'Lenovo', 'Bose', 'JBL', 'Logitech', 'Asus', 'LG', 'Canon', 'Nikon'
];

// Adjectives for product names
const adjectives = [
  'Pro', 'Ultra', 'Max', 'Elite', 'Premium', 'Advanced', 'Smart', 
  'Wireless', 'Portable', 'Slim', 'Compact', 'Deluxe', 'Extreme', 'Essential'
];

// Product types
const productTypes = [
  'Smartphone', 'Laptop', 'Tablet', 'Headphones', 'Earbuds', 'Smartwatch', 
  'Camera', 'Speaker', 'Monitor', 'Keyboard', 'Mouse', 'Gaming Console', 
  'TV', 'Microphone', 'Charger', 'Power Bank', 'Router', 'Hard Drive'
];

// Image URLs from Unsplash
const imageUrls = [
  'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1486572788966-cfd3df1f5b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
];

// Generate a random product based on the base products and faker
function generateRandomProduct() {
  // Sometimes use a base product as a template
  if (Math.random() < 0.2) {
    const baseProduct = baseProducts[Math.floor(Math.random() * baseProducts.length)];
    const nameParts = baseProduct.name.split(' ');
    
    // Modify the base product slightly
    return {
      name: `${faker.helpers.arrayElement(brands)} ${nameParts[0]} ${faker.string.alphanumeric(2).toUpperCase()}`,
      description: baseProduct.description + ' ' + faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price({ min: 50, max: 1500, dec: 2 })),
      imageUrl: baseProduct.imageUrl,
      createdAt: faker.date.recent({ days: 100 }),
    };
  }
  
  // Generate a completely new product
  const brand = faker.helpers.arrayElement(brands);
  const adjective = faker.helpers.arrayElement(adjectives);
  const productType = faker.helpers.arrayElement(productTypes);
  const modelNumber = Math.random() > 0.5 ? ` ${faker.string.alphanumeric(2).toUpperCase()}${faker.number.int({ min: 10, max: 999 })}` : '';
  
  // Generate product name with different formats
  let name;
  const nameFormat = Math.floor(Math.random() * 3);
  
  if (nameFormat === 0) {
    name = `${brand} ${productType} ${adjective}${modelNumber}`;
  } else if (nameFormat === 1) {
    name = `${brand} ${adjective} ${productType}${modelNumber}`;
  } else {
    name = `${adjective} ${productType} by ${brand}${modelNumber}`;
  }
  
  // Generate a detailed description
  const description = `${faker.commerce.productDescription()} This ${adjective.toLowerCase()} ${productType.toLowerCase()} features ${faker.commerce.productMaterial()} construction and ${faker.commerce.productAdjective()} design. Perfect for ${faker.word.adjective()} users who demand quality and performance.`;
  
  return {
    name,
    description,
    price: parseFloat(faker.commerce.price({ min: 50, max: 1500, dec: 2 })),
    imageUrl: faker.helpers.arrayElement(imageUrls),
    createdAt: faker.date.recent({ days: 100 }),
  };
}

async function main() {
  console.log('Starting database seed...');
  
  // Clear existing products
  await prisma.product.deleteMany();
  console.log('Cleared existing products');

  const products = [];
  const totalProducts = 500;
  
  // Generate 500 products
  for (let i = 0; i < totalProducts; i++) {
    products.push(generateRandomProduct());
    
    // Log progress
    if ((i + 1) % 100 === 0) {
      console.log(`Generated ${i + 1} products...`);
    }
  }
  
  // Insert all products in a batch
  await prisma.product.createMany({
    data: products,
  });

  console.log(`Database seeded successfully with ${totalProducts} products`);
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 