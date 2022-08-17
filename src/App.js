import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Account from './routes/Account';
import Signup from './routes/Signup';
import Signin from './routes/Signin';

function App() {


  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
