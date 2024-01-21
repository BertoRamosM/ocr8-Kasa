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

  const [selectedLogementId, setSelectedLogementId] = useState(null);

  const handleCardClick = (e, id) => {
    setSelectedLogementId(id);
    // Update the URL with the selected logement ID
      localStorage.setItem("selectedLogementId", id);

  };

  useEffect(() => {
    if (!data) {
      // Wait for 3 seconds before navigating to the root URL ("/")
      const timeoutId = setTimeout(() => {
        window.location.href = "/";
      }, 200);

      // Cleanup the timeout to avoid memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [data]);

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
