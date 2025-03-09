const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Clear existing products
  await prisma.product.deleteMany();

  // Create sample products
  const products = [
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

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('Database seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 