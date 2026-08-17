# Dina-living — House Renting Website

A modern house renting website built with **React + Vite + Tailwind CSS + React Router (JSX only)**.

## Tech Stack

| Technology | Usage |
| --- | --- |
| React.js | UI components |
| Vite | Build tooling |
| Tailwind CSS | Styling |
| React Router DOM | Client-side routing |
| Lucide React | Icons |

## Folder Structure

```
dina-living/
├── public/
│   └── assets/          # Images, icons, static files
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── PropertyCard.jsx
│   │   ├── FilterBar.jsx
│   │   ├── FeaturedProperties.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page-level components
│   │   ├── Home.jsx
│   │   ├── Properties.jsx
│   │   ├── PropertyDetails.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── routes/          # React Router setup
│   │   └── AppRoutes.jsx
│   ├── data/            # Mock JSON data for properties
│   │   └── properties.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Tailwind base styles
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Getting Started

```bash
npm install
npm run dev        # start dev server on port 3000
npm run build      # production build (output: dist/)
```

## Deploy to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project → GitHub**.
3. Build settings (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click Deploy.

## Features

- Sticky responsive navbar with hamburger menu and location search
- Hero section with location/type search and property search button
- Reusable property cards with image, title, location, type, price, rating, favorite heart, and View Details button
- Filter panel: location, property type, price range slider, bedrooms, amenities, Apply/Reset
- Featured properties section with hover effects and smooth transitions
- Property details page with image gallery, info, price, amenities, description, availability, and Book Now
- Responsive design: mobile (320px+), tablet (768px+), laptop (1024px+), desktop (1440px+)
