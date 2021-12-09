import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

import TopStories from "./components/lastestNews/TopStories";
import NavBar from "./components/NavBar/index";
import NewStories from "./components/NewsStories/NewsStories";

import Search from "./components/Search";
import NewsState from "./context/newsState";

const App = () => {
  return (
    <NewsState>
      <Router>
        <NavBar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Search />
                <NavLink to="/topstories">
                  Go to Top Stories in Uk || US
                </NavLink>
              </>
            }
          />
          <Route path="/topstories" element={<TopStories />} />

          <Route
            path="/search/:text"
            element={
              <>
                <NavLink to="/"> Go Back </NavLink>
                <NewStories />
              </>
            }
          />
        </Routes>
      </Router>
    </NewsState>
  );
};

export default App;
