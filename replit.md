# AnySupport - Enterprise Remote Support SaaS

## Overview

AnySupport (애니서포트) is a Korean enterprise B2B SaaS platform for remote support solutions. The application provides remote desktop control, mobile device support, and video-based assistance for customer service teams. It's a marketing and product website with inquiry form functionality, targeting enterprise customers in finance, telecom, and government sectors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for page transitions and interactive elements
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints under `/api/*` prefix
- **Build Tool**: esbuild for server bundling, Vite for client

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Tables**: 
  - `inquiries` - Customer inquiry submissions (trial requests, solution inquiries)
  - `users` - Basic user accounts with username/password

### Development Setup
- **Dev Server**: Vite dev server with HMR on port 5000
- **Production Build**: Static files served from `dist/public`, server bundled to `dist/index.cjs`
- **Database Migrations**: Drizzle Kit with `db:push` command

### Key Design Patterns
- **Shared Types**: Schema definitions in `shared/` directory used by both client and server
- **Storage Abstraction**: `IStorage` interface in `server/storage.ts` for database operations
- **Modal Context**: React Context pattern for global modal state management
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for static assets

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Type-safe database queries and schema management
- **connect-pg-simple**: PostgreSQL session storage (available but not currently active)

### UI Libraries
- **Radix UI**: Full suite of accessible primitive components
- **Lucide React**: Icon library
- **embla-carousel-react**: Carousel/slider functionality
- **cmdk**: Command palette component
- **vaul**: Drawer component

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Development tooling (dev only)
- **@replit/vite-plugin-dev-banner**: Development banner (dev only)

### Fonts
- **Google Fonts**: Noto Sans KR (Korean font family) loaded via CDN

### Build & Validation
- **Zod**: Runtime schema validation
- **drizzle-zod**: Generates Zod schemas from Drizzle table definitions
- **zod-validation-error**: Human-readable validation error messages