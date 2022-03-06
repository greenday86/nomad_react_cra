import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Link는 페이지 새로고침 없이 유저를 다른 페이지로 이동시켜 주는 컴포넌트
function Movie({ coverImg, title, year, summary, genres, rank, id }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to={`/movie/${id}`}>
          {title}({year})
        </Link>
      </h2>
      <p>{summary}</p>
      <h3>Rank: {rank}</h3>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
