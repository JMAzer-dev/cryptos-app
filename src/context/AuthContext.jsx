import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase/Config';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (email, password) => {
    setError('');
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      setDoc(doc(db, 'users', email), {
        watchList: [],
      });
      setLoading(false);
      navigate('/entrar');
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };

  const signIn = async (email, password) => {
    setError('');
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate('/');
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ signIn, signUp, logout, user, loading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
