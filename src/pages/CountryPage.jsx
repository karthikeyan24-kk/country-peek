import { useParams, useNavigate } from 'react-router-dom'
import useCountry from '../hooks/useCountry'
import '../styles/App.css'

function CountryPage() {
  const { code } = useParams()
  const navigate = useNavigate()
  const { country, loading, error } = useCountry(code)

  if (loading) {
    return <p className="page-status">Loading...</p>
  }

  if (error) {
    return <p className="page-status page-status--error">Error: {error}</p>
  }

  if (!country) {
    return null
  }

  const { name, flags, population, region, subregion, capital, languages, currencies, borders } = country

  const languageNames = languages ? Object.values(languages) : []
  const currencyNames = currencies ? Object.values(currencies).map((c) => c.name) : []

  return (
    <div className="country-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="country-page__layout">
        <img
          src={flags.svg}
          alt={`Flag of ${name.common}`}
          className="country-page__flag"
        />

        <div className="country-page__info">
          <h2 className="country-page__name">{name.common}</h2>
          <p className="country-page__official">{name.official}</p>

          <div className="country-page__details">
            <div className="country-page__left">
              <p>
                <span>Population:</span> {population.toLocaleString()}
              </p>
              <p>
                <span>Region:</span> {region}
              </p>
              {subregion && (
                <p>
                  <span>Sub Region:</span> {subregion}
                </p>
              )}
              {capital && capital.length > 0 && (
                <p>
                  <span>Capital:</span> {capital[0]}
                </p>
              )}
            </div>

            <div className="country-page__right">
              {languageNames.length > 0 && (
                <p>
                  <span>Languages:</span> {languageNames.join(', ')}
                </p>
              )}
              {currencyNames.length > 0 && (
                <p>
                  <span>Currencies:</span> {currencyNames.join(', ')}
                </p>
              )}
            </div>
          </div>

          {borders && borders.length > 0 && (
            <div className="country-page__borders">
              <p><span>Borders:</span></p>
              <div className="borders-list">
                {borders.map((border) => (
                  <span key={border} className="border-badge">
                    {border}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountryPage
