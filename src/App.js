// App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";
import LoginPage from "./pages/LoginPage";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffffff; /* 전체 페이지 배경색 설정 */
    margin: 0;
    padding: 0;
  }
`;

function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/celebrity" element={<Celebrity />} />
                    <Route path="/movie" element={<Movies />} />
                    <Route path="/tv" element={<TV />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/movie/:title" element={<MovieDetail />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
