import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import About from "../pages/APropos/About";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import GlobalStyles from "../style/GlobalStyle";
import useFetchData from "../hooks/useFetch";
useFetchData;
import FichesLogement from "../pages/FichesLogements/FichesLogement";
import { useState, useEffect } from "react";

const AppRoutes = () => {
  const { data } = useFetchData("src/data/data.json");
  console.log(data)
  

  const [selectedLogementId, setSelectedLogementId] = useState(null);

  const handleCardClick = (e, id) => {
    setSelectedLogementId(id);
  };


   
 useEffect(() => {
   if (!data) {
     const timeoutId = setTimeout(() => {
       window.location.href = "/";
     }, 1000);
     return () => clearTimeout(timeoutId);
   }
 }, [data]);
  
  
   const [selectedLogementItem, setSelectedLogementItem] = useState(
     localStorage.getItem("selectedLogementItem") || ""
   );

   useEffect(() => {
     setSelectedLogementItem(selectedLogementId);
   }, [selectedLogementId]);
  
  
  if (!data) {
    // Return loading indicator or null
    return null;
  }


  
  
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleCardClick={handleCardClick}
              selectedLogementId={selectedLogementId}
            />
          }
        />

        <Route
        path="/logement">
          {data.map((logement) => (
            <Route
              key={logement.id}
              path={`/logement/:id`}
              element={
                <FichesLogement
                  data={data}
                  selectedLogementId={selectedLogementId}
                  selectedLogementItem={selectedLogementItem}
                />
              }
            />
          ))}
        </Route>

        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
