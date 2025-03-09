# Product Search App

A full-stack product search application built with Next.js, Prisma, MySQL, and Tailwind CSS.

## Features

- Live product search with debouncing
- Minimum 3 characters to trigger search
- Loading indicators during API requests
- Responsive design with Tailwind CSS
- MySQL database with Prisma ORM

## Prerequisites

- Node.js (v18 or later)
- MySQL database

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd product-search
```

2. Install dependencies:

```bash
npm install
```

3. Configure the database:

Copy the example environment file and update it with your database credentials:

```bash
cp .env.example .env
```

Then edit the `.env` file with your MySQL connection details:

```
DATABASE_URL="mysql://username:password@hostname:port/database_name"
```

**Note:** The `.env.example` file contains examples for both local and cloud MySQL setups.

4. Run database migrations:

```bash
npm run prisma:migrate
```

5. Seed the database with sample products:

```bash
npm run prisma:seed
```

## Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

- `/app` - Next.js app directory
  - `/api` - API routes
  - `/components` - React components
  - `/hooks` - Custom React hooks
  - `/types` - TypeScript type definitions
- `/prisma` - Prisma schema and migrations
- `/lib` - Utility functions and shared code