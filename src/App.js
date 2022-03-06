import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:tomato">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

// 6.2 Coin Tracker

// 중첩 삼항 연산자
//         <ul>
//           {coins.map((coin) => (
//             <li key={coin.id}>
//               {/* {coin.name} ({coin.symbol}) $ */}
//               RANK: {coin.rank} =====
//               {coin.hasOwnProperty("quotes")
//                 ? coin.quotes.hasOwnProperty("USD")
//                   ? coin.quotes.USD.price
//                   : null
//                 : null}
//             </li>
//           ))}
//         </ul>

// list slice
// function App() {
//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);
//   const topCoins = coins.slice(0, 2000);

// ToDOS 리스트 만들기
// function App() {
//   const [toDo, setToDo] = useState("");
//   const onChange = (event) => setToDo(event.target.value);
//   const [toDos, setToDos] = useState([]);
//   const onSubmit = (event) => {
//     event.preventDefault();
//     if (toDo === "") {
//       return;
//     }
//     //  state change for 함수를 보내는 방식
//     // 함수의 첫 번째 argument로 현재 state를 보냄
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     // state change for 값을 보내는 방식
//     setToDo("");
//   };
//   console.log(toDos);
//   console.log(toDos.map((tomato, index) => <li key={index}>{tomato}</li>));
//   return (
//     <div>
//       <h1>My ToDos! ({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           onChange={onChange}
//           value={toDo}
//           type="text"
//           placeholder="Write to do..."
//         />
//         <button>Add to do</button>
//       </form>
//       <hr />
//       <ul>
//         {toDos.map((tomato, index) => (
//           <li key={index}>{tomato}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useState([]);
//   const getMovies = async() => {
//     const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
//     const json = await response.json();
//     console.log(json.data.movies);
//     setMovies(json.data.movies);
//     setLoading(false);
//   };
//   useEffect(() => {
//     getMovies();
//   }, [])
//     return (
//     <div>
//       {loading ? (
//         <h1>Loading..</h1>
//         ) : (
//         <div>
//           {movies.map(movie => (
//             <div key={movie.id}>
//               <img src={movie.medium_cover_image} />
//               <h2>{movie.title}</h2>
//               <h3>{movie.rating}</h3>
//               <p>{movie.summary}</p>
//               <ul>
//                 {movie.genres.map((g) => (
//                   <li key='g'>{g}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//           </div>
//         )}
//     </div>
//   );
// }

// export default App;
