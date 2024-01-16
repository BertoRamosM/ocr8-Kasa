import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import FichesLogement from '../pages/FichesLogements/FichesLogement';
import About from "../pages/APropos/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GlobalStyles from "../style/GlobalStyle"



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logements" element={<FichesLogement />} />
          <Route path="a-propos" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}
 
export default AppRoutes;