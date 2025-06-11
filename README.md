# Alien Numeral Converter

A Next.js application that converts alien numerals to decimal numbers. This project provides a user-friendly interface for converting alien numeral systems with detailed explanations of the conversion process.

## Live Demo

Visit the live application at: [Alien Numeral Converter](https://software-engineer-frontend.vercel.app/)

## Features

- Convert alien numerals to decimal numbers
- Detailed step-by-step explanation of the conversion process
- Responsive design with modern UI elements
- Error handling for invalid inputs
- Clear and intuitive user interface

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

## How to Use

1. Enter an alien numeral in the input field
2. Click "Convert" to see the decimal equivalent
3. View the detailed explanation of the conversion process
4. Use "Clear" to reset the input and results

## Project Structure

- `app/` - Main application directory
  - `components/` - React components
  - `utils/` - Utility functions including the converter logic
  - `page.tsx` - Main application page

## Technologies Used

- Next.js 14
- React
- TypeScript
- Tailwind CSS

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment

This project is deployed on Vercel. The deployment process is automated through GitHub integration. Any changes pushed to the main branch will trigger an automatic deployment.

To deploy your own version:

1. Fork this repository
2. Connect your Vercel account to your GitHub repository
3. Vercel will automatically detect the Next.js project and deploy it
