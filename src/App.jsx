
import './App.css'
import.meta.env.VITE_TMDB_API_KEY;

import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Rowlist from './Components/RowList/Rowlist';

function App() {
  
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      
      <Footer />
    </>
  );
}

export default App
