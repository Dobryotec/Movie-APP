import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Movies from "./Movies/Movies";
import NavBar from "./NavBar/NavBar";
import MovieInformation from "./MovieInformation/MovieInformation";
import Actors from "./Actors/Actors";
import Profile from "./Profile/Profile";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieInformation />} />
            <Route path="/actors/:id" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
