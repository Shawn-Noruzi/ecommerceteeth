
**Feature List for ecommerceteeth**

**Core Technologies & Integrations**

Next.js: Utilized for server-side rendering, static site generation, and building the overall React application.
Heroku: Deployment platform for hosting the web application.
Postgres DB: Chosen as the relational database for storing application data.
Prisma ORM: Object Relational Mapping tool used to interact with the database in an efficient manner.
Shopify API CRM: Integration for managing customer relationships and leveraging Shopify's e-commerce capabilities.
Context API: Used for state management across the React application, allowing for efficient data flow without prop drilling.
RESTful Services: Implementation of REST API for seamless server-client communication.

**Development Features**

Development Server: Easy setup for a development environment with npm run dev.
Database Schema Updates: Simplified database schema updates with Prisma using npx prisma db push.
Database Content Management: Visual management of database content with Prisma Studio via npx prisma studio.

**UI/UX Features**

Responsive Design: Tailwind CSS and custom components ensure the application is fully responsive and mobile-friendly.
Image Optimization: Next.js's Image Optimization for faster page loads with external domain support for Shopify CDN.
SEO Friendly: Implementation of SEO best practices, including meta tags and Open Graph properties for social media sharing.
Interactive FAQ Section: A dynamic FAQ page with collapsible answers for a better user experience.
Recommended Products: Custom component to display recommended products excluding the currently viewed product for enhanced user engagement.

**Security & Performance**

React Strict Mode: Ensures the application follows the best practices and highlights potential problems.
Environment Variables: Secure handling of API keys and sensitive data using Next.js environment variables.
Just-In-Time (JIT) Mode for Tailwind CSS: Ensures that only the necessary CSS is generated, leading to faster load times.

**Additional Utilities**

Form Handling: Integration of Formik for efficient form management and Yup for schema validation.
Email Services: Nodemailer for sending emails directly from the application.
Authentication: NextAuth for secure authentication mechanisms.
Custom Hooks: Use of custom React hooks for managing window size and other functionalities.

**Development Tools**

PostCSS: Use of PostCSS with plugins like Tailwind CSS and autoprefixer for writing future-proof CSS.
Web Application Manifest: Configured for adding the web application to home screens on mobile devices.


//updates to schema? run
npx prisma db push

//run prisma studio to see db content 

npx prisma studio****
