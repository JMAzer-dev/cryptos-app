import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Account from './routes/Account';
import Signup from './routes/Signup';
import Signin from './routes/Signin';
import CoinPage from './routes/CoinPage';
import Footer from './components/Footer';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/entrar" element={<Signin />} />
          <Route path="/registrar" element={<Signup />} />
          <Route path="/minha-conta" element={<Account />} />
          <Route path="/moeda/:coinId" element={<CoinPage />}>
            <Route path=":coinId" />
          </Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
