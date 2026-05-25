# CountryPeek

A modern, interactive React application for searching, exploring, and saving country information from around the world. Built with clean code, accessibility best practices, and a delightful user experience.

## 🌍 Live Demo

**[https://karthikeyan24-kk.github.io/country-peek/](https://karthikeyan24-kk.github.io/country-peek/)**

Open the link above to explore CountryPeek live! No installation required.

## ✨ Features

- **🔍 Live Search** - Search countries by name with real-time results and debounce optimization
- **🗺️ Region Filter** - Filter countries by region (Africa, Americas, Asia, Europe, Oceania)
- **📊 Sort Options** - Sort results alphabetically or by population
- **📋 Country Details** - View comprehensive information including capital, languages, currencies, and border countries
- **❤️ Favourites List** - Save your favorite countries with persistent localStorage storage
- **🌓 Dark/Light Theme** - Toggle between light and dark modes with seamless persistence
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **♿ Accessible** - Keyboard navigation and screen reader support with ARIA labels
- **⚡ Fast** - Built with Vite for instant development and optimized production builds

## 🛠️ Tech Stack

- **React 19** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **React Router v7** - Client-side routing for multi-page navigation
- **CSS Custom Properties** - Theme variables for dark/light mode
- **React Context API** - Global state management for theme and favourites
- **useReducer** - Structured state management for complex operations
- **localStorage** - Persistent browser storage for user data
- **RestCountries API v3.1** - Real-world country data source

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/karthikeyan24-kk/country-peek.git
   cd country-peek
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173/`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy to GitHub Pages** (if applicable)
   ```bash
   npm run deploy
   ```

## 📂 Project Structure

```
src/
├── components/
│   ├── CountryCard.jsx          # Individual country card with save button
│   ├── FilterBar.jsx            # Region filter and sort controls
│   ├── Header.jsx               # Navigation and theme toggle
│   ├── Loader.jsx               # Loading spinner
│   └── SearchBar.jsx            # Search input
├── context/
│   ├── ThemeContext.jsx         # Dark/light theme state management
│   └── FavouritesContext.jsx    # Favourites list with useReducer
├── hooks/
│   └── useCountries.js          # Custom hook for country API calls
├── pages/
│   ├── Home.jsx                 # Main search and results page
│   ├── CountryPage.jsx          # Detailed country information
│   ├── Favourites.jsx           # Saved countries page
│   └── NotFound.jsx             # 404 page
├── styles/
│   ├── App.css                  # Component styles with CSS variables
│   └── index.css                # Global styles and theme variables
└── App.jsx                      # Main app component with routing
```

## 🎯 Key Features Explained

### Search & Filter
- Type a country name to search with automatic debouncing
- Filter results by region dropdown
- Sort by country name (A–Z) or population (high to low)

### Country Details
- Click any country card to view comprehensive information
- See capital, languages, currencies, area, and more
- Explore border countries with clickable links
- Easy back button to return to results

### Favourites System
- Click the heart icon on any card to save to favourites
- View all saved countries on the Favourites page
- Remove countries from your list anytime
- List persists across browser sessions (localStorage)

### Theme Toggle
- Click "Dark Mode" / "Light Mode" button in header
- Theme persists across page navigation
- CSS custom properties enable instant theme switching

## ♿ Accessibility

- **Keyboard Navigation** - Tab through all interactive elements
- **ARIA Labels** - Screen reader friendly buttons and inputs
- **Semantic HTML** - Proper heading hierarchy and link structure
- **Focus Indicators** - Clear focus states for all buttons
- **Alt Text** - Meaningful descriptions for all flag images
- **Color Contrast** - WCAG AA compliant color ratios
- **Responsive Text** - Readable font sizes at all viewport sizes

## 📱 Responsive Design

- **Mobile (375px)** - Single-column layout, touch-friendly buttons
- **Tablet (768px)** - Two-column layout on detail pages
- **Desktop (1200px)** - Full multi-column grid for optimal viewing
- **No Horizontal Scroll** - Content fits within viewport at all sizes

## 🐛 Edge Cases Handled

- Empty/spaces-only search input
- Countries with no capital city
- Countries with no subregion data
- Invalid country codes in URL
- No results for applied filters
- Duplicate prevention in favourites list
- Slow network connections with loading state

## 🚀 Deployment

This app is deployed on GitHub Pages. To deploy your own fork:

1. Install deployment dependencies:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Configure `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/country-peek/',
   })
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in repository settings (gh-pages branch)

## 📚 API Reference

This app uses the free **RestCountries API v3.1**:
- Endpoint: `https://restcountries.com/v3.1/`
- No authentication required
- Search by name: `/name/{name}`
- No rate limits for public use

## 👨‍💻 Development

Built through a structured, part-by-part approach:
- **Part 1** - Project setup with Vite and React Router
- **Part 2** - API integration and live search
- **Part 3** - Country detail pages with custom hooks
- **Part 4** - Filtering, sorting, and theme system
- **Part 5** - Favourites with useReducer and localStorage
- **Part 6** - Polish, accessibility, and deployment

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Credits

- **API** - [RestCountries](https://restcountries.com/)
- **Design** - Built with React, Vite, and modern web standards
- **Icons & Flags** - RestCountries API

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or pull request!

---

**Happy exploring! 🌍✨**
