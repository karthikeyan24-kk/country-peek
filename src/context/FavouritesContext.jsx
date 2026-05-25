import { createContext, useReducer, useEffect, useContext } from 'react'

// Reducer function for managing favourites
function favouritesReducer(state, action) {
  switch (action.type) {
    case 'ADD_FAVOURITE': {
      // Guard against duplicates - if country already exists, return state unchanged
      const isDuplicate = state.some((c) => c.cca3 === action.payload.cca3)
      if (isDuplicate) return state
      // Add the country to favourites
      return [...state, action.payload]
    }
    case 'REMOVE_FAVOURITE':
      // Filter out the country by cca3
      return state.filter((c) => c.cca3 !== action.payload)
    default:
      return state
  }
}

// Create the context
const FavouritesContext = createContext()

export function FavouritesProvider({ children }) {
  // Load initial state from localStorage
  const saved = JSON.parse(localStorage.getItem('favourites') || '[]')

  // Initialize reducer with saved state
  const [favourites, dispatch] = useReducer(favouritesReducer, saved)

  // Save to localStorage whenever favourites changes
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }, [favourites])

  return (
    <FavouritesContext.Provider value={{ favourites, dispatch }}>
      {children}
    </FavouritesContext.Provider>
  )
}

// Custom hook for accessing favourites context
export function useFavourites() {
  return useContext(FavouritesContext)
}
