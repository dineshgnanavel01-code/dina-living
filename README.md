# Dina Living

A curated real estate website for browsing premium properties for sale and rent. Built with Vite, React, React Router, and Tailwind CSS.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the local development server
npm run build    # produce an optimized production build in ./dist
```

## Project structure

The structure follows the agreed layout:

```
public/assets/        # property images and favicon
src/components/       # Navbar, Hero, PropertyCard, FilterBar,
                      # FilterPanel, SearchPanel, FeaturedProperties,
                      # SectionHeading, Button, Footer
src/pages/            # Home, Properties, PropertyDetails, About,
                      # Contact, Login/Signup (unified as Auth),
                      # Favorites, NotFound
src/contexts/         # FavoritesContext (localStorage persistence)
src/routes/           # AppRoutes (SPA routing + scroll-to-top)
src/data/             # properties.js (curated listings)
```

## Key features

- **Curated listings** with prices in Nigerian Naira, bedrooms/baths/square footage, amenities, and multi-image galleries.
- **Search + filtering** by keyword, type, purpose, location, price range, bedrooms, bathrooms, size, and amenities.
- **Favorites** saved to localStorage with a badge count in the navbar.
- **Responsive design** with a warm, editorial brand identity (Playfair Display + Inter, earthy palette).
- **Auth pages** (demo sign-in, client-side only) for Login and Signup flows.

## Deployment

- `public/_redirects` and `netlify.toml` handle SPA fallback routing on Netlify.
- On Vercel, SPA routing works automatically for static builds; the output directory is `dist`.
