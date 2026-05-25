import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import CountryCard from '../components/CountryCard'

function Favourites() {
  const { favourites } = useFavourites()

  // Show empty state if no countries saved
  if (favourites.length === 0) {
    return (
      <div className="favourites">
        <div className="not-found">
          <h2>No Favourites Yet</h2>
          <p>You haven't saved any countries yet. Search for a country and click the Save button to add it to your favourites.</p>
          <Link to="/">Explore Countries</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="favourites">
      <h2 style={{ marginBottom: '1.5rem' }}>My Favourites</h2>
      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  )
}

export default Favourites
