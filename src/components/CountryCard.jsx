import { Link } from 'react-router-dom'
import { useFavourites } from '../context/FavouritesContext'
import '../styles/App.css'

function CountryCard({ country }) {
  const { name, flags, population, region, capital, cca3 } = country
  const { favourites, dispatch } = useFavourites()

  // Check if this country is already saved
  const isSaved = favourites.some((f) => f.cca3 === cca3)

  // Handle favourite button click
  function handleFavouriteClick(e) {
    e.stopPropagation() // Prevent event from bubbling
    e.preventDefault() // Prevent default behavior
    if (isSaved) {
      dispatch({ type: 'REMOVE_FAVOURITE', payload: cca3 })
    } else {
      dispatch({ type: 'ADD_FAVOURITE', payload: country })
    }
  }

  return (
    <Link to={`/country/${cca3}`} className="card">
      <img 
        src={flags.svg} 
        alt={`Flag of ${name.common}`}
        className="card__flag"
      />
      <div className="card__body">
        <h3 className="card__name">{name.common}</h3>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Region: </span>
          {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital?.[0] ?? 'N/A'}
        </p>
        <button 
          className={`fav-btn ${isSaved ? 'fav-btn--saved' : ''}`}
          onClick={handleFavouriteClick}
          title={isSaved ? 'Remove from favourites' : 'Add to favourites'}
        >
          {isSaved ? '♥ Saved' : '♡ Save'}
        </button>
      </div>
    </Link>
  )
}

export default CountryCard
