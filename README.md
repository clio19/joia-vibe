This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## URLS

``` bash
    https://nextjs.org/docs 
    https://ui.shadcn.com/docs/installation/next # Css components
    https://neon.com/ # DB
    https://trpc.io/ # RPC calls
    https://www.coderabbit.ai/ # For code review
    https://www.inngest.com/ # auto-scale queues
    https://agentkit.inngest.com/concepts/models # Chat models
   
```

# STEPS

## First steps

- npx create-next-app@15.3.4
- npx shadcn@latest --version
- npx shadcn@2.7.0 init
- npx shadcn@2.7.0 add button
- npm run dev

# Install plugins on vscode 👍

- Tailwind CCS intellisense package
- prisma

- npx shadcn@2.7.0 add --all

# Prisma  <https://www.prisma.io/docs/guides/nextjs>

- npm install prisma tsx --save-dev
- npm install @prisma/client dotenv
- npx prisma init

## Environment Setup

1. Create a `.env` file in the project root if it doesn't exist already
2. Add your database connection URL to the `.env` file:

   ```properties
   DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>?sslmode=require"
   ```

   For Neon database users:
   1. Go to the [Neon Console](https://neon.com)
   2. Select your project
   3. Click on "Connection Details"
   4. Copy the connection string and paste it as your DATABASE_URL

## Local Development

After setting up your environment:

1. Generate the Prisma Client:

   ```bash
   npx prisma generate
   ```

2. Push the schema to your database (development only):

   ```bash
   npx prisma db push
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

Note: Never commit your `.env` file to version control. It's already added to `.gitignore` to prevent accidental commits.

# Migrate db

   npx prisma migrate dev
   ```bash
   ```

   OU

   ```bash
   npx prisma studio 
   ```

# NO FINAL

Apagar os seed.ts e as pastas das migracoes e remover o  

 "prisma": {
    "seed": "tsx prisma/seed.ts"
  },
  
   na package,json
  
   ```bash
   npx prisma migrate reset
   ```

TRPC https://trpc.io/docs/client/tanstack-react-query

  ## Run inngest page

```
 npx inngest-cli@latest dev
```