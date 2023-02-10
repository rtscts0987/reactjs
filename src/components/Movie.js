
import PropTypes from "prop-types"

function Movie(medium_cover_image, title, summary, genres) {
    return (
        <div>
            <img src={medium_cover_image} alt={title}/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summay: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;