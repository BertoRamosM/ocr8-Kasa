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
  const { data, loading } = useFetchData("src/data/data.json");

  const [selectedLogementId, setSelectedLogementId] = useState(null);

  const handleCardClick = (e, id) => {
    setSelectedLogementId(id);
    // Update the URL with the selected logement ID
  };

    useEffect(() => {
      // Fetch data when the component mounts
      // You can also add error handling if needed
      if (!data && !loading) {
        // Fetch data here, e.g., using your useFetchData hook
      }
    }, [data, loading]);

    if (loading) {
      // Return loading indicator or null while data is being fetched
      return null;
    }
  

  

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
        {data.map((logement) => (
          <Route
            key={logement.id}
            path={`/logement/${logement.id}`}
            element={
              <FichesLogement
                data={data}
                selectedLogementId={selectedLogementId}
              />
            }
          />
        ))}

        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
