# Next.js Basecamp Template

A modern, production-ready [Next.js](https://nextjs.org) template with TypeScript, Tailwind CSS, ESLint, and a comprehensive development setup. This template provides a solid foundation for building scalable web applications with best practices built-in.

## Features

- ⚡ **Next.js 16** - Latest React framework with App Router
- 📘 **TypeScript** - Full type safety throughout the project
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- ✅ **ESLint** - Code quality and consistency
- 📱 **Responsive Design** - React Responsive for breakpoint management
- 🔌 **API Integration** - Axios with interceptors and request/response handling
- 🏗️ **Well-Organized Structure** - Clear separation of concerns with hooks, services, utils, and more

## Tech Stack

- **Frontend Framework**: Next.js 16 with React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with PostCSS
- **HTTP Client**: Axios
- **Date/Time**: Moment.js & Moment Timezone
- **Utilities**: Lodash, clsx, camelcase-keys, snakecase-keys
- **Cookies**: cookies-next
- **Responsive**: react-responsive
- **Linting**: ESLint with TypeScript support

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── ssr/               # Server-side rendering examples
├── components/            # React components
├── config/                # Configuration files
│   ├── index.ts
│   └── timezone.ts
├── constants/             # Application constants
│   ├── breakpoints.ts
│   ├── datetime.ts
│   └── key.ts
├── hooks/                 # Custom React hooks
│   └── useResponsive.ts
├── interfaces/            # TypeScript interfaces
│   └── response.ts
├── services/              # API services
│   ├── client/            # Client-side API calls
│   ├── server/            # Server-side API calls
│   └── instance/          # Axios instances (client & server)
├── styles/                # Global styles
│   └── globals.css
├── types/                 # Global TypeScript types
│   └── global.d.ts
└── utils/                 # Utility functions
    ├── case.ts           # Case conversion utilities
    ├── datetime.ts       # Date/time helpers
    └── response.ts       # Response handling
```

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/polcnn/nextjs-basecamp-template.git
cd nextjs-basecamp-template
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

The app uses hot module reloading, so changes to your files will automatically refresh the page.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Key Features Explained

### Services Layer

The project includes a well-organized services layer for API communication:

- **Client Services** (`src/services/client/`): For client-side API calls
- **Server Services** (`src/services/server/`): For server-side API calls
- **Axios Instances** (`src/services/instance/`): Pre-configured Axios instances for both environments

### Utilities

- **Case Conversion**: Convert between camelCase and snake_case
- **DateTime**: Parse, format, and handle dates with timezone support
- **Response**: Standardized response handling and error management

### Hooks

- **useResponsive**: Custom hook for responsive design breakpoints

### Configuration

- **Timezone**: Pre-configured timezone handling with Moment Timezone
- **Constants**: Breakpoints, datetime formats, and app keys

## Author

Created by [Nutchapol Watthanakul](https://github.com/polcnn)

## License

This project is private and proprietary.

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TypeScript documentation

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details on deployment options.
