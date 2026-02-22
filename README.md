# IndusNode | Futuristic Recommendation System

IndusNode is a high-end electronics e-commerce SPA built with React, featuring a hybrid AI-driven recommendation engine and a moderate "antigravity" design aesthetic.

## 🚀 Key Features

### 1. Hybrid Recommendation Engine
Located in `src/engine.js`, the engine uses two primary methods to serve personalized content:

*   **Content-Based Filtering**: Matches products based on categories, brands, and technical tags. It calculates a similarity score by looking at attribute overlaps and price proximity (±20%).
*   **Collaborative Filtering (Simulated)**: Simulates "Users who viewed this also liked" by identifying products in the same category that have high rating density (>4.5) and significant review counts.

### 2. Real-Time Personalization
The application tracks user browsing history in a global state (`AppContext.jsx`). As the user clicks on products:
*   The **"Tailored For You"** section on the homepage updates instantly based on the unique attributes of recently viewed items.
*   **Cross-Selling logic**: The "Customers Also Bought" section prioritizes accessories (like mice or headphones) when the user views a core device (like a laptop or phone).

### 3. Antigravity Design System
The UI uses a custom CSS system (`src/index.css`) built to "WOW" the user:
*   **Floating Cards**: Subtle `translateY` elevation on hover with glowing shadows.
*   **Glassmorphism**: Semi-transparent backgrounds with `backdrop-filter: blur(12px)` for headers, modals, and sidebar filters.
*   **Micro-animations**: Powered by `framer-motion` for smooth page transitions and layout shifts.
*   **Tech Palette**: A dark foundation (`#05070a`) punctuated by Electric Cyan and Deep Nebula Purple accents.

## 🛠️ Technical Stack
*   **Core**: React 18, Vite
*   **Styling**: Vanilla CSS (Modern CSS variables + Utilities)
*   **Animations**: Framer Motion
*   **Icons**: Lucide React
*   **Routing**: React Router DOM v6

## 📂 Project Structure
*   `src/data.js`: Centralized product and user mock data (25+ products).
*   `src/engine.js`: The core recommendation logic functions.
*   `src/context/AppContext.jsx`: Manages cart, history, and search state.
*   `src/components/`: Reusable UI elements (ProductCard, Navbar, ReviewModal).
*   `src/pages/`: Main views (Home, ProductDetail, Search, Profile).

## 🛸 How to Run
1. Ensure you have Node.js installed.
2. Run `npm install` to fetch dependencies.
3. Run `npm run dev` to start the intergalactic development server.
4. Navigate to `http://localhost:5173`.

---
*Created for the Future of E-Commerce.*
