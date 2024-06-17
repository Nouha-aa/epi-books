import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import { ThemeContext, AuthContext } from './modules/Contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import BookDetail from './components/BookDetail';
import Buttons from './components/Buttons';
import AllTheBooks from './components/AllTheBooks';
import About from './components/About';

function App() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('fantasy');
  const [selectedAsin, setSelectedAsin] = useState(null);

  const handleSearch = (e) => setSearch(e.target.value);

  const booksMap = {
    fantasy: require('./books/fantasy.json'),
    history: require('./books/history.json'),
    horror: require('./books/horror.json'),
    romance: require('./books/romance.json'),
    scifi: require('./books/scifi.json')
  };

  const [theme, setTheme] = useState('light');
  const [authUser, setAuthUser] = useState('Nouha Magdich');

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <AuthContext.Provider value={[authUser]}>
        <BrowserRouter>
          <MyNav search={search} handleSearch={handleSearch} /> 
          <Container className="my-3">
            <Welcome />
            <Buttons setType={setType} />
            <Routes>
              <Route path="/" element={
                <AllTheBooks 
                  books={booksMap[type]} 
                  searchQuery={search} 
                  selectedAsin={selectedAsin}
                  setSelectedAsin={setSelectedAsin}
                  dataid='cards'
                />
              } />
              <Route path="/details/:asin" element={<BookDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
          <MyFooter />
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;



