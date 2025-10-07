# Tacos de Los Pinos - Restaurant Landing Page

## Overview

This is a single-page restaurant website for "Tacos de Los Pinos," a Mexican taco restaurant. The application is built as a full-stack web application with a React frontend and Express.js backend, designed to showcase the restaurant's menu, promotions, and contact information. The site features a vibrant, street-food aesthetic with Mexican cultural elements and focuses on user engagement through WhatsApp integration for orders and inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Custom component library built on Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom color variables for brand consistency (taco-red, taco-yellow, taco-green, etc.)
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation schemas

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Custom Vite integration for hot module replacement in development
- **API Structure**: RESTful API design with `/api` prefix for all endpoints
- **Error Handling**: Centralized error handling middleware with status code management
- **Static Serving**: Serves built React application in production

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Definition**: Type-safe database schemas using Drizzle with Zod validation
- **Development Storage**: In-memory storage implementation for development/testing
- **Migration Management**: Drizzle Kit for database migrations and schema management

### Authentication and Authorization
- **Session Management**: Basic session infrastructure prepared (connect-pg-simple for PostgreSQL sessions)
- **User Schema**: Predefined user table with username/password fields
- **Storage Interface**: Abstract storage interface allowing for different implementations (currently in-memory)

### Component Organization
- **UI Components**: Comprehensive set of reusable UI components (buttons, cards, forms, etc.)
- **Page Components**: Modular page sections (hero, menu, promotions, contact, footer)
- **Layout System**: Responsive design with mobile-first approach
- **Custom Hooks**: Utility hooks for mobile detection and toast notifications

### Styling and Theming
- **Design System**: Custom CSS variables for consistent theming
- **Typography**: Google Fonts integration (Fredoka One for headings, Rubik for body text)
- **Icons**: Font Awesome integration for consistent iconography
- **Responsive Design**: Mobile-first responsive design with Tailwind breakpoints
- **Custom Animations**: CSS animations for enhanced user experience

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe ORM for PostgreSQL database operations

### UI and Styling
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Font Awesome**: Icon library for consistent iconography
- **Google Fonts**: Web font service for custom typography

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Type safety across the full stack
- **Replit Integration**: Development environment optimizations for Replit platform

### Third-Party Integrations
- **WhatsApp Business**: Direct integration for customer communication and orders
- **Google Maps**: Location services for restaurant address
- **Social Media**: Links to Facebook and Instagram profiles

### State Management and Forms
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Performant form handling with minimal re-renders
- **Zod**: Runtime type validation for forms and API schemas

### Session and Security
- **Express Session**: Session management middleware
- **CORS Handling**: Cross-origin resource sharing configuration
- **Input Validation**: Comprehensive validation using Zod schemas