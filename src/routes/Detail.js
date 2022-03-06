import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { tomato } = useParams();

  const [loading, setLoading] = useState(true);
  const [detailMovie, setDetailMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${tomato}`)
    ).json();
    setLoading(false);
    setDetailMovie(json.data.movie);
    console.log(json.data.movie);
    const g = json.data.movie.genres;
    console.log(g);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={detailMovie.large_cover_image} />
          <h2>
            <a href={detailMovie.url}>
              {detailMovie.title} ({detailMovie.rating})
            </a>
          </h2>
        </div>
      )}
    </div>
  );
}
export default Detail;
